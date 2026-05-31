import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Audit Nepal | Find What's Hurting Your Rankings",
  description:
    "Professional SEO audit in Nepal to identify technical issues, content gaps, and ranking problems. Get a detailed report with actionable recommendations.",
  keywords: [
    "SEO audit Nepal",
    "website SEO audit Nepal",
    "technical SEO audit Nepal",
    "Google Search Console audit",
    "Core Web Vitals audit",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/seo-audit-nepal",
  },
};

export default function SEOAuditPage() {
  const auditAreas = [
    {
      title: "Technical SEO",
      items: [
        "Crawlability and indexation analysis",
        "Core Web Vitals and page speed",
        "Mobile responsiveness check",
        "Schema markup validation",
        "XML sitemap and robots.txt audit",
      ],
    },
    {
      title: "On-Page SEO",
      items: [
        "Title tags and meta descriptions",
        "Heading structure (H1-H6)",
        "Keyword targeting analysis",
        "Internal linking strategy",
        "Content quality assessment",
      ],
    },
    {
      title: "Backlink & Authority",
      items: [
        "Backlink profile analysis",
        "Referring domain count",
        "Toxic link detection",
        "Domain authority trends",
        "Competitor backlink comparison",
      ],
    },
    {
      title: "Competitive Analysis",
      items: [
        "Top ranking competitor analysis",
        "Keyword gap identification",
        "Content strategy benchmarking",
        "Technical competitor comparison",
        "Ranking opportunity identification",
      ],
    },
  ];

  const deliverables = [
    "50-100+ page comprehensive PDF report",
    "Executive summary with priority fixes",
    "Detailed findings with screenshots",
    "Actionable recommendations ranked by impact",
    "Competitor comparison analysis",
    "30-day implementation roadmap",
    "Video walkthrough of findings (optional)",
    "Monthly follow-up tracking (optional)",
  ];

  const faqs = [
    {
      question: "What is included in an SEO audit?",
      answer:
        "A comprehensive SEO audit covers: technical SEO (crawlability, Core Web Vitals, schema), on-page SEO (metadata, content), backlinks, competitors, and ranking opportunities. My audits are 50-100+ pages with actionable recommendations.",
    },
    {
      question: "How long does an SEO audit take?",
      answer:
        "Typical audit turnaround is 5-7 business days. The audit itself takes 2-3 hours of detailed analysis per 1000 pages. Report generation and recommendations take another 2-3 days.",
    },
    {
      question: "How much does an SEO audit cost?",
      answer:
        "Audits start at NPR 15,000 for small sites (< 50 pages). Medium sites (50-500 pages) are NPR 25,000-40,000. Large sites require custom pricing. Contact me for a free consultation.",
    },
    {
      question: "What do I do after receiving the audit report?",
      answer:
        "I prioritize recommendations by impact. Start with Critical fixes (crawlability, Core Web Vitals), then High-priority items (metadata, schema). Non-critical improvements come next. I can implement fixes or you can hire a developer.",
    },
    {
      question: "Can you help implement the audit recommendations?",
      answer:
        "Yes, I offer implementation services. I can fix technical issues, optimize Core Web Vitals, add schema markup, and improve content—depending on your budget and priorities.",
    },
    {
      question: "How does an SEO audit help my business?",
      answer:
        "An audit identifies barriers to ranking. By fixing those issues, you're removing obstacles preventing Google from ranking your site higher. Results typically appear 2-4 months after implementation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO Audit Services Nepal",
            "description": "Professional SEO audit in Nepal to identify technical issues and ranking problems",
            "url": "https://rejishkhanal.com.np/seo-audit-nepal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Rejish Khanal",
              "areaServed": "NP",
            },
            "priceRange": "NPR 15000-40000+",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            SEO Audit in Nepal for Websites Losing Rankings, Traffic, and Leads
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Is your website not ranking? Losing traffic? Stuck in Google's shadows? A professional SEO audit reveals
            exactly what's holding you back. I'll analyze your site, identify problems, and create a roadmap to climb
            the rankings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Order Your SEO Audit Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Free 15-Minute Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* What's Included */}
        <section className="mb-16 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-2xl font-bold mb-6">What's Included in My SEO Audit</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((deliverable, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{deliverable}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Audit Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Detailed Audit Analysis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {auditAreas.map((area, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Choose My SEO Audit?</h2>
          <div className="space-y-4">
            {[
              "50-100+ page detailed report (not generic templates)",
              "Developer-level technical analysis beyond surface-level checks",
              "Actionable recommendations prioritized by impact and ROI",
              "Video walkthrough of key findings (optional)",
              "Competitive intelligence included",
              "Fast turnaround (5-7 days)",
              "Affordable pricing compared to agencies",
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Issues Found */}
        <section className="mb-16 bg-primary/5 p-8 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-6">Common Issues I Find in SEO Audits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Poor Core Web Vitals (LCP > 3s)",
              "Slow server response times",
              "Missing or broken XML sitemap",
              "Improper use of canonical URLs",
              "Missing schema markup",
              "Duplicate content issues",
              "Poor internal linking structure",
              "Broken internal links and 404s",
              "Missing meta descriptions",
              "Mobile responsiveness problems",
              "Crawlability issues (robots.txt blocking)",
              "Pages not indexed by Google",
            ].map((issue, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="h-3 w-3 bg-primary rounded-full" />
                <p className="text-foreground">{issue}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">The SEO Audit Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Kickoff", desc: "Understand your goals and target keywords" },
              { step: 2, title: "Analysis", desc: "Deep dive into technical, on-page, and backlink data" },
              { step: 3, title: "Report", desc: "Comprehensive findings with recommendations" },
              { step: 4, title: "Follow-up", desc: "Discuss findings and implementation strategy" },
            ].map((item) => (
              <Card key={item.step}>
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-3">{item.step}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Stop Guessing About Your SEO</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a detailed, professional SEO audit that shows exactly what's preventing your site from ranking.
            Then we'll fix it together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Your SEO Audit Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
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
              href="/seo-expert-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">SEO Expert Services</p>
            </Link>
            <Link
              href="/local-seo-services-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Local SEO Services</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
