import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Next.js SEO Services | Build Crawlable, Fast, Rankable Web Apps",
  description:
    "Next.js SEO services for crawlable, fast, and rankable web applications. App Router, server components, and static generation optimized for search engines.",
  keywords: [
    "Next.js SEO services",
    "JavaScript SEO",
    "React SEO",
    "App Router SEO",
    "technical SEO for developers",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/nextjs-seo-services",
  },
};

export default function NextJSSEOPage() {
  const services = [
    "App Router and Pages Router setup for SEO",
    "Server-side rendering (SSR) configuration",
    "Static generation (SSG) optimization",
    "Dynamic metadata with generateMetadata()",
    "Core Web Vitals optimization",
    "Image optimization with next/image",
    "Sitemap and robots.txt generation",
    "Canonical URLs and redirects",
    "Schema markup implementation",
    "Open Graph and Twitter card setup",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Next.js SEO Services",
            "url": "https://rejishkhanal.com.np/nextjs-seo-services",
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Next.js SEO Services for Crawlable, Fast, and Rankable Web Apps
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Next.js is powerful, but many developers ship non-SEO-friendly apps. I build and audit Next.js applications
            optimized for search engines, Core Web Vitals, and conversions.
          </p>

          <Link href="/contact">
            <Button size="lg" className="group">
              Get Next.js SEO Optimization
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Next.js SEO Services I Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg mt-1">✓</span>
                    <p className="text-foreground">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Build or Optimize Your Next.js App for SEO</h2>
          <Link href="/contact">
            <Button size="lg" className="group">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-16 border-t">
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/web-development-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Web Development Services</p>
            </Link>
            <Link
              href="/technical-seo-specialist-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Technical SEO Specialist</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
