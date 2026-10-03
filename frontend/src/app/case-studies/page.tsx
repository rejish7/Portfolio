import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO and Web Development Case Studies",
  description:
    "Real SEO case studies with Google Search Console proof: e-commerce SEO (5.71K clicks, 12.2% CTR, position 5.8) and service business SEO (26.7K impressions), plus technical and local SEO projects.",
  keywords: [
    "case studies",
    "SEO results",
    "technical SEO case studies",
    "e-commerce SEO case study",
    "service business SEO case study",
    "Google Search Console results",
    "web development projects",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/case-studies",
  },
  openGraph: {
    title: "SEO and Web Development Case Studies | Rejish Khanal",
    description:
      "Real SEO case studies with Google Search Console proof covering e-commerce, service business, technical SEO, performance optimization and local search.",
    url: "https://rejishkhanal.com.np/case-studies",
    siteName: "Rejish Khanal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO and Web Development Case Studies | Rejish Khanal",
    description:
      "Real SEO case studies with Google Search Console proof covering e-commerce, service business, technical SEO, performance optimization and local search.",
    creator: "@KhanalRejish",
    images: ["https://rejishkhanal.com.np/og-image.jpg"],
  },
};

const caseStudies = [
  {
    title: "E-Commerce SEO: 46.6K Impressions, 12.2% CTR",
    description:
      "A technical and on-page overhaul took this online store to 5.71K clicks, a 12.2% CTR and an average position of 5.8, plus 2.03K impressions in Google’s AI Overviews.",
    industry: "E-Commerce",
    period: "25 Jun – 21 Sep 2026",
    image: {
      src: "/case-studies/ecommerce-gsc-performance.png",
      alt: "Google Search Console chart showing 5.71K clicks, 46.6K impressions, 12.2% CTR and average position 5.8 for the e-commerce store",
      width: 2062,
      height: 1106,
    },
    metrics: [
      { label: "Total Clicks", value: "5.71K" },
      { label: "Average CTR", value: "12.2%" },
      { label: "Average Position", value: "5.8" },
    ],
    slug: "ecommerce-seo-growth",
  },
  {
    title: "Service Business SEO: 26.7K Impressions",
    description:
      "Service page restructuring, entity schema and topic clusters delivered 1.2K clicks, 26.7K impressions and a 4.5% CTR across a 90-day engagement.",
    industry: "Service Business",
    period: "25 Jun – 21 Sep 2026",
    image: {
      src: "/case-studies/service-gsc-performance.png",
      alt: "Google Search Console chart showing 1.2K clicks, 26.7K impressions, 4.5% CTR and average position 20.6 for the service business",
      width: 2052,
      height: 1110,
    },
    metrics: [
      { label: "Total Clicks", value: "1.2K" },
      { label: "Total Impressions", value: "26.7K" },
      { label: "Average Position", value: "20.6" },
    ],
    slug: "service-business-seo",
  },
  {
    title: "Technical SEO Audit - E-Commerce Site",
    description: "Improved crawlability and Core Web Vitals leading to 45% traffic increase",
    metrics: [
      { label: "Traffic Increase", value: "45%" },
      { label: "Ranking Improvement", value: "+28 keywords" },
      { label: "LCP Improvement", value: "5.2s → 1.9s" },
    ],
    slug: "technical-seo-ecommerce",
  },
  {
    title: "Core Web Vitals Optimization",
    description: "Optimized page speed resulting in better rankings and 32% higher conversions",
    metrics: [
      { label: "LCP", value: "1.8s" },
      { label: "Conversion Increase", value: "+32%" },
      { label: "Bounce Rate", value: "-15%" },
    ],
    slug: "core-web-vitals-saas",
  },
  {
    title: "Local SEO Setup - Kathmandu Restaurant",
    description: "Google Business Profile optimization and local citations for visibility",
    metrics: [
      { label: "Google Maps Views", value: "+156%" },
      { label: "Website Clicks", value: "+89%" },
      { label: "Phone Calls", value: "+120%" },
    ],
    slug: "local-seo-restaurant",
  },
];

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "SEO and Web Development Case Studies",
  url: "https://rejishkhanal.com.np/case-studies",
  description:
    "Real SEO case studies with Google Search Console proof covering e-commerce, service business, technical SEO and local search.",
  author: {
    "@type": "Person",
    "@id": "https://rejishkhanal.com.np/#person",
    name: "Rejish Khanal",
  },
  hasPart: caseStudies.map((study) => ({
    "@type": "Article",
    headline: study.title,
    description: study.description,
    url: `https://rejishkhanal.com.np/case-studies/${study.slug}`,
    image: study.image
      ? `https://rejishkhanal.com.np${study.image.src}`
      : undefined,
    author: {
      "@type": "Person",
      "@id": "https://rejishkhanal.com.np/#person",
      name: "Rejish Khanal",
    },
  })),
};

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
        name: "Case Studies",
        item: "https://rejishkhanal.com.np/case-studies",
      },
    ],
  };

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <div className="mb-16">
          <span className="block text-xs font-semibold uppercase tracking-wider text-primary font-mono mb-3">
            Verified Results
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Case Studies & Results</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Real projects with real results. Every headline number below is pulled from
            Google Search Console. See how I&apos;ve helped businesses improve their technical
            SEO, rankings, traffic, and conversions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <section className="mb-16" aria-label="Case studies">
          <div className="grid md:grid-cols-1 gap-8">
            {caseStudies.map((study, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {"industry" in study && study.industry && (
                      <span className="px-3 py-1 rounded-full bg-accent text-xs font-semibold text-foreground border border-border">
                        {study.industry}
                      </span>
                    )}
                    {"period" in study && study.period && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold font-mono">
                        {study.period}
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-2xl mb-2 leading-snug">{study.title}</CardTitle>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardHeader>
                <CardContent>
                  {"image" in study && study.image && (
                    <div className="mb-6 rounded-xl border border-border overflow-hidden bg-muted">
                      <Image
                        src={study.image.src}
                        alt={study.image.alt}
                        width={study.image.width}
                        height={study.image.height}
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="w-full h-auto"
                        priority={idx === 0}
                      />
                    </div>
                  )}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="text-center p-4 bg-accent/30 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link href={`/case-studies/${study.slug}`}>
                    <Button variant="outline" className="group">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready for Similar Results?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s work together to improve your rankings, traffic, and conversions.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
