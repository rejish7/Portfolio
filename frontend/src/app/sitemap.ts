import { MetadataRoute } from "next";

const baseUrl = "https://rejishkhanal.com.np";

/**
 * Static indexable pages.
 * `lastModified` is the date of the last meaningful content change to the
 * page source (from git history) — NOT the build/deploy time.
 * Update the date only when the page's main content changes.
 */
const staticPages: { path: string; lastModified: string }[] = [
  { path: "/", lastModified: "2026-09-19" },
  { path: "/about", lastModified: "2026-09-21" },
  { path: "/services", lastModified: "2026-09-23" },
  { path: "/tools", lastModified: "2026-09-21" },
  { path: "/tools/core-web-vitals-checker", lastModified: "2026-09-23" },
  { path: "/case-studies", lastModified: "2026-09-19" },
  { path: "/case-studies/technical-seo-ecommerce", lastModified: "2026-09-19" },
  { path: "/case-studies/core-web-vitals-saas", lastModified: "2026-09-19" },
  { path: "/case-studies/local-seo-restaurant", lastModified: "2026-09-19" },
  { path: "/tech-stack", lastModified: "2026-09-19" },
  { path: "/projects", lastModified: "2026-09-19" },
  { path: "/blog", lastModified: "2026-09-23" },
  { path: "/free-seo-review", lastModified: "2026-09-05" },
  { path: "/contact", lastModified: "2026-09-23" },
  { path: "/privacy-policy", lastModified: "2026-08-29" },
  { path: "/seo-expert-nepal", lastModified: "2026-09-23" },
  { path: "/technical-seo-expert-nepal", lastModified: "2026-09-23" },
  { path: "/aeo-expert-nepal", lastModified: "2026-09-23" },
  { path: "/geo-expert-nepal", lastModified: "2026-09-23" },
  { path: "/seo-audit-nepal", lastModified: "2026-09-23" },
  { path: "/google-search-console-expert-nepal", lastModified: "2026-09-23" },
  { path: "/core-web-vitals-optimization", lastModified: "2026-09-23" },
  { path: "/local-seo-services-nepal", lastModified: "2026-09-23" },
  { path: "/seo-specialist-kathmandu", lastModified: "2026-09-23" },
  { path: "/seo-consultant-nepal", lastModified: "2026-09-23" },
  { path: "/wordpress-seo-expert-nepal", lastModified: "2026-09-23" },
  { path: "/seo-specialist-uk-technical-seo-wordpress", lastModified: "2026-09-23" },
  { path: "/nextjs-seo-services", lastModified: "2026-09-23" },
  { path: "/web-development-nepal", lastModified: "2026-09-23" },
  { path: "/django-developer-nepal", lastModified: "2026-05-31" },
  { path: "/laravel-developer-nepal", lastModified: "2026-05-31" },
];

async function fetchSlugs<T extends { slug: string }>(endpoint: string): Promise<T[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.rejishkhanal.com.np";
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(`${apiUrl}${endpoint}`, { next: { revalidate: 3600 } });
      if (res.ok) return res.json();
    } catch {
      // retry below
    }
    await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
  }
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, blogs] = await Promise.all([
    fetchSlugs<{ slug: string; updatedAt?: string }>("/api/projects"),
    fetchSlugs<{ slug: string; publishedAt?: string; updatedAt?: string }>("/api/blogs"),
  ]);

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => {
    const lastModified = project.updatedAt;
    return {
      url: `${baseUrl}/projects/${project.slug}`,
      ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
    };
  });

  const blogEntries: MetadataRoute.Sitemap = blogs.map((post) => {
    const lastModified = post.updatedAt || post.publishedAt;
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
    };
  });

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: page.path === "/" ? `${baseUrl}/` : `${baseUrl}${page.path}`,
    lastModified: new Date(page.lastModified),
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
