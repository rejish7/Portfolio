import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionNav } from "@/components/SectionNav";
import { fetchProjects, projectsBaseUrl } from "@/lib/projects";
import type { Project } from "@/lib/types";

const LIST_TITLE = "SEO, AEO & GEO Projects";
const LIST_DESCRIPTION =
  "Documented SEO, AEO and GEO case studies across agencies, e-commerce, local services and finance, with verified Google Search Console results.";

export const metadata: Metadata = {
  title: LIST_TITLE,
  description: LIST_DESCRIPTION,
  alternates: {
    canonical: `${projectsBaseUrl}/projects`,
  },
  openGraph: {
    title: `${LIST_TITLE} | Rejish Khanal`,
    description: LIST_DESCRIPTION,
    url: `${projectsBaseUrl}/projects`,
    siteName: "Rejish Khanal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${LIST_TITLE} | Rejish Khanal`,
    description: LIST_DESCRIPTION,
    creator: "@KhanalRejish",
    images: ["https://rejishkhanal.com.np/og-image.jpg"],
  },
};

// Cached listing with hourly revalidation (fast TTFB for Googlebot).
export const revalidate = 3600;

// The listing never renders project imagery or long-form copy, so the page
// ships a lean projection of each project instead of the full document.
function toCard(project: Project): Project {
  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    description: project.description,
    summary: project.summary,
    industry: project.industry,
    category: project.category,
    technologies: project.technologies,
    results: project.results,
    liveUrl: project.liveUrl,
    seo: project.seo,
  };
}

function aggregate(projects: Project[]) {
  let impressions = 0;
  let clicks = 0;

  for (const project of projects) {
    for (const result of project.results || []) {
      const raw = result.value.replace(/,/g, "");
      const multiplier = /K$/i.test(raw) ? 1000 : /M$/i.test(raw) ? 1000000 : 1;
      const numeric = parseFloat(raw);
      if (Number.isNaN(numeric)) continue;

      if (/impression/i.test(result.label)) impressions += numeric * multiplier;
      if (/click/i.test(result.label)) clicks += numeric * multiplier;
    }
  }

  return { impressions, clicks };
}

function formatCount(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return `${Math.round(value)}`;
}

function joinList(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

const pageStyles = `
@keyframes pl-rise {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}

.pl-rise {
  opacity: 0;
  animation: pl-rise 0.6s cubic-bezier(0.2, 0.7, 0.3, 1) forwards;
  animation-delay: var(--pl-delay, 0ms);
}

@media (prefers-reduced-motion: reduce) {
  .pl-rise { animation: none; opacity: 1; transform: none; }
}
`;

export default async function ProjectsPage() {
  const allProjects = (await fetchProjects()).map(toCard);
  const { impressions, clicks } = aggregate(allProjects);
  const industries = [
    ...new Set(
      allProjects
        .map((project) => project.industry || project.category)
        .filter((value): value is string => Boolean(value))
    ),
  ];

  const itemList = allProjects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Article",
      headline: project.title,
      description: project.summary || project.description,
      url: `${projectsBaseUrl}/projects/${project.slug}`,
      author: { "@type": "Person", "@id": `${projectsBaseUrl}/#person` },
      publisher: { "@type": "Person", "@id": `${projectsBaseUrl}/#person` },
      about: project.industry
        ? { "@type": "DefinedTerm", name: project.industry }
        : undefined,
      keywords: project.seo?.keywords?.join(", ") || project.technologies.join(", "),
    },
  }));

  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "SEO, AEO & GEO Projects",
        description: LIST_DESCRIPTION,
        url: `${projectsBaseUrl}/projects`,
        author: { "@type": "Person", "@id": `${projectsBaseUrl}/#person` },
        mainEntity: {
          "@type": "ItemList",
          name: "SEO, AEO and GEO case studies by industry",
          numberOfItems: allProjects.length,
          itemListElement: itemList,
        },
      },
      industries.length
        ? {
            "@type": "DefinedTermSet",
            name: "Industries covered in these SEO case studies",
            url: `${projectsBaseUrl}/projects`,
            hasDefinedTerm: industries.map((industry) => ({
              "@type": "DefinedTerm",
              name: industry,
            })),
          }
        : null,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${projectsBaseUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${projectsBaseUrl}/projects`,
          },
        ],
      },
    ],
  };

  return (
    <div className="pt-24 pb-24">
      <style>{pageStyles}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <SectionNav
        sections={[
          { id: "projects-hero", label: "Introduction" },
          { id: "portfolio-glance", label: "Overview" },
          { id: "projects-grid", label: "Case Studies" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="inline h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="text-foreground">
              Projects
            </li>
          </ol>
        </nav>

        <div id="projects-hero" className="text-center mb-14">
          <p
            className="pl-rise text-sm font-semibold text-primary mb-3"
            style={{ "--pl-delay": "0ms" } as React.CSSProperties}
          >
            Documented results, verified with Google Search Console
          </p>
          <h1
            className="pl-rise text-[clamp(2.25rem,5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-5"
            style={{ "--pl-delay": "80ms" } as React.CSSProperties}
          >
            SEO, AEO &amp; GEO Projects
          </h1>
          <p
            className="pl-rise text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            style={{ "--pl-delay": "160ms" } as React.CSSProperties}
          >
            Documented search engagements across agencies, e-commerce, local services and
            finance. Every case study lists the industry, the work performed and verified
            Google Search Console results. Clients stay anonymous. Only industry, scope and
            search data are published.
          </p>
        </div>

        {allProjects.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <p className="text-lg font-semibold text-foreground mb-2">
              No case studies yet
            </p>
            <p className="text-sm text-muted-foreground">
              New documented projects are being prepared. Check back soon.
            </p>
          </div>
        ) : (
          <>
            <section
              id="portfolio-glance"
              aria-label="Portfolio at a glance"
              className="pl-rise mb-14 rounded-2xl border border-border bg-card p-6 sm:p-8"
              style={{ "--pl-delay": "240ms" } as React.CSSProperties}
            >
              <h2 className="text-lg font-semibold tracking-[-0.01em] mb-1">
                Portfolio at a glance
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Aggregated across the tracked six-month windows shown in each case study.
              </p>
              <dl className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-4">
                {[
                  { label: "Case studies", value: allProjects.length },
                  { label: "Google impressions", value: formatCount(impressions) },
                  { label: "Organic clicks", value: formatCount(clicks) },
                  { label: "Industries", value: industries.length },
                ].map((stat) => (
                  <div key={stat.label} className="sm:border-l sm:border-border sm:pl-6 sm:first:border-l-0 sm:first:pl-0">
                    <dt className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-bold text-primary tabular-nums tracking-[-0.02em]">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
                <strong className="font-semibold text-foreground">
                  What does this portfolio cover?
                </strong>{" "}
                {allProjects.length} anonymized search case studies across {joinList(industries)}:{" "}
                technical SEO, local SEO, e-commerce SEO, AEO and GEO work with published
                Google Search Console results.
              </p>
            </section>

            <section
              id="projects-grid"
              aria-labelledby="projects-grid-heading"
              className="pl-rise"
              style={{ "--pl-delay": "320ms" } as React.CSSProperties}
            >
              <h2
                id="projects-grid-heading"
                className="text-2xl font-bold tracking-[-0.02em] mb-6"
              >
                All case studies{" "}
                <span className="text-muted-foreground font-medium">
                  ({allProjects.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
