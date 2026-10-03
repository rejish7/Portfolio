import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cache } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  ChevronRight,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { fetchProjects, mapProject, projectsBaseUrl, relatedProjects } from "@/lib/projects";
import type { Project } from "@/lib/types";

// On-demand ISR: renders on first request, serves a cached copy and refreshes
// hourly. A throwing fetch (API down) keeps the last good copy instead of a 500.
export const revalidate = 3600;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.rejishkhanal.com.np";

// Dedupe the API call shared by generateMetadata() and the page component
// within one render pass (halves API traffic and rate-limit exposure).
const getProject = cache(async (slug: string): Promise<Project | null> => {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/projects/slug/${slug}`, {
        next: { revalidate: 3600 },
      });

      // Genuine "not found" — the only case that should become a 404 page.
      if (res.status === 404) return null;

      if (!res.ok) {
        throw new Error(`Projects API responded with ${res.status}`);
      }

      const project = await res.json();
      return mapProject(project);
    } catch (error) {
      console.error(`Failed to fetch project (attempt ${attempt}):`, error);
      if (attempt === 3) {
        // Transient API failure: server error, never a soft 404.
        throw new Error(`Failed to load /projects/${slug}: ${error}`);
      }
      await new Promise((resolve) => setTimeout(resolve, 400 * attempt));
    }
  }
  return null;
});

// Cached project list used for the related-case-study block.
const getAllProjects = cache(fetchProjects);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const title = project.seo?.title || project.title;
  const description = project.seo?.description || project.description;
  const keywords = [
    ...(project.seo?.keywords || []),
    ...(project.industry ? [project.industry] : []),
    ...project.technologies,
  ].join(", ");

  return {
    title: { absolute: `${title} | Rejish Khanal` },
    description,
    keywords,
    alternates: {
      canonical: `${projectsBaseUrl}/projects/${slug}`,
    },
    openGraph: {
      title: `${title} | Rejish Khanal`,
      description,
      url: `${projectsBaseUrl}/projects/${slug}`,
      siteName: "Rejish Khanal",
      type: "article",
      images: project.image ? [{ url: project.image, alt: project.imageAlt || project.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Rejish Khanal`,
      description,
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const related = relatedProjects(await getAllProjects(), project);

  const url = `${projectsBaseUrl}/projects/${slug}`;
  const personRef = { "@type": "Person" as const, "@id": `${projectsBaseUrl}/#person` };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: project.title,
        description: project.seo?.description || project.description,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        ...(project.image
          ? { image: `${projectsBaseUrl}${project.image}` }
          : {}),
        ...(project.publishedAt ? { datePublished: project.publishedAt } : {}),
        ...(project.updatedAt ? { dateModified: project.updatedAt } : {}),
        author: personRef,
        publisher: personRef,
        about: project.industry
          ? { "@type": "DefinedTerm", name: project.industry }
          : undefined,
        keywords:
          project.seo?.keywords?.join(", ") || project.technologies.join(", "),
        articleSection: project.category || project.industry,
        isAccessibleForFree: true,
      },
      ...(project.faqs && project.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: project.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ]
        : []),
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
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <div className="pt-24 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
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
            <li>
              <Link href="/projects" className="hover:text-primary">
                Projects
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="inline h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="text-foreground">
              {project.title}
            </li>
          </ol>
        </nav>

        <Link href="/projects">
          <Button variant="ghost" className="mb-8 -ml-3">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-10">
          {(project.industry || project.category) && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              {project.industry || project.category}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">{project.title}</h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-5">
            {project.duration && <span>Engagement: {project.duration}</span>}
            {project.services && project.services.length > 0 && (
              <span>{project.services.length} workstreams</span>
            )}
            <span>Industry: {project.industry || project.category || "Confidential"}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.clientScope && (
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{project.clientScope}</span>
            </p>
          )}
        </header>

        {/* Answer-first summary (AEO) */}
        {project.summary && (
          <section
            id="result-summary"
            aria-label="Result summary"
            className="mb-10 rounded-xl border border-primary/25 bg-primary/5 p-6"
          >
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              The result, in one sentence
            </h2>
            <p className="text-lg leading-relaxed text-foreground">{project.summary}</p>
          </section>
        )}

        {/* Results (GEO: citable statistics) */}
        {project.results && project.results.length > 0 && (
          <section id="results" aria-labelledby="results-heading" className="mb-10">
            <h2 id="results-heading" className="text-2xl font-bold mb-4">
              Measured results
            </h2>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {result.label}
                  </dt>
                  <dd className="mt-1 flex flex-wrap items-baseline gap-3">
                    <span className="text-3xl font-bold text-primary">{result.value}</span>
                    {result.change && (
                      <span
                        className={`text-sm font-medium ${
                          result.direction === "up"
                            ? "text-emerald-600 dark:text-emerald-400"
                            : result.direction === "down"
                              ? "text-amber-600 dark:text-amber-400"
                              : "text-muted-foreground"
                        }`}
                      >
                        {result.change}
                      </span>
                    )}
                  </dd>
                  {result.context && (
                    <p className="mt-2 text-xs text-muted-foreground">{result.context}</p>
                  )}
                </div>
              ))}
            </dl>
            <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <LineChart className="h-3.5 w-3.5" />
              Source: Google Search Console, last 6 months compared with the previous 6
              months. Figures are for the tracked property, not paid media.
            </p>
          </section>
        )}

        {/* Project Image — inner page only */}
        {project.image && (
          <figure className="mb-10">
            <div className="aspect-video relative overflow-hidden rounded-lg bg-accent">
              <Image
                src={project.image}
                alt={project.imageAlt || `${project.title}: Google Search Console results`}
                width={2000}
                height={1180}
                className="w-full h-full object-contain bg-background"
                priority={true}
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
            {project.imageCaption && (
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {project.imageCaption}
              </figcaption>
            )}
          </figure>
        )}

        {/* Overview */}
        <section id="overview" aria-labelledby="overview-heading" className="mb-10">
          <h2 id="overview-heading" className="text-2xl font-bold mb-4">
            Project overview
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {project.services && project.services.length > 0 && (
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2 rounded-md bg-accent px-3 py-2 text-sm"
                >
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {service}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Long-form sections */}
        {project.sections && project.sections.length > 0 && (
          <section className="mb-10 space-y-8">
            {project.sections.map((section) => {
              const id = section.heading
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
              return (
                <article key={section.heading} id={id}>
                  <h2 className="text-2xl font-bold mb-3">{section.heading}</h2>
                  <p className="leading-relaxed text-muted-foreground">{section.body}</p>
                </article>
              );
            })}
          </section>
        )}

        {/* Key takeaways (GEO: quotable, attributable statements) */}
        {project.highlights && project.highlights.length > 0 && (
          <section
            id="key-takeaways"
            aria-labelledby="takeaways-heading"
            className="mb-10 rounded-xl border border-border bg-card p-6"
          >
            <h2 id="takeaways-heading" className="text-2xl font-bold mb-4">
              Key takeaways
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ (AEO) */}
        {project.faqs && project.faqs.length > 0 && (
          <section id="faq" aria-labelledby="faq-heading" className="mb-10">
            <h2 id="faq-heading" className="text-2xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {project.faqs.map((faq) => {
                const id = faq.question
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "");
                return (
                  <details key={faq.question} id={id} className="group rounded-lg border border-border bg-card p-4">
                    <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
                      <span className="flex items-start justify-between gap-3">
                        {faq.question}
                        <span aria-hidden="true" className="mt-1 text-primary transition-transform group-open:rotate-45">
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </details>
                );
              })}
            </div>
          </section>
        )}

        {/* Related case studies (internal linking) */}
        {related.length > 0 && (
          <section
            id="related-case-studies"
            aria-labelledby="related-heading"
            className="mb-10"
          >
            <h2 id="related-heading" className="text-2xl font-bold mb-4">
              More case studies
            </h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/projects/${item.slug}`}
                    className="flex h-full flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
                  >
                    {(item.industry || item.category) && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                        {item.industry || item.category}
                      </span>
                    )}
                    <span className="font-semibold leading-snug">{item.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {item.summary || item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Actions */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Site
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </Button>
              </a>
            )}
          </div>
        )}

        <footer className="mt-16 pt-8 border-t border-border">
          <Link href="/projects">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View All Projects
            </Button>
          </Link>
        </footer>
      </div>
    </div>
  );
}
