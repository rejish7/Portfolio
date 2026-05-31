import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Web Vitals Optimization | Faster Websites & Better Rankings",
  description:
    "Core Web Vitals optimization for faster websites and better Google rankings. Improve LCP, CLS, INP to boost both SEO and user experience.",
  keywords: [
    "Core Web Vitals optimization Nepal",
    "page speed optimization",
    "LCP optimization",
    "CLS optimization",
    "web performance",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/core-web-vitals-optimization",
  },
};

export default function CoreWebVitalsPage() {
  const metrics = [
    {
      metric: "LCP",
      full: "Largest Contentful Paint",
      target: "< 2.5s",
      impact: "Page load speed perception",
    },
    {
      metric: "CLS",
      full: "Cumulative Layout Shift",
      target: "< 0.1",
      impact: "Visual stability",
    },
    {
      metric: "INP",
      full: "Interaction to Next Paint",
      target: "< 200ms",
      impact: "Responsiveness",
    },
  ];

  const optimizations = [
    "Image optimization and lazy loading",
    "Code splitting and tree shaking",
    "CSS and JavaScript minification",
    "Server response time improvement",
    "Caching strategies (browser, CDN, server)",
    "Font optimization and preloading",
    "Video compression and streaming",
    "Database query optimization",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Core Web Vitals Optimization",
            "description": "Optimize Core Web Vitals for faster websites and better rankings",
            "url": "https://rejishkhanal.com.np/core-web-vitals-optimization",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Rejish Khanal",
              "areaServed": "NP",
            },
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Core Web Vitals Optimization for Faster Websites and Better Google Rankings
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Google ranks faster websites higher. Slow Core Web Vitals hurt both rankings and conversions. I optimize
            LCP, CLS, and INP to make your site faster and more profitable.
          </p>

          <Link href="/contact">
            <Button size="lg" className="group">
              Get Core Web Vitals Fixed
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Core Web Vitals Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">The Three Core Web Vitals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((m, idx) => (
              <Card key={idx} className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    {m.metric}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-semibold">{m.full}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Google Target</p>
                      <p className="font-semibold text-primary">{m.target}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">What it Measures</p>
                      <p className="font-semibold text-sm">{m.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Optimizations */}
        <section className="mb-16 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-2xl font-bold mb-6">How I Optimize Core Web Vitals</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {optimizations.map((opt, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <p className="text-foreground">{opt}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Is Your Website Too Slow?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's fix it. Faster websites rank higher and convert better.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Get a Performance Audit
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-16 border-t">
          <h3 className="text-lg font-semibold mb-4">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/technical-seo-specialist-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Technical SEO Specialist</p>
            </Link>
            <Link
              href="/seo-audit-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">SEO Audit Nepal</p>
            </Link>
            <Link
              href="/web-development-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Web Development Nepal</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
