import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Browse technical SEO services, case studies, and articles by Rejish Khanal.",
  robots: { index: false, follow: true },
};

const suggestions = [
  {
    href: "/",
    label: "Home",
    description: "Technical SEO, AEO, GEO and web development in Nepal.",
  },
  {
    href: "/services",
    label: "Services",
    description: "SEO audits, Core Web Vitals, AEO/GEO and development.",
  },
  {
    href: "/case-studies",
    label: "Case Studies",
    description: "Documented SEO results with Google Search Console data.",
  },
  {
    href: "/blog",
    label: "Blog",
    description: "Practical technical SEO and AI search articles.",
  },
  {
    href: "/projects",
    label: "Projects",
    description: "SEO, AEO and GEO project portfolio.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Request a quote or a discovery call.",
  },
];

const nfStyles = `
@keyframes nf-rise {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}

.nf-rise {
  opacity: 0;
  animation: nf-rise 0.6s cubic-bezier(0.2, 0.7, 0.3, 1) forwards;
  animation-delay: var(--nf-delay, 0ms);
}

.nf-card {
  transition: transform 0.2s ease-out, border-color 0.2s ease-out,
    box-shadow 0.2s ease-out, background-color 0.2s ease-out;
}

.nf-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.nf-card:active {
  transform: scale(0.98);
  transition-duration: 0.1s;
}

.nf-card:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nf-rise { animation: none; opacity: 1; transform: none; }
  .nf-card, .nf-card:hover, .nf-card:active { transition: none; transform: none; }
}
`;

export default function NotFound() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rejishkhanal.com.np/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Page Not Found",
      },
    ],
  };

  return (
    <>
      <style>{nfStyles}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main className="relative overflow-hidden pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        />

        <div className="max-w-3xl mx-auto text-center">
          <p
            className="nf-rise text-sm font-semibold text-primary mb-2"
            style={{ "--nf-delay": "0ms" } as React.CSSProperties}
          >
            Error 404
          </p>

          <div
            className="nf-rise select-none font-bold leading-[0.95] tracking-[-0.05em] bg-gradient-to-b from-foreground to-foreground/30 bg-clip-text text-transparent text-[clamp(6rem,18vw,11rem)]"
            style={{ "--nf-delay": "60ms" } as React.CSSProperties}
            aria-hidden="true"
          >
            404
          </div>

          <h1
            className="nf-rise text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-tight mt-2 mb-4"
            style={{ "--nf-delay": "140ms" } as React.CSSProperties}
          >
            This page could not be found
          </h1>

          <p
            className="nf-rise text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
            style={{ "--nf-delay": "220ms" } as React.CSSProperties}
          >
            The URL may be outdated or mistyped. Pick one of the sections below
            to keep going.
          </p>

          <div
            className="nf-rise mb-14"
            style={{ "--nf-delay": "300ms" } as React.CSSProperties}
          >
            <Link href="/">
              <Button className="group" size="lg">
                Back to Home
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <nav aria-label="Suggested pages" className="max-w-4xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((item, index) => (
              <li
                key={item.href}
                className="nf-rise"
                style={{ "--nf-delay": `${380 + index * 60}ms` } as React.CSSProperties}
              >
                <Link
                  href={item.href}
                  className="nf-card group block h-full rounded-xl border bg-card p-5 text-left hover:border-primary/50"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">
                      {item.label}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-2 block text-sm text-muted-foreground">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
}
