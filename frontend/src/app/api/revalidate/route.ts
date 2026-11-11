import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { checkRateLimit } from "@/lib/rateLimit";

// On-demand ISR revalidation for content published/updated via the API
// (e.g. through Postman). Works with zero configuration:
//
//   POST /api/revalidate        ?scope=blog (default) | projects | all
//
// If REVALIDATE_SECRET is set in the environment, requests must send
// "Authorization: Bearer <secret>"; otherwise the endpoint stays open but is
// strictly rate-limited (10 calls/hour per IP) since it only triggers a
// harmless cache refresh against the public API.
const SECRET = process.env.REVALIDATE_SECRET;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const { allowed } = checkRateLimit(`revalidate:${ip}`, {
    maxRequests: 10,
    windowMs: 60 * 60 * 1000,
  });
  if (!allowed) {
    return NextResponse.json(
      { revalidated: false, error: "Too many revalidation requests" },
      { status: 429 }
    );
  }

  if (SECRET) {
    const auth = req.headers.get("authorization") || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
    if (token !== SECRET) {
      return NextResponse.json({ revalidated: false, error: "Unauthorized" }, { status: 401 });
    }
  }

  const scope = req.nextUrl.searchParams.get("scope") || "blog";
  const paths: string[] = [];

  if (scope === "blog" || scope === "all") {
    revalidatePath("/blog");
    // Invalidate every /blog/[slug] page without knowing the slugs.
    revalidatePath("/blog/[slug]", "page");
    paths.push("/blog", "/blog/[slug]");
  }

  if (scope === "projects" || scope === "all") {
    revalidatePath("/projects");
    revalidatePath("/projects/[slug]", "page");
    paths.push("/projects", "/projects/[slug]");
  }

  if (paths.length === 0) {
    return NextResponse.json(
      { revalidated: false, error: `Unknown scope: ${scope}` },
      { status: 400 }
    );
  }

  return NextResponse.json({
    revalidated: true,
    scope,
    paths,
    timestamp: new Date().toISOString(),
  });
}
