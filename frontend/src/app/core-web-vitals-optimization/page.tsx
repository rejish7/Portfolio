import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SchemaScript } from "@/components/SchemaScript";
import {
  ArrowRight,
  Zap,
  Gauge,
  MousePointerClick,
  LayoutDashboard,
  Image,
  Code2,
  Server,
  Database,
  Smartphone,
  CheckCircle2,
  FileSearch,
  BarChart3,
  ShieldCheck,
  MonitorCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Core Web Vitals Optimization Nepal | LCP, INP & CLS Fixes",
  description:
    "Core Web Vitals optimization in Nepal by Rejish Khanal. Improve LCP, INP, CLS, page speed, mobile performance, technical SEO, and Google page experience.",
  keywords: [
    "Core Web Vitals optimization Nepal",
    "Core Web Vitals expert Nepal",
    "page speed optimization Nepal",
    "website speed optimization Nepal",
    "LCP optimization",
    "INP optimization",
    "CLS optimization",
    "technical SEO Nepal",
    "technical SEO specialist Nepal",
    "website performance optimization",
    "Next.js performance optimization",
    "Google PageSpeed optimization Nepal",
    "Core Web Vitals audit Nepal",
    "SEO audit Nepal",
    "web performance consultant Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/core-web-vitals-optimization",
  },
  openGraph: {
    title: "Core Web Vitals Optimization Nepal | LCP, INP & CLS Fixes",
    description:
      "Improve LCP, INP, CLS, page speed, mobile performance, Core Web Vitals, and technical SEO with Rejish Khanal.",
    url: "https://rejishkhanal.com.np/core-web-vitals-optimization",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Web Vitals Optimization Nepal",
    description:
      "Fix LCP, INP, CLS, mobile speed, page performance, and technical SEO issues affecting Google rankings and conversions.",
  },
};

export default function CoreWebVitalsPage() {
  const metrics = [
    {
      icon: Gauge,
      metric: "LCP",
      full: "Largest Contentful Paint",
      target: "Good: 2.5s or faster",
      impact: "Measures how quickly the main visible content loads.",
      description:
        "LCP is usually affected by slow server response, large hero images, render-blocking CSS, unoptimized fonts, heavy JavaScript, and poor caching.",
      fixes: [
        "Optimize and preload hero images",
        "Use WebP or AVIF image formats",
        "Improve server response time",
        "Remove render-blocking resources",
        "Use critical CSS where needed",
      ],
    },
    {
      icon: MousePointerClick,
      metric: "INP",
      full: "Interaction to Next Paint",
      target: "Good: under 200ms",
      impact: "Measures how responsive a page feels after user interaction.",
      description:
        "INP is commonly affected by long JavaScript tasks, heavy third-party scripts, unoptimized event handlers, hydration issues, and main-thread blocking.",
      fixes: [
        "Reduce JavaScript execution time",
        "Split long tasks",
        "Delay non-critical scripts",
        "Optimize event handlers",
        "Improve React or Next.js hydration performance",
      ],
    },
    {
      icon: LayoutDashboard,
      metric: "CLS",
      full: "Cumulative Layout Shift",
      target: "Good: under 0.1",
      impact: "Measures visual stability and unexpected layout movement.",
      description:
        "CLS happens when content shifts while the page loads. Common causes include images without dimensions, ads, embeds, late-loading fonts, and dynamic content.",
      fixes: [
        "Set image and video dimensions",
        "Reserve space for embeds and ads",
        "Optimize font loading",
        "Avoid inserting content above existing content",
        "Use stable layout containers",
      ],
    },
  ];

  const optimizations = [
    {
      icon: Image,
      title: "Image Optimization",
      description:
        "Compress images, convert images to WebP or AVIF, use responsive image sizes, lazy load below-the-fold images, and preload important above-the-fold assets.",
    },
    {
      icon: Code2,
      title: "JavaScript Optimization",
      description:
        "Reduce JavaScript bundle size, split code, remove unused scripts, delay third-party tools, optimize hydration, and reduce long main-thread tasks.",
    },
    {
      icon: Server,
      title: "Server Response Optimization",
      description:
        "Improve TTFB with caching, faster hosting, CDN configuration, optimized backend logic, compressed responses, and better server-side rendering strategy.",
    },
    {
      icon: Database,
      title: "Database and Backend Optimization",
      description:
        "Optimize slow queries, reduce unnecessary database calls, add indexing where needed, cache repeated data, and improve backend response performance.",
    },
    {
      icon: Smartphone,
      title: "Mobile Performance Optimization",
      description:
        "Improve mobile speed, responsive layout, tap targets, font sizes, JavaScript execution, and page experience for mobile-first users.",
    },
    {
      icon: FileSearch,
      title: "Performance Audit and Monitoring",
      description:
        "Review PageSpeed Insights, Lighthouse, Chrome DevTools, Google Search Console, CrUX data, and real-user performance patterns.",
    },
  ];

  const tools = [
    "Google Search Console",
    "PageSpeed Insights",
    "Lighthouse",
    "Chrome DevTools",
    "Core Web Vitals Report",
    "CrUX Data",
    "GTmetrix",
    "WebPageTest",
    "Next.js Bundle Analyzer",
    "Vercel Speed Insights",
    "React Profiler",
    "Real User Monitoring",
  ];

  const commonIssues = [
    "Large unoptimized hero images slowing down LCP",
    "Render-blocking CSS and JavaScript delaying main content",
    "Too many third-party scripts affecting INP",
    "Heavy React or Next.js hydration blocking user interaction",
    "Images, videos, or iframes without fixed dimensions causing CLS",
    "Slow server response time increasing page load delay",
    "Poor caching configuration",
    "Unused JavaScript and CSS increasing page weight",
    "Late-loading fonts causing layout shift",
    "Database queries slowing down dynamic pages",
    "Mobile pages performing worse than desktop pages",
    "Too many animations or layout changes during page load",
  ];

  const process = [
    {
      step: 1,
      title: "Core Web Vitals Audit",
      description:
        "I review LCP, INP, CLS, PageSpeed Insights, Google Search Console data, mobile performance, templates, and important landing pages.",
    },
    {
      step: 2,
      title: "Root Cause Diagnosis",
      description:
        "I identify what is causing poor performance, such as images, scripts, fonts, server delays, hydration issues, layout shifts, or third-party tools.",
    },
    {
      step: 3,
      title: "Technical Optimization",
      description:
        "I implement or guide fixes for frontend, backend, hosting, caching, image delivery, JavaScript execution, CSS loading, and layout stability.",
    },
    {
      step: 4,
      title: "Testing and Validation",
      description:
        "I test improvements using lab tools and field data sources, then monitor performance changes across Google Search Console and real user data.",
    },
  ];

  const platforms = [
    "Next.js",
    "React",
    "WordPress",
    "Shopify",
    "Laravel",
    "Django",
    "Vue.js",
    "PHP websites",
    "Custom-coded websites",
    "Static websites",
    "Ecommerce websites",
    "SaaS websites",
  ];

  const faqs = [
    {
      question: "What are Core Web Vitals?",
      answer:
        "Core Web Vitals are Google metrics that measure real-world user experience for loading performance, responsiveness, and visual stability. The three main metrics are LCP, INP, and CLS.",
    },
    {
      question: "Why are Core Web Vitals important for SEO?",
      answer:
        "Core Web Vitals are important because they are part of Google’s page experience systems and help measure whether users have a good experience on your website. Better performance can support SEO, reduce bounce rates, and improve conversions.",
    },
    {
      question: "What is a good LCP score?",
      answer:
        "A good LCP score is 2.5 seconds or faster. LCP measures how quickly the main visible content of a page loads for users.",
    },
    {
      question: "What is a good INP score?",
      answer:
        "A good INP score is under 200 milliseconds. INP measures how quickly a page responds after a user interacts with it.",
    },
    {
      question: "What is a good CLS score?",
      answer:
        "A good CLS score is under 0.1. CLS measures how visually stable a page is and whether elements unexpectedly shift while loading.",
    },
    {
      question: "Can Core Web Vitals optimization improve rankings?",
      answer:
        "Core Web Vitals optimization can support better rankings because Google uses page experience signals in its ranking systems. However, rankings also depend on content quality, relevance, authority, technical SEO, and competition.",
    },
    {
      question: "How long does Core Web Vitals optimization take?",
      answer:
        "Small fixes can often be completed within a few days, while larger performance improvements may take several weeks. Field data in Google Search Console may take longer to reflect changes because it depends on real user data.",
    },
    {
      question: "Do you provide Core Web Vitals optimization in Nepal?",
      answer:
        "Yes, I provide Core Web Vitals optimization in Nepal for businesses, startups, ecommerce websites, service websites, blogs, and international clients.",
    },
    {
      question: "Can you optimize Core Web Vitals for Next.js websites?",
      answer:
        "Yes, I can optimize Next.js websites by improving image loading, metadata rendering, server-side rendering, JavaScript bundles, hydration, route performance, caching, and Core Web Vitals.",
    },
    {
      question: "What tools do you use to measure Core Web Vitals?",
      answer:
        "I use Google Search Console, PageSpeed Insights, Lighthouse, Chrome DevTools, CrUX data, GTmetrix, WebPageTest, framework-specific tools, and real-user monitoring where needed.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Core Web Vitals Optimization in Nepal",
    description:
      "Core Web Vitals optimization services in Nepal for improving LCP, INP, CLS, page speed, mobile performance, technical SEO, and Google page experience.",
    serviceType: "Core Web Vitals Optimization",
    url: "https://rejishkhanal.com.np/core-web-vitals-optimization",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      jobTitle: "Technical SEO Specialist and Core Web Vitals Expert in Nepal",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NP",
        addressLocality: "Kathmandu",
      },
      sameAs: [
        "https://github.com/rejish7",
        "https://linkedin.com/in/rejish-khanal-259395402",
      ],
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Nepal",
      },
      {
        "@type": "City",
        name: "Kathmandu",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Core Web Vitals Optimization Services",
      itemListElement: optimizations.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.description,
        },
      })),
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Core Web Vitals Optimization",
    url: "https://rejishkhanal.com.np/core-web-vitals-optimization",
    description:
      "Core Web Vitals optimization for LCP, INP, CLS, page speed, mobile performance, and technical SEO.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "Core Web Vitals Optimization",
      "LCP Optimization",
      "INP Optimization",
      "CLS Optimization",
      "Page Speed Optimization",
      "Technical SEO",
      "Website Performance",
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
        name: "Core Web Vitals Optimization",
        item: "https://rejishkhanal.com.np/core-web-vitals-optimization",
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
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={webPageSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <p className="text-sm font-semibold text-primary mb-4">
            Core Web Vitals Optimization Nepal | LCP | INP | CLS | Page Speed
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Core Web Vitals Optimization in Nepal for Faster Websites and Better User Experience
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, a technical SEO specialist and full stack
            developer in Kathmandu, Nepal. I help businesses improve Core Web
            Vitals, page speed, mobile performance, technical SEO, and user
            experience by optimizing LCP, INP, and CLS.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            If your website is slow, failing Google PageSpeed tests, losing
            users on mobile, or showing poor Core Web Vitals in Google Search
            Console, I can help identify the root causes and fix performance
            issues that affect both SEO and conversions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Core Web Vitals Fixed
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request a Performance Audit
              </Button>
            </Link>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Why Core Web Vitals Matter for SEO and Conversions
          </h2>

          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              Core Web Vitals measure how real users experience your website.
              They focus on how fast your main content loads, how quickly your
              page responds after interaction, and whether your layout stays
              visually stable while loading.
            </p>

            <p>
              A slow website can reduce trust, increase bounce rates, and make
              users leave before they contact you, buy from you, or read your
              content. Core Web Vitals optimization improves both technical SEO
              and user experience.
            </p>

            <p>
              For competitive search results, performance can become an
              important advantage when your content and competitors are similar.
              A faster and more stable website gives both users and search
              engines a better experience.
            </p>
          </div>
        </section>

        {/* Core Web Vitals Metrics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            The Three Core Web Vitals Metrics
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <Card key={metric.metric} className="border-l-4 border-l-primary h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {metric.metric}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Full Name
                        </p>
                        <p className="font-semibold">{metric.full}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          Recommended Target
                        </p>
                        <p className="font-semibold text-primary">
                          {metric.target}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          What It Measures
                        </p>
                        <p className="font-semibold text-sm">
                          {metric.impact}
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {metric.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        {metric.fixes.map((fix) => (
                          <div key={fix} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">
                              {fix}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Optimizations */}
        <section className="mb-20 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-3xl font-bold mb-6">
            How I Optimize Core Web Vitals
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Core Web Vitals optimization requires more than installing a plugin
            or compressing a few images. I review frontend code, backend
            response time, rendering behavior, JavaScript execution, mobile
            layout, image delivery, caching, and page templates.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {optimizations.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title}>
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

        {/* Common Issues */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Common Core Web Vitals Issues I Fix
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Most websites fail Core Web Vitals because of multiple performance
            issues working together. These are some of the most common problems
            I find during performance audits and technical SEO audits.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {commonIssues.map((issue) => (
              <div
                key={issue}
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{issue}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My Core Web Vitals Optimization Process
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
            Tools I Use to Measure Core Web Vitals
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            I use a mix of field data, lab data, developer tools, and manual
            testing to understand both what users experience and what technical
            issues need to be fixed.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div key={tool} className="p-4 rounded-lg border bg-background">
                <p className="font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Platforms */}
        <section className="mb-20 p-8 bg-background rounded-lg border">
          <div className="flex items-start gap-4">
            <MonitorCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Platforms and Websites I Can Optimize
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Every platform has different performance challenges. I can help
                optimize custom-coded websites, CMS websites, ecommerce stores,
                and modern JavaScript applications.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {platforms.map((platform) => (
                  <div
                    key={platform}
                    className="p-4 rounded-lg border bg-accent/30"
                  >
                    <p className="font-medium">{platform}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nepal Section */}
        <section className="mb-20 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-start gap-4">
            <Zap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Core Web Vitals Optimization for Businesses in Nepal
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Many websites in Nepal struggle with slow hosting, large
                  images, unoptimized themes, heavy scripts, poor mobile
                  performance, and weak caching. These issues can make websites
                  feel slow and reduce organic performance.
                </p>

                <p>
                  I help businesses in Kathmandu and across Nepal improve page
                  speed, technical SEO, mobile experience, and Core Web Vitals
                  so their websites can perform better for users and search
                  engines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO and Conversion Section */}
        <section className="mb-20 p-8 rounded-lg border bg-background">
          <div className="flex items-start gap-4">
            <BarChart3 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Faster Websites Can Support Better SEO and More Conversions
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Core Web Vitals optimization is not only about passing a test.
                  It is about creating a better experience for real users.
                  Faster pages can help visitors stay longer, browse more pages,
                  complete forms, and trust your business.
                </p>

                <p>
                  When combined with strong content, technical SEO, internal
                  linking, and conversion-focused design, performance
                  optimization can become a valuable part of your organic growth
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions About Core Web Vitals
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
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Is Your Website Too Slow or Failing Core Web Vitals?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s audit your pages, identify what is slowing them down, and
            fix LCP, INP, CLS, mobile speed, and technical performance issues.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get a Performance Audit
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/technical-seo-specialist-nepal">
              <Button size="lg" variant="outline">
                View Technical SEO Services
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
            <Link href="/technical-seo-specialist-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                Technical SEO Specialist in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Improve crawlability, indexing, schema, Core Web Vitals, and technical SEO performance.
              </p>
            </Link>

            <Link href="/seo-audit-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Audit Services in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Find technical, content, indexing, and performance issues hurting your rankings.
              </p>
            </Link>

            <Link href="/web-development-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO-Friendly Web Development in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Build fast, crawlable, responsive, and SEO-ready websites from the beginning.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}