import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Code2,
  FileSearch,
  TrendingUp,
  Gauge,
  ShieldCheck,
  Settings,
  LayoutList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "WordPress SEO Expert in Nepal | Technical SEO & Speed Optimization",
  description:
    "Hire Rejish Khanal, a WordPress SEO expert in Nepal helping businesses fix technical SEO, indexing, Core Web Vitals, schema, content SEO, and organic rankings.",
  keywords: [
    "WordPress SEO expert in Nepal",
    "WordPress SEO Nepal",
    "WordPress technical SEO Nepal",
    "WordPress SEO audit Nepal",
    "WordPress speed optimization Nepal",
    "WordPress indexing issue fix Nepal",
    "WordPress Core Web Vitals Nepal",
    "SEO expert in Nepal",
    "technical SEO specialist Nepal",
    "SEO services Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/wordpress-seo-expert-nepal",
  },
  openGraph: {
    title: "WordPress SEO Expert in Nepal | Technical SEO & Speed Optimization",
    description:
      "Improve your WordPress website rankings with technical SEO, speed optimization, Core Web Vitals, schema, indexing fixes, and content optimization.",
    url: "https://rejishkhanal.com.np/wordpress-seo-expert-nepal",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress SEO Expert in Nepal",
    description:
      "WordPress SEO services in Nepal for technical SEO, indexing, Core Web Vitals, schema, speed optimization, and content SEO.",
  },
};

export default function WordPressSEOExpertNepalPage() {
  const services = [
    {
      icon: Search,
      title: "WordPress On-Page SEO",
      description:
        "Optimize title tags, meta descriptions, headings, URLs, internal links, images, content structure, semantic keywords, and landing pages.",
    },
    {
      icon: Code2,
      title: "WordPress Technical SEO",
      description:
        "Fix crawlability, indexing, canonical tags, redirects, sitemap issues, robots.txt problems, duplicate content, and schema markup.",
    },
    {
      icon: Gauge,
      title: "WordPress Speed Optimization",
      description:
        "Improve Core Web Vitals, LCP, INP, CLS, image loading, caching, database performance, CSS, JavaScript, and mobile speed.",
    },
    {
      icon: FileSearch,
      title: "WordPress SEO Audit",
      description:
        "Get a detailed audit covering technical SEO, plugins, page speed, content gaps, metadata, internal links, indexing, and ranking issues.",
    },
    {
      icon: Settings,
      title: "SEO Plugin Setup",
      description:
        "Configure SEO plugins, XML sitemaps, schema settings, breadcrumbs, metadata templates, canonical rules, and social sharing settings.",
    },
    {
      icon: LayoutList,
      title: "Content and Site Structure",
      description:
        "Improve category structure, service pages, blog architecture, internal linking, topic clusters, and conversion-focused content sections.",
    },
  ];

  const faqs = [
    {
      question: "Who is a WordPress SEO expert in Nepal?",
      answer:
        "A WordPress SEO expert in Nepal helps optimize WordPress websites for search engines through technical SEO, content optimization, speed improvement, indexing fixes, schema markup, and SEO plugin configuration.",
    },
    {
      question: "Why does my WordPress website need SEO?",
      answer:
        "Your WordPress website needs SEO because many websites have issues with slow speed, poor content structure, duplicate pages, weak internal links, missing metadata, indexing problems, and plugin misconfiguration.",
    },
    {
      question: "Can you fix WordPress indexing issues?",
      answer:
        "Yes. I can help fix WordPress indexing issues related to noindex tags, robots.txt, XML sitemaps, canonical tags, duplicate content, thin content, blocked resources, and Google Search Console errors.",
    },
    {
      question: "Do you optimize WordPress Core Web Vitals?",
      answer:
        "Yes. I optimize WordPress Core Web Vitals including LCP, INP, and CLS through image optimization, caching, theme cleanup, script optimization, font optimization, database cleanup, and performance improvements.",
    },
    {
      question: "Do you provide WordPress SEO audits in Nepal?",
      answer:
        "Yes. I provide WordPress SEO audits in Nepal covering technical SEO, content quality, metadata, internal links, indexing, Core Web Vitals, schema, plugins, and competitor opportunities.",
    },
  ];

  const targetKeywords = [
    "WordPress SEO expert in Nepal",
    "WordPress SEO Nepal",
    "WordPress technical SEO Nepal",
    "WordPress SEO audit Nepal",
    "WordPress speed optimization Nepal",
    "WordPress indexing issue fix Nepal",
    "WordPress Core Web Vitals Nepal",
    "SEO for WordPress websites Nepal",
    "technical SEO specialist Nepal",
  ];

  const pageUrl = "https://rejishkhanal.com.np/wordpress-seo-expert-nepal";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WordPress SEO Expert in Nepal",
    description:
      "WordPress SEO services in Nepal for technical SEO, SEO audits, speed optimization, Core Web Vitals, indexing fixes, schema, and content optimization.",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    serviceType: "WordPress SEO",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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
        item: "https://rejishkhanal.com.np",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://rejishkhanal.com.np/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "WordPress SEO Expert in Nepal",
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="mb-20">
          <p className="text-sm font-semibold text-primary mb-4">
            WordPress SEO Expert in Nepal | Technical SEO | Speed Optimization
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            WordPress SEO Expert in Nepal for Faster, Crawlable, and Rankable
            Websites
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, a WordPress SEO expert in Nepal helping
            businesses improve rankings, fix technical SEO issues, optimize Core
            Web Vitals, improve indexing, and build stronger organic visibility.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            WordPress is SEO-friendly when configured properly, but many
            WordPress websites lose rankings because of slow speed, plugin bloat,
            poor site structure, duplicate content, weak internal links, missing
            schema, and indexing problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Hire Me for WordPress SEO
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request a WordPress SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            WordPress SEO Services in Nepal
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Many businesses in Nepal use WordPress for company websites,
              blogs, ecommerce stores, portfolios, education websites, and
              service websites. A properly optimized WordPress website can rank,
              load fast, and generate organic leads.
            </p>

            <p>
              My WordPress SEO services focus on technical SEO, page speed,
              Core Web Vitals, indexability, content optimization, schema
              markup, metadata, internal linking, category structure, and SEO
              plugin configuration.
            </p>

            <p>
              Whether your website is built with Elementor, Gutenberg, WooCommerce,
              a custom theme, or a lightweight WordPress setup, I can help you
              improve its SEO foundation and organic performance.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My WordPress SEO Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-20 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-3xl font-bold mb-6">
            Common WordPress SEO Issues I Fix
          </h2>

          <div className="space-y-4">
            {[
              "Slow loading pages and poor Core Web Vitals",
              "Indexing issues in Google Search Console",
              "Duplicate content from tags, categories, archives, or parameters",
              "Missing or poorly configured XML sitemaps",
              "Incorrect canonical tags and redirect chains",
              "Missing schema markup and weak structured data",
              "Poor internal linking and weak site architecture",
              "Unoptimized title tags, meta descriptions, and headings",
              "Heavy themes, plugin bloat, unused CSS, and render-blocking scripts",
              "Thin service pages and weak content structure",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Keywords This Page Targets
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetKeywords.map((keyword) => (
              <div key={keyword} className="p-4 rounded-lg border bg-background">
                <p className="font-medium">{keyword}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
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

        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-10 sm:p-12 text-center border border-primary/20">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Want a Better Ranking WordPress Website?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Work with a WordPress SEO expert in Nepal to improve technical SEO,
            speed, indexing, content structure, and organic visibility.
          </p>

          <Link href="/contact">
            <Button size="lg" className="group">
              Optimize My WordPress Website
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">
            Related SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/technical-seo-specialist-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                Technical SEO Specialist in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Fix crawlability, indexing, speed, schema, and technical SEO issues.
              </p>
            </Link>

            <Link href="/core-web-vitals-optimization" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                Core Web Vitals Optimization
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Improve LCP, INP, CLS, page speed, and mobile performance.
              </p>
            </Link>

            <Link href="/seo-audit-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Audit Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Get a complete technical, content, and performance SEO audit.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}