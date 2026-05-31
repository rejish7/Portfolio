import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical SEO Specialist in Nepal | Improve Rankings & Core Web Vitals",
  description:
    "Technical SEO Specialist in Nepal for faster, crawlable, and SEO-friendly websites. Fix Core Web Vitals, improve search rankings, and optimize your site's technical performance.",
  keywords: [
    "technical SEO specialist Nepal",
    "technical SEO consultant Nepal",
    "Core Web Vitals expert Nepal",
    "JavaScript SEO specialist Nepal",
    "schema markup Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/technical-seo-specialist-nepal",
  },
};

export default function TechnicalSEOPage() {
  const services = [
    {
      title: "Technical SEO Audit",
      description: "Comprehensive crawl analysis, indexing issues, robots.txt & sitemap verification",
      icon: "📊",
    },
    {
      title: "Core Web Vitals Optimization",
      description: "LCP, CLS, INP improvements through code splitting, image optimization, and caching",
      icon: "⚡",
    },
    {
      title: "JavaScript SEO",
      description: "Server-side rendering, hydration fixes, client-side rendering optimization",
      icon: "🔧",
    },
    {
      title: "Schema Markup Implementation",
      description: "Service, FAQ, BreadcrumbList, LocalBusiness, and Article structured data",
      icon: "📝",
    },
  ];

  const process = [
    { step: 1, title: "Audit", description: "Deep crawl analysis and performance baseline" },
    { step: 2, title: "Strategy", description: "Prioritized roadmap for fixes and improvements" },
    { step: 3, title: "Implementation", description: "Deploy optimizations and monitor results" },
    { step: 4, title: "Reporting", description: "Monthly tracking of rankings, traffic, and improvements" },
  ];

  const faqs = [
    {
      question: "What does a Technical SEO Specialist do?",
      answer:
        "A Technical SEO Specialist optimizes your website's technical infrastructure to help search engines crawl, index, and rank your content effectively. This includes improving Core Web Vitals, fixing JavaScript rendering issues, implementing schema markup, optimizing server response times, ensuring mobile responsiveness, and setting up proper redirect chains.",
    },
    {
      question: "How long does technical SEO take to show results?",
      answer:
        "Most clients see ranking improvements within 2-4 months of implementing technical SEO fixes. Critical issues (crawlability, Core Web Vitals) can show impact within 4-8 weeks. Results depend on competition, content quality, and backlink profile.",
    },
    {
      question: "What is the cost of a technical SEO audit?",
      answer:
        "A comprehensive technical SEO audit for small to medium websites starts from NPR 15,000-25,000. Enterprise audits with 100,000+ pages require custom pricing. Contact me for a free 15-minute consultation to discuss your needs.",
    },
    {
      question: "Can you help if my website isn't ranking?",
      answer:
        "Yes. Many ranking issues stem from technical problems. I start with a comprehensive audit to identify root causes—poor Core Web Vitals, improper schema, JavaScript rendering issues, or crawlability problems—then create a prioritized action plan.",
    },
    {
      question: "Do you work with WordPress, Next.js, Django, or other frameworks?",
      answer:
        "Yes, I work with all major frameworks and CMS platforms. I have special expertise in Next.js, Django, and Laravel for building SEO-friendly applications. Each framework requires different optimization approaches.",
    },
    {
      question: "How do you track technical SEO improvements?",
      answer:
        "I provide monthly reports tracking: Core Web Vitals improvements, ranking position changes in Google Search Console, organic traffic growth in GA4, crawl errors fixed, and indexation rate. All data is transparent and actionable.",
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
            "name": "Technical SEO Specialist Services",
            "description":
              "Technical SEO Specialist in Nepal for faster, crawlable, and SEO-friendly websites",
            "url": "https://rejishkhanal.com.np/technical-seo-specialist-nepal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Rejish Khanal",
              "areaServed": "NP",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NP",
                "addressLocality": "Kathmandu",
              },
            },
            "areaServed": ["NP", "Kathmandu", "Nepal"],
            "priceRange": "NPR 15000-50000+",
            "serviceType": "Technical SEO Optimization",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Technical SEO Services",
              "itemListElement": services.map((s) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": s.title,
                  "description": s.description,
                },
              })),
            },
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
            Technical SEO Specialist in Nepal for Faster, Crawlable, and SEO-Friendly Websites
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            I help Nepali businesses and international clients fix technical SEO issues, improve Core Web Vitals,
            and build websites that search engines love. My developer-level expertise ensures your site is fast,
            crawlable, and optimized for rankings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get a Free 15-Minute Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Request a Technical SEO Audit
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust Section */}
        <section className="mb-16 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-2xl font-bold mb-6">Why Choose Me as Your Technical SEO Specialist?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Developer-Level Expertise</h3>
              <p className="text-muted-foreground">
                I don't just audit SEO—I write clean, optimized code. Full stack developer background means I
                understand both frontend and backend performance implications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Tools & Technologies</h3>
              <p className="text-muted-foreground">
                Google Search Console, PageSpeed Insights, Screaming Frog, Lighthouse, GTmetrix, Chrome DevTools,
                Schema.org validation, and more.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                Clients see 30-60% traffic improvements, 50%+ ranking increases, and 2-3 second page speed
                improvements within 3-4 months.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Nepal & International Experience</h3>
              <p className="text-muted-foreground">
                Worked with Nepali startups, international SaaS companies, and local businesses. Understand
                Kathmandu's unique SEO landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Services Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Services I Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">My Technical SEO Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p) => (
              <Card key={p.step}>
                <CardHeader>
                  <CardTitle className="text-primary text-4xl font-bold mb-2">{p.step}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">{p.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Common Pain Points */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Common Technical SEO Problems I Fix</h2>
          <div className="space-y-4">
            {[
              "Slow page load times (LCP > 2.5s) hurting rankings",
              "Google can't crawl or index your website properly",
              "JavaScript rendering issues preventing SEO visibility",
              "Poor mobile responsiveness and cumulative layout shift (CLS)",
              "Missing or incorrect schema markup",
              "Duplicate content and improper canonical URLs",
              "Broken internal links and poor site structure",
              "Server errors and HTTP status code issues",
            ].map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nepal-Specific Section */}
        <section className="mb-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Technical SEO for Nepali Businesses</h2>
          <p className="text-muted-foreground mb-4">
            Nepal's SEO landscape has unique challenges. Local server speeds are often slower, hosting optimization
            is critical, and many Nepali websites suffer from poor technical foundations. I specialize in optimizing
            for Nepali audiences and international visitors simultaneously.
          </p>
          <p className="text-muted-foreground">
            Whether you're based in Kathmandu, Pokhara, Biratnagar, or anywhere in Nepal, I can help your website
            rank better on Google for both local and global audiences.
          </p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Fix Your Website's Technical SEO?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's start with a comprehensive technical SEO audit. I'll identify issues, prioritize fixes, and show you
            exactly how to improve your rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Explore Other Services
              </Button>
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-16 border-t">
          <h3 className="text-lg font-semibold mb-4">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/seo-audit-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Technical SEO Audit in Nepal</p>
            </Link>
            <Link
              href="/seo-expert-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">SEO Expert in Nepal</p>
            </Link>
            <Link
              href="/core-web-vitals-optimization"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Core Web Vitals Optimization</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
