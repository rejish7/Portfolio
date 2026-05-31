import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Technical SEO & Web Development Results",
  description:
    "Real case studies showing how I've helped businesses improve their technical SEO, rankings, and organic traffic.",
  keywords: [
    "case studies",
    "SEO results",
    "technical SEO case studies",
    "web development projects",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/case-studies",
  },
};

const caseStudies = [
  {
    title: "Technical SEO Audit — E-Commerce Site",
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
    title: "Local SEO Setup — Kathmandu Restaurant",
    description: "Google Business Profile optimization and local citations for visibility",
    metrics: [
      { label: "Google Maps Views", value: "+156%" },
      { label: "Website Clicks", value: "+89%" },
      { label: "Phone Calls", value: "+120%" },
    ],
    slug: "local-seo-restaurant",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Case Studies & Results</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Real projects with real results. See how I've helped businesses improve their technical SEO, rankings,
            traffic, and conversions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-1 gap-8">
            {caseStudies.map((study, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center p-4 bg-accent/30 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
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
            Let's work together to improve your rankings, traffic, and conversions.
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
