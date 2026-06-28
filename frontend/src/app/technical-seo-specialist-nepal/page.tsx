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
  Network,
  Database,
  Smartphone,
  Bot,
  BarChart3,
  MonitorCheck,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technical SEO Specialist in Nepal | Core Web Vitals & SEO Audit",
  description:
    "Hire Rejish Khanal, a technical SEO specialist in Nepal helping websites improve crawlability, indexing, Core Web Vitals, JavaScript SEO, schema markup, and organic rankings.",
  keywords: [
    "technical SEO specialist Nepal",
    "technical SEO specialist in Nepal",
    "technical SEO consultant Nepal",
    "technical SEO expert Nepal",
    "technical SEO in Nepal",
    "Core Web Vitals expert Nepal",
    "JavaScript SEO specialist Nepal",
    "schema markup Nepal",
    "SEO audit Nepal",
    "technical SEO audit Nepal",
    "website performance optimization Nepal",
    "SEO specialist Kathmandu",
    "SEO expert Nepal",
    "Next.js SEO specialist Nepal",
    "crawlability indexing SEO Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/technical-seo-specialist-nepal",
  },
  openGraph: {
    title: "Technical SEO Specialist in Nepal | Core Web Vitals, Schema & SEO Audit",
    description:
      "Technical SEO services in Nepal for faster, crawlable, indexable, and search-friendly websites. Improve Core Web Vitals, JavaScript SEO, schema markup, and rankings.",
    url: "https://rejishkhanal.com.np/technical-seo-specialist-nepal",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO Specialist in Nepal",
    description:
      "Improve website crawlability, indexing, page speed, Core Web Vitals, JavaScript SEO, schema markup, and technical search performance.",
  },
};

export default function TechnicalSEOPage() {
  const services = [
    {
      title: "Technical SEO Audit",
      description:
        "A complete technical SEO audit covering crawlability, indexing, internal links, redirects, canonicals, robots.txt, XML sitemaps, broken links, duplicate content, and site architecture.",
      icon: FileSearch,
    },
    {
      title: "Core Web Vitals Optimization",
      description:
        "Improve LCP, INP, and CLS by optimizing images, scripts, rendering behavior, caching, code splitting, server response time, and layout stability.",
      icon: Gauge,
    },
    {
      title: "JavaScript SEO",
      description:
        "Fix rendering, hydration, client-side routing, lazy-loaded content, metadata rendering, and indexing issues in JavaScript-heavy websites built with frameworks like Next.js and React.",
      icon: Code2,
    },
    {
      title: "Schema Markup Implementation",
      description:
        "Add structured data such as Service, FAQPage, BreadcrumbList, WebPage, Person, Organization, Article, Product, and LocalBusiness schema where relevant.",
      icon: Database,
    },
    {
      title: "Crawlability and Indexing Fixes",
      description:
        "Help Google discover, crawl, render, and index your important pages by fixing technical barriers, noindex issues, blocked resources, poor internal linking, and crawl waste.",
      icon: Search,
    },
    {
      title: "Website Architecture Optimization",
      description:
        "Improve URL structure, navigation, internal linking, topic hierarchy, service page structure, crawl depth, and information architecture for better SEO performance.",
      icon: Network,
    },
    {
      title: "Mobile and Page Experience SEO",
      description:
        "Optimize mobile usability, responsive design, page experience, tap targets, layout shifts, and speed issues that affect users and search visibility.",
      icon: Smartphone,
    },
    {
      title: "AEO and GEO Technical Readiness",
      description:
        "Prepare your website for AI Overviews, answer engines, and generative search by improving structured content, schema, entity clarity, crawlability, and content accessibility.",
      icon: Bot,
    },
  ];

  const process = [
    {
      step: 1,
      title: "Technical SEO Discovery",
      description:
        "I review your website, business goals, target keywords, CMS or framework, current search performance, and technical challenges.",
    },
    {
      step: 2,
      title: "Full Website Crawl",
      description:
        "I crawl your website to identify broken pages, redirect chains, indexability issues, duplicate content, missing metadata, thin pages, and internal linking gaps.",
    },
    {
      step: 3,
      title: "Performance and Core Web Vitals Review",
      description:
        "I analyze page speed, LCP, INP, CLS, caching, render-blocking resources, image optimization, JavaScript size, and server response time.",
    },
    {
      step: 4,
      title: "Indexing and Search Console Analysis",
      description:
        "I review Google Search Console data to identify indexing problems, crawl errors, ranking drops, impressions, queries, coverage issues, and page experience signals.",
    },
    {
      step: 5,
      title: "Prioritized SEO Roadmap",
      description:
        "I create a clear roadmap that separates critical fixes, high-impact opportunities, quick wins, and long-term technical improvements.",
    },
    {
      step: 6,
      title: "Implementation and Monitoring",
      description:
        "I help implement technical SEO fixes and monitor improvements in rankings, impressions, crawl health, page speed, and organic traffic.",
    },
  ];

  const problems = [
    "Your website is not ranking even after publishing good content",
    "Important pages are not indexed by Google",
    "Google Search Console shows crawling or indexing errors",
    "Your website is slow on mobile devices",
    "Core Web Vitals are failing for LCP, INP, or CLS",
    "JavaScript content is not being rendered properly by search engines",
    "Your sitemap includes wrong, redirected, blocked, or low-value URLs",
    "Robots.txt or noindex tags are blocking important pages",
    "Your website has duplicate content or canonical tag issues",
    "Internal linking is weak and important pages are buried too deep",
    "Schema markup is missing, invalid, or incorrectly implemented",
    "Redirect chains, 404 errors, and broken links are hurting crawl efficiency",
    "Your Next.js, React, WordPress, Django, or Laravel website has technical SEO problems",
    "Your website structure does not support topic authority or service page rankings",
  ];

  const tools = [
    "Google Search Console",
    "Google Analytics 4",
    "PageSpeed Insights",
    "Lighthouse",
    "Chrome DevTools",
    "Screaming Frog",
    "Ahrefs",
    "Semrush",
    "Schema Markup Validator",
    "Rich Results Test",
    "GTmetrix",
    "Server log analysis where required",
  ];

  const platforms = [
    "Next.js",
    "React",
    "WordPress",
    "Shopify",
    "Laravel",
    "Django",
    "Custom-coded websites",
    "Static websites",
    "Headless CMS websites",
    "Ecommerce websites",
    "Service business websites",
    "Portfolio websites",
  ];

  const faqs = [
    {
      question: "What does a technical SEO specialist do?",
      answer:
        "A technical SEO specialist improves the technical foundation of a website so search engines can crawl, render, index, and understand the content properly. This includes fixing Core Web Vitals, crawl errors, indexing problems, JavaScript SEO issues, schema markup, redirects, canonical tags, internal links, mobile usability, and website architecture.",
    },
    {
      question: "Why is technical SEO important for websites in Nepal?",
      answer:
        "Technical SEO is important for websites in Nepal because many websites struggle with slow hosting, poor mobile performance, weak site architecture, indexing issues, and missing structured data. Fixing these issues helps search engines access your pages properly and improves your chances of ranking for competitive keywords.",
    },
    {
      question: "How long does technical SEO take to show results?",
      answer:
        "Some technical SEO improvements, such as fixing crawl errors, broken links, metadata issues, and sitemap problems, can show early impact within a few weeks. Bigger improvements related to Core Web Vitals, site architecture, content structure, and ranking recovery usually take two to four months or longer depending on competition and website condition.",
    },
    {
      question: "What is included in a technical SEO audit?",
      answer:
        "A technical SEO audit includes crawlability, indexing, sitemap review, robots.txt analysis, page speed, Core Web Vitals, mobile usability, structured data, canonical tags, redirects, internal linking, broken links, duplicate content, JavaScript rendering, site architecture, and Google Search Console analysis.",
    },
    {
      question: "Can technical SEO improve Google rankings?",
      answer:
        "Yes, technical SEO can improve Google rankings when technical issues are preventing pages from being crawled, indexed, rendered, or understood correctly. Technical SEO does not replace content quality or authority, but it creates the foundation required for strong organic performance.",
    },
    {
      question: "Do you provide Core Web Vitals optimization in Nepal?",
      answer:
        "Yes, I provide Core Web Vitals optimization for businesses in Nepal and international clients. I help improve LCP, INP, and CLS by optimizing images, scripts, layout shifts, server response time, caching, rendering behavior, and frontend performance.",
    },
    {
      question: "Do you work with Next.js and JavaScript SEO?",
      answer:
        "Yes, I work with Next.js, React, and JavaScript-heavy websites. I can help fix SEO issues related to metadata rendering, server-side rendering, hydration, lazy-loaded content, internal routing, structured data, and indexability.",
    },
    {
      question: "Can you help if my website is not indexed on Google?",
      answer:
        "Yes. I can review Google Search Console, robots.txt, noindex tags, canonical tags, sitemap files, internal links, page quality, crawlability, and server responses to identify why your website or pages are not being indexed properly.",
    },
    {
      question: "What is the cost of a technical SEO audit in Nepal?",
      answer:
        "The cost of a technical SEO audit in Nepal depends on website size, number of pages, CMS or framework, technical complexity, and whether implementation support is required. Small website audits usually cost less than ecommerce, enterprise, or JavaScript-heavy website audits.",
    },
    {
      question: "Who should hire a technical SEO specialist?",
      answer:
        "You should hire a technical SEO specialist if your website is slow, not ranking, not indexed properly, losing organic traffic, failing Core Web Vitals, showing crawl errors, or built with a framework that requires technical SEO knowledge.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Technical SEO Specialist in Nepal",
    description:
      "Technical SEO services in Nepal for improving crawlability, indexing, Core Web Vitals, JavaScript SEO, schema markup, site architecture, and search performance.",
    serviceType: "Technical SEO",
    url: "https://rejishkhanal.com.np/technical-seo-specialist-nepal",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      jobTitle: "Technical SEO Specialist in Nepal",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NP",
        addressLocality: "Kathmandu",
      },
      sameAs: [
        "https://linkedin.com/in/rejish-khanal",
        "https://github.com/rejish7",
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
      name: "Technical SEO Services",
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
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
    jobTitle: "Technical SEO Specialist in Nepal",
    description:
      "Rejish Khanal is a technical SEO specialist in Nepal helping businesses improve crawlability, indexing, Core Web Vitals, schema markup, JavaScript SEO, and organic search performance.",
    knowsAbout: [
      "Technical SEO",
      "Core Web Vitals",
      "JavaScript SEO",
      "Schema Markup",
      "Google Search Console",
      "Crawlability",
      "Indexing",
      "Next.js SEO",
      "Website Performance Optimization",
      "SEO Audits",
      "AEO",
      "GEO",
    ],
    sameAs: [
      "https://linkedin.com/in/rejish-khanal",
      "https://github.com/rejish7",
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Technical SEO Specialist in Nepal",
    url: "https://rejishkhanal.com.np/technical-seo-specialist-nepal",
    description:
      "Technical SEO specialist in Nepal for faster, crawlable, indexable, and SEO-friendly websites.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "Technical SEO Specialist in Nepal",
      "Core Web Vitals Optimization",
      "JavaScript SEO",
      "Schema Markup",
      "Technical SEO Audit Nepal",
      "Website Performance Optimization",
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
        name: "Technical SEO Specialist in Nepal",
        item: "https://rejishkhanal.com.np/technical-seo-specialist-nepal",
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
        <section className="mb-20">
          <p className="text-sm font-semibold text-primary mb-4">
            Technical SEO Specialist in Nepal | Core Web Vitals | JavaScript SEO | Schema Markup
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Technical SEO Specialist in Nepal for Faster, Crawlable, and Search-Friendly Websites
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, a technical SEO specialist in Kathmandu, Nepal.
            I help businesses fix technical SEO problems, improve Core Web
            Vitals, solve indexing issues, optimize JavaScript SEO, implement
            schema markup, and build websites that search engines can crawl,
            render, understand, and rank properly.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            If your website is slow, not ranking, not indexed properly, or
            losing organic traffic, the problem may not be your content alone.
            Your website may have technical SEO issues that are preventing
            Google and other search engines from understanding your pages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get a Technical SEO Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request a Technical SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Technical SEO Services in Nepal for Better Rankings and Organic Growth
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Technical SEO is the foundation of every successful search
              strategy. A website can have strong content and backlinks, but if
              search engines cannot crawl, render, index, or understand the
              website properly, rankings become difficult.
            </p>

            <p>
              My technical SEO services in Nepal focus on improving the hidden
              technical elements that affect search visibility. I analyze your
              website structure, indexing status, page speed, Core Web Vitals,
              schema markup, mobile usability, internal links, redirects,
              canonicals, sitemap files, and crawl efficiency.
            </p>

            <p>
              The goal is simple: make your website easier for search engines to
              access, easier for users to navigate, and stronger for long-term
              organic growth.
            </p>
          </div>
        </section>

        <section className="mb-20 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Me as Your Technical SEO Specialist?
          </h2>

          <div className="space-y-4">
            {[
              "I combine technical SEO knowledge with developer-level implementation skills.",
              "I understand how search engines crawl, render, index, and evaluate modern websites.",
              "I work with Next.js, React, WordPress, Django, Laravel, Shopify, and custom-coded websites.",
              "I can identify SEO problems that basic SEO tools often miss.",
              "I optimize for Core Web Vitals, mobile usability, structured data, site architecture, and crawl efficiency.",
              "I focus on practical SEO fixes that improve rankings, performance, and user experience.",
              "I help businesses in Nepal and international markets build a strong technical SEO foundation.",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Technical SEO Services I Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Card key={index} className="h-full">
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

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Core Web Vitals Optimization in Nepal
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Core Web Vitals are important page experience signals that measure
              how fast, stable, and responsive your website feels to users.
              Poor Core Web Vitals can affect user experience, conversions, and
              overall SEO performance.
            </p>

            <p>
              I help improve Largest Contentful Paint, Interaction to Next
              Paint, and Cumulative Layout Shift by optimizing frontend code,
              images, fonts, scripts, caching, server response time, layout
              stability, and rendering performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>LCP Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Improve loading performance by optimizing hero images,
                  server response time, critical CSS, caching, and render-blocking resources.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>INP Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Improve page responsiveness by reducing JavaScript execution,
                  optimizing event handlers, and improving interaction performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CLS Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduce layout shifts by setting proper image dimensions,
                  reserving space for dynamic content, and improving font loading behavior.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            JavaScript SEO for Next.js, React, and Modern Websites
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Many modern websites use JavaScript frameworks such as Next.js,
              React, and other frontend technologies. These websites can perform
              well in search, but only when metadata, content rendering, internal
              links, schema markup, and page structure are implemented properly.
            </p>

            <p>
              I review JavaScript SEO issues such as client-side rendering
              problems, missing metadata, delayed content rendering, hydration
              issues, lazy-loaded important content, incorrect canonical tags,
              and search engine visibility problems.
            </p>

            <p>
              As both a developer and SEO specialist, I can understand the code
              behind technical issues and recommend practical fixes that support
              search performance.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Common Technical SEO Problems I Fix
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-start gap-4">
            <MonitorCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Technical SEO for Nepali Businesses
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Many websites in Nepal face technical problems such as slow
                  hosting, unoptimized images, poor mobile performance, missing
                  schema markup, weak internal linking, and incomplete indexing.
                  These issues can make it difficult to rank even when the
                  business has valuable services or content.
                </p>

                <p>
                  I help Nepali businesses build faster, cleaner, and more
                  search-friendly websites. Whether you are based in Kathmandu,
                  Lalitpur, Bhaktapur, Pokhara, Chitwan, Butwal, Biratnagar, or
                  serving international clients, technical SEO can improve your
                  organic visibility and website performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My Technical SEO Process
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {process.map((item) => (
              <Card key={item.step}>
                <CardHeader>
                  <p className="text-sm font-semibold text-primary mb-2">
                    Step {item.step}
                  </p>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Tools I Use for Technical SEO Audits
          </h2>

          <p className="text-lg text-muted-foreground mb-6">
            A strong technical SEO audit requires the right combination of tools,
            manual review, developer knowledge, and search performance analysis.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div key={tool} className="p-4 rounded-lg border bg-background">
                <p className="font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Platforms and Frameworks I Work With
          </h2>

          <p className="text-lg text-muted-foreground mb-6">
            Every CMS and framework has different technical SEO challenges. I
            can help diagnose and optimize websites built with modern frameworks,
            CMS platforms, ecommerce systems, and custom codebases.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((platform) => (
              <div key={platform} className="p-4 rounded-lg border bg-background">
                <p className="font-medium">{platform}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 rounded-lg border bg-background">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Technical SEO Builds the Foundation for Long-Term Rankings
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Technical SEO does not replace content, backlinks, or brand
                  authority. Instead, it creates the foundation that allows your
                  content and authority to perform better in search results.
                </p>

                <p>
                  When your website is fast, crawlable, indexable, structured,
                  mobile-friendly, and easy to understand, search engines can
                  evaluate your content more effectively. This improves your
                  chances of ranking for high-value keywords over time.
                </p>
              </div>
            </div>
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
          <BarChart3 className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Ready to Fix Your Website&apos;s Technical SEO?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a technical SEO audit and discover what is stopping your website
            from ranking, indexing, loading faster, and performing better in
            organic search.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Book a Technical SEO Consultation
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

        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">
            Related SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/seo-audit-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Audit Services in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Get a complete technical, content, and performance SEO audit.
              </p>
            </Link>

            <Link href="/seo-expert-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Improve rankings, traffic, local visibility, and organic growth.
              </p>
            </Link>

            <Link href="/local-seo-services-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                Local SEO Services in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Rank for location-based searches in Kathmandu and across Nepal.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}