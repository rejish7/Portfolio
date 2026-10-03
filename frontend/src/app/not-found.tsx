import type { Metadata } from "next";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Compass className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>

          <p className="text-sm font-semibold text-primary mb-3">Error 404</p>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            This page could not be found
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            The URL may be outdated or mistyped. Pick one of the sections below
            to keep going.
          </p>

          <Link href="/">
            <Button className="group mb-14">
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <nav aria-label="Suggested pages" className="max-w-4xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block h-full rounded-lg border bg-card p-5 text-left hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <span className="font-semibold text-foreground">
                    {item.label}
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
