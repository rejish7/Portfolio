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
  Code2,
  Gauge,
  Search,
  FileSearch,
  Bot,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Next.js SEO Services in Nepal | Crawlable & Fast Web Apps | Rejish Khanal",
  description:
    "Next.js SEO services in Nepal by Rejish Khanal. Fix rendering, indexing, Core Web Vitals, and crawlability issues in Next.js App Router applications. Based in Kathmandu, serving globally.",
  keywords: [
    "Next.js SEO services Nepal",
    "Next.js SEO expert Nepal",
    "JavaScript SEO Nepal",
    "React SEO Nepal",
    "App Router SEO",
    "Next.js technical SEO",
    "Next.js Core Web Vitals",
    "Next.js developer Nepal",
    "Next.js App Router SEO",
    "Next.js indexing issues",
    "Next.js rendering SEO",
    "hire Next.js developer Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/nextjs-seo-services",
  },
  openGraph: {
    title: "Next.js SEO Services in Nepal | Rejish Khanal",
    description:
      "Fix rendering, indexing, Core Web Vitals, and crawlability issues in Next.js applications. Technical SEO for Next.js App Router, SSR, SSG, and ISR.",
    url: "https://rejishkhanal.com.np/nextjs-seo-services",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js SEO Services in Nepal | Rejish Khanal",
    description:
      "Next.js SEO services for crawlable, fast, and rankable web applications. App Router, SSR, SSG, Core Web Vitals, and schema markup.",
  },
};

export default function NextJSSEOPage() {
  const services = [
    {
      icon: Code2,
      title: "App Router and Pages Router SEO Setup",
      description:
        "Configure routing structure, layout hierarchy, and page metadata so search engines understand your site architecture and index the right pages.",
    },
    {
      icon: Gauge,
      title: "Server-Side Rendering (SSR) Configuration",
      description:
        "Enable server-side rendering for dynamic pages so search engines receive fully rendered HTML instead of empty JavaScript shells.",
    },
    {
      icon: FileSearch,
      title: "Static Generation (SSG) Optimization",
      description:
        "Pre-render high-value pages at build time for instant load speeds, complete HTML delivery, and strong Core Web Vitals scores.",
    },
    {
      icon: Search,
      title: "Dynamic Metadata with generateMetadata()",
      description:
        "Implement per-page title tags, meta descriptions, Open Graph images, and canonical URLs using Next.js dynamic metadata API.",
    },
    {
      icon: Gauge,
      title: "Core Web Vitals Optimization",
      description:
        "Fix LCP, INP, and CLS issues specific to Next.js by optimizing image loading, script execution, font display, and layout stability.",
    },
    {
      icon: Code2,
      title: "Image Optimization with next/image",
      description:
        "Configure lazy loading, responsive sizes, WebP/AVIF formats, and priority hints to improve LCP and reduce layout shifts.",
    },
    {
      icon: FileSearch,
      title: "Sitemap and robots.txt Generation",
      description:
        "Generate dynamic XML sitemaps and configure robots.txt using Next.js metadata API or dedicated sitemap routes.",
    },
    {
      icon: Search,
      title: "Canonical URLs and Redirects",
      description:
        "Implement canonical tags, permanent redirects, and trailing slash consistency to prevent duplicate content and crawl waste.",
    },
    {
      icon: Bot,
      title: "Schema Markup Implementation",
      description:
        "Add JSON-LD structured data for Organization, Person, FAQPage, BreadcrumbList, Article, and Product schemas in Next.js components.",
    },
    {
      icon: BarChart3,
      title: "Open Graph and Twitter Card Setup",
      description:
        "Configure social sharing metadata, dynamic OG images, and Twitter card tags for consistent presentation across platforms.",
    },
  ];

  const commonProblems = [
    "Pages are not indexed because content is client-side rendered",
    "Google Search Console shows crawled but not indexed issues",
    "Core Web Vitals failing for LCP, INP, or CLS",
    "Metadata not rendering correctly in search results",
    "Dynamic routes not included in XML sitemap",
    "Image optimization not configured properly",
    "Hydration mismatches causing indexing delays",
    "App Router layout causing unexpected noindex issues",
  ];

  const process = [
    {
      step: 1,
      title: "Next.js SEO Discovery",
      description:
        "I review your Next.js application structure, routing setup, rendering strategy, current search performance, and specific SEO challenges.",
    },
    {
      step: 2,
      title: "Rendering and Crawlability Audit",
      description:
        "I check how search engines and AI crawlers render your pages, identify client-side rendering gaps, and review server-side rendering configuration.",
    },
    {
      step: 3,
      title: "Metadata and Schema Review",
      description:
        "I audit title tags, meta descriptions, Open Graph tags, canonical URLs, structured data, and dynamic metadata implementation.",
    },
    {
      step: 4,
      title: "Core Web Vitals Profiling",
      description:
        "I analyze LCP, INP, and CLS metrics, identify render-blocking resources, and optimize image loading, fonts, and JavaScript execution.",
    },
    {
      step: 5,
      title: "Implementation and Testing",
      description:
        "I implement SEO fixes directly in your codebase, test across routes, validate schema markup, and verify crawlability with live tools.",
    },
  ];

  const tools = [
    "Google Search Console",
    "PageSpeed Insights",
    "Lighthouse",
    "Chrome DevTools",
    "Screaming Frog",
    "Schema Markup Validator",
    "Rich Results Test",
    "Next.js Dev Tools",
  ];

  const faqs = [
    {
      question: "What is Next.js SEO?",
      answer:
        "Next.js SEO is the process of optimizing Next.js applications so search engines can crawl, render, index, and understand the content properly. It includes configuring server-side rendering, metadata, structured data, Core Web Vitals, sitemaps, canonical URLs, and routing architecture for search visibility.",
    },
    {
      question: "Why is Next.js good for SEO?",
      answer:
        "Next.js supports server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR), which allow search engines to receive fully rendered HTML. This makes content indexable without JavaScript execution delays. Next.js also provides built-in metadata API, image optimization, and automatic sitemap generation.",
    },
    {
      question: "How do I fix Next.js pages not being indexed by Google?",
      answer:
        "Next.js pages may not be indexed if they rely on client-side rendering, have incorrect noindex tags, are blocked by robots.txt, or have thin content. I audit your rendering configuration, metadata setup, and crawlability to identify and fix indexing issues.",
    },
    {
      question: "Do you work with Next.js App Router?",
      answer:
        "Yes, I work with both Next.js App Router and Pages Router. I can help configure metadata, layouts, loading states, server components, and routing structure for optimal SEO performance in either routing system.",
    },
    {
      question: "How long does Next.js SEO optimization take?",
      answer:
        "Basic metadata and schema fixes can be completed in a few days. Core Web Vitals optimization, rendering fixes, and comprehensive SEO improvements usually take one to two weeks depending on application complexity and the number of routes involved.",
    },
    {
      question: "Can you fix Core Web Vitals for Next.js websites?",
      answer:
        "Yes. I optimize LCP by configuring image loading and critical CSS, reduce INP by optimizing JavaScript execution and event handlers, and fix CLS by setting proper image dimensions and font loading strategies in Next.js applications.",
    },
    {
      question: "Do you provide Next.js SEO services in Nepal?",
      answer:
        "Yes. I am based in Kathmandu, Nepal and provide Next.js SEO services to businesses in Nepal and international markets. I work remotely with clients across the United States, United Kingdom, Australia, and other countries.",
    },
    {
      question: "What is the difference between Next.js SSR and SSG for SEO?",
      answer:
        "SSR (Server-Side Rendering) generates HTML on each request, which is useful for dynamic content that changes frequently. SSG (Static Site Generation) generates HTML at build time, which is faster and better for content that does not change often. Both approaches deliver fully rendered HTML to search engines, making them superior to client-side rendering for SEO.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Next.js SEO Services in Nepal",
    description:
      "Next.js SEO services in Nepal for fixing rendering, indexing, Core Web Vitals, crawlability, metadata, and schema markup issues in Next.js applications.",
    serviceType: "Next.js SEO",
    url: "https://rejishkhanal.com.np/nextjs-seo-services",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      jobTitle: "Next.js SEO Expert and Full-Stack Developer in Nepal",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NP",
        addressLocality: "Kathmandu",
      },
      sameAs: [
        "https://github.com/rejish7",
        "https://x.com/KhanalRejish",
      ],
    },
    areaServed: [
      { "@type": "Country", name: "Nepal" },
      { "@type": "City", name: "Kathmandu" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Next.js SEO Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://rejishkhanal.com.np/#person",
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
    jobTitle: "Next.js SEO Expert and Full-Stack Developer in Nepal",
    description:
      "Rejish Khanal is a Next.js SEO expert in Nepal helping businesses fix rendering, indexing, Core Web Vitals, and crawlability issues in Next.js applications.",
    knowsAbout: [
      "Next.js SEO",
      "JavaScript SEO",
      "App Router SEO",
      "Server-Side Rendering",
      "Static Site Generation",
      "Core Web Vitals",
      "Schema Markup",
      "Technical SEO",
    ],
    sameAs: [
      "https://github.com/rejish7",
      "https://x.com/KhanalRejish",
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Next.js SEO Services in Nepal",
    url: "https://rejishkhanal.com.np/nextjs-seo-services",
    description:
      "Next.js SEO services in Nepal for crawlable, fast, and rankable web applications with App Router, SSR, SSG, and Core Web Vitals optimization.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "Next.js SEO Services Nepal",
      "JavaScript SEO",
      "App Router SEO",
      "Next.js Core Web Vitals",
      "Next.js Developer Nepal",
    ],
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
        name: "Next.js SEO Services",
        item: "https://rejishkhanal.com.np/nextjs-seo-services",
      },
    ],
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <p className="text-sm font-semibold text-primary mb-4">
            Next.js SEO Services | JavaScript SEO | App Router SEO | Core Web Vitals
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Next.js SEO Services in Nepal for Crawlable, Fast, and Rankable Web Apps
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, a Next.js SEO expert and full-stack developer in
            Kathmandu, Nepal. I help businesses fix rendering issues, indexing
            problems, Core Web Vitals failures, metadata errors, and crawlability
            gaps in Next.js applications.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            Next.js is powerful for building fast web applications, but many
            developers ship apps that search engines cannot properly crawl, render,
            or index. I optimize Next.js applications so they perform well in both
            traditional search results and AI-powered answer engines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Next.js SEO Optimization
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request a Next.js SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        {/* Why Next.js Needs SEO */}
        <section className="mb-20 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-3xl font-bold mb-6">
            Why Next.js Applications Need Specialized SEO
          </h2>

          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              Next.js offers server-side rendering, static generation, and
              incremental static regeneration. These features make it possible to
              deliver fully rendered HTML to search engines. However, misconfigured
              routing, client-side rendering fallbacks, missing metadata, and
              unoptimized images can still cause indexing and ranking problems.
            </p>

            <p>
              I review how your Next.js application renders content, how
              search engines access your pages, and where technical gaps exist
              between your current setup and optimal SEO performance.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Next.js SEO Services I Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card key={service.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Common Problems */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Common Next.js SEO Problems I Fix
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {commonProblems.map((problem) => (
              <div
                key={problem}
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My Next.js SEO Process
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {process.map((item) => (
              <Card key={item.step}>
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-3">
                    {item.step}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Tools I Use for Next.js SEO Audits
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div key={tool} className="p-4 rounded-lg border bg-background">
                <p className="font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nepal Section */}
        <section className="mb-20 p-8 rounded-lg border bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Next.js SEO Services for Businesses in Nepal
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Many businesses in Nepal are adopting Next.js for their web
                  applications. Without proper SEO configuration, these
                  applications can suffer from indexing issues, poor Core Web
                  Vitals, and low organic visibility.
                </p>

                <p>
                  I help businesses in Kathmandu, Lalitpur, Bhaktapur, Pokhara,
                  and across Nepal optimize their Next.js applications for search
                  engines. I also work with international clients who need
                  specialized Next.js SEO support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions About Next.js SEO
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-10 sm:p-12 text-center border border-primary/20">
          <Code2 className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Ready to Fix Your Next.js SEO?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a Next.js SEO audit to discover what is preventing your
            application from being crawled, indexed, and ranked properly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Book a Next.js SEO Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Get an SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">
            Related SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/technical-seo-specialist-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                Technical SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Fix crawlability, indexing, Core Web Vitals, schema, and technical SEO issues.
              </p>
            </Link>

            <Link href="/web-development-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO-Friendly Web Development in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Build fast, crawlable, responsive, and SEO-ready websites from the beginning.
              </p>
            </Link>

            <Link href="/seo-expert-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Get SEO strategy for rankings, traffic, content, local search, AEO, GEO, and organic growth.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
