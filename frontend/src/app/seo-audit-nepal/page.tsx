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
  FileSearch,
  Gauge,
  Search,
  Link2,
  BarChart3,
  ShieldCheck,
  Code2,
  Map,
  ListChecks,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Audit Nepal | Technical SEO Audit & Ranking Fixes",
  description:
    "Get a professional SEO audit in Nepal by Rejish Khanal. Find technical SEO issues, indexing problems, Core Web Vitals errors, content gaps, and ranking barriers.",
  keywords: [
    "SEO audit Nepal",
    "SEO audit in Nepal",
    "SEO audit services Nepal",
    "website SEO audit Nepal",
    "technical SEO audit Nepal",
    "technical SEO audit in Nepal",
    "Google Search Console audit Nepal",
    "Core Web Vitals audit Nepal",
    "website audit Nepal",
    "SEO expert Nepal",
    "SEO expert in Nepal",
    "technical SEO specialist Nepal",
    "SEO consultant Nepal",
    "SEO ranking audit Nepal",
    "on page SEO audit Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/seo-audit-nepal",
  },
  openGraph: {
    title: "SEO Audit Nepal | Technical SEO Audit & Ranking Fixes",
    description:
      "Professional SEO audit services in Nepal to identify technical SEO problems, indexing issues, Core Web Vitals errors, content gaps, and ranking barriers.",
    url: "https://rejishkhanal.com.np/seo-audit-nepal",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Audit Nepal | Rejish Khanal",
    description:
      "Find what is hurting your Google rankings with a technical SEO audit, content audit, Core Web Vitals audit, and Search Console analysis.",
  },
};

export default function SEOAuditPage() {
  const auditAreas = [
    {
      icon: Code2,
      title: "Technical SEO Audit",
      description:
        "I review the technical foundation of your website to find problems that stop search engines from crawling, rendering, indexing, and ranking your pages properly.",
      items: [
        "Crawlability and indexation analysis",
        "Robots.txt and XML sitemap audit",
        "Canonical tag review",
        "Redirect chain and 404 error detection",
        "Duplicate content identification",
        "JavaScript SEO and rendering checks",
        "Schema markup validation",
        "Internal linking and crawl depth review",
      ],
    },
    {
      icon: Gauge,
      title: "Core Web Vitals Audit",
      description:
        "I analyze page speed, mobile performance, load experience, responsiveness, and layout stability to find performance issues affecting users and SEO.",
      items: [
        "Largest Contentful Paint review",
        "Interaction to Next Paint review",
        "Cumulative Layout Shift review",
        "Image optimization opportunities",
        "Render-blocking resource analysis",
        "JavaScript and CSS performance review",
        "Server response time checks",
        "Mobile performance diagnosis",
      ],
    },
    {
      icon: Search,
      title: "On-Page SEO Audit",
      description:
        "I review your important pages to identify problems with metadata, headings, keyword targeting, content quality, search intent, and internal optimization.",
      items: [
        "Title tag and meta description review",
        "H1, H2, and heading structure audit",
        "Keyword targeting analysis",
        "Search intent alignment",
        "Content quality assessment",
        "Image alt text review",
        "URL structure analysis",
        "Internal link optimization opportunities",
      ],
    },
    {
      icon: BarChart3,
      title: "Google Search Console Audit",
      description:
        "I review your actual Google Search Console data to understand indexing problems, search queries, ranking drops, impressions, clicks, and page-level issues.",
      items: [
        "Indexing issue review",
        "Coverage and page indexing analysis",
        "Search query performance review",
        "Top pages and low-performing pages",
        "CTR improvement opportunities",
        "Ranking drop investigation",
        "Mobile usability checks",
        "Manual action and security issue review",
      ],
    },
    {
      icon: FileSearch,
      title: "Content and Keyword Gap Audit",
      description:
        "I compare your website content with competitor pages to identify missing topics, weak pages, keyword gaps, and new ranking opportunities.",
      items: [
        "Keyword gap analysis",
        "Content depth review",
        "Thin content identification",
        "Duplicate topic detection",
        "Blog content opportunities",
        "Service page improvement areas",
        "Featured snippet opportunities",
        "AEO and GEO content readiness",
      ],
    },
    {
      icon: Link2,
      title: "Backlink and Authority Audit",
      description:
        "I review your website authority, backlink quality, internal link flow, competitor link gaps, and off-page SEO signals that can affect rankings.",
      items: [
        "Backlink profile review",
        "Referring domain analysis",
        "Toxic link detection",
        "Competitor backlink comparison",
        "Internal authority distribution",
        "Anchor text distribution",
        "Link gap opportunities",
        "Authority-building recommendations",
      ],
    },
  ];

  const deliverables = [
    "Complete SEO audit report with clear findings",
    "Technical SEO issue list with priority levels",
    "Google Search Console performance review",
    "Core Web Vitals and page speed analysis",
    "On-page SEO and content optimization recommendations",
    "Indexing, crawlability, sitemap, and robots.txt review",
    "Schema markup and structured data recommendations",
    "Internal linking and site architecture suggestions",
    "Competitor and keyword gap analysis",
    "Action plan organized by impact, urgency, and difficulty",
    "Implementation roadmap for the next 30 to 90 days",
    "Optional implementation support after the audit",
  ];

  const commonIssues = [
    "Important pages are not indexed by Google",
    "Website is slow on mobile devices",
    "Core Web Vitals are failing for LCP, INP, or CLS",
    "Robots.txt is blocking important pages",
    "XML sitemap includes wrong, redirected, or low-value URLs",
    "Canonical tags are missing or incorrect",
    "Pages have duplicate titles or missing meta descriptions",
    "Your website has broken internal links and 404 pages",
    "Schema markup is missing, invalid, or incomplete",
    "Internal linking is weak and important pages are buried too deep",
    "Service pages are not aligned with search intent",
    "Blog content is not targeting the right keywords",
    "JavaScript content is not rendering properly for search engines",
    "Competitors have stronger content, structure, or authority",
    "Google Search Console shows indexing or performance problems",
  ];

  const process = [
    {
      step: 1,
      title: "SEO Discovery",
      description:
        "I understand your website, business goals, target keywords, competitors, traffic issues, and the pages you want to rank.",
    },
    {
      step: 2,
      title: "Website Crawl and Technical Analysis",
      description:
        "I crawl your website and review technical SEO, indexability, crawlability, redirects, canonicals, sitemap, schema, page speed, and internal links.",
    },
    {
      step: 3,
      title: "Search Console and Content Review",
      description:
        "I review Google Search Console data, keyword performance, top pages, low-performing pages, content quality, search intent, and ranking opportunities.",
    },
    {
      step: 4,
      title: "Audit Report and Roadmap",
      description:
        "You receive a clear SEO audit report with prioritized recommendations, technical fixes, content improvements, and an implementation roadmap.",
    },
  ];

  const tools = [
    "Google Search Console",
    "Google Analytics 4",
    "PageSpeed Insights",
    "Lighthouse",
    "Screaming Frog",
    "Ahrefs",
    "Semrush",
    "Schema Markup Validator",
    "Rich Results Test",
    "Chrome DevTools",
    "GTmetrix",
    "Manual SERP analysis",
  ];

  const faqs = [
    {
      question: "What is an SEO audit?",
      answer:
        "An SEO audit is a detailed review of your website to identify issues that may be affecting your search rankings, indexing, traffic, and conversions. It checks technical SEO, on-page SEO, content quality, Core Web Vitals, internal links, backlinks, competitors, and search performance.",
    },
    {
      question: "What is included in an SEO audit in Nepal?",
      answer:
        "My SEO audit in Nepal includes technical SEO analysis, Google Search Console review, Core Web Vitals audit, indexing review, sitemap and robots.txt audit, schema markup validation, on-page SEO review, content gap analysis, backlink review, competitor comparison, and a prioritized action plan.",
    },
    {
      question: "Why does my website need an SEO audit?",
      answer:
        "Your website needs an SEO audit if it is not ranking, losing traffic, not getting indexed, loading slowly, or failing to generate leads. An audit helps identify the exact problems stopping Google and users from understanding, accessing, and trusting your website.",
    },
    {
      question: "How long does an SEO audit take?",
      answer:
        "A standard SEO audit usually takes five to seven business days depending on website size, technical complexity, number of indexed pages, and depth of competitor analysis. Larger ecommerce, SaaS, or JavaScript-heavy websites may take longer.",
    },
    {
      question: "How much does an SEO audit cost in Nepal?",
      answer:
        "The cost of an SEO audit in Nepal depends on website size, number of pages, technical complexity, and whether implementation support is required. Small website audits usually cost less than large ecommerce, enterprise, or custom web application audits.",
    },
    {
      question: "Can you help implement the SEO audit recommendations?",
      answer:
        "Yes. I can help implement technical SEO fixes, improve Core Web Vitals, update metadata, fix indexing issues, add schema markup, improve internal linking, optimize content, and support developers with clear implementation guidance.",
    },
    {
      question: "Can an SEO audit improve Google rankings?",
      answer:
        "Yes, an SEO audit can improve Google rankings when the recommendations are implemented properly. The audit identifies technical, content, and authority issues that may be preventing your pages from ranking, but ranking improvements depend on competition, content quality, authority, and ongoing optimization.",
    },
    {
      question: "Do you audit WordPress, Next.js, Django, Laravel, and custom websites?",
      answer:
        "Yes. I audit websites built with WordPress, Next.js, React, Django, Laravel, Shopify, PHP, static websites, and custom-coded platforms. Each platform has different SEO risks, so I review the website based on its actual technical setup.",
    },
    {
      question: "What is the difference between an SEO audit and a technical SEO audit?",
      answer:
        "A technical SEO audit focuses on crawlability, indexing, performance, schema, redirects, canonicals, sitemaps, robots.txt, and technical website structure. A full SEO audit includes technical SEO plus content, keywords, competitors, backlinks, internal links, and conversion opportunities.",
    },
    {
      question: "Who should get an SEO audit?",
      answer:
        "Businesses, startups, ecommerce websites, consultants, agencies, bloggers, SaaS companies, and service providers should get an SEO audit if they want to improve rankings, organic traffic, website performance, and lead generation.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Audit Services in Nepal",
    description:
      "Professional SEO audit in Nepal to identify technical SEO issues, indexing problems, Core Web Vitals errors, content gaps, backlink issues, and ranking barriers.",
    serviceType: "SEO Audit",
    url: "https://rejishkhanal.com.np/seo-audit-nepal",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      jobTitle: "SEO Expert in Nepal and Technical SEO Specialist",
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
      name: "SEO Audit Areas",
      itemListElement: auditAreas.map((area) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: area.title,
          description: area.description,
        },
      })),
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SEO Audit Nepal",
    url: "https://rejishkhanal.com.np/seo-audit-nepal",
    description:
      "SEO audit services in Nepal for technical SEO, Core Web Vitals, indexing, content gaps, backlinks, and ranking improvements.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "SEO Audit Nepal",
      "Technical SEO Audit Nepal",
      "Core Web Vitals Audit",
      "Google Search Console Audit",
      "Website SEO Audit Nepal",
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
        name: "SEO Audit Nepal",
        item: "https://rejishkhanal.com.np/seo-audit-nepal",
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
    <main className="min-h-screen bg-linear-to-b from-background to-background/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
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
            SEO Audit Nepal | Technical SEO Audit | Core Web Vitals Audit
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            SEO Audit in Nepal to Find What Is Hurting Your Rankings, Traffic, and Leads
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, an SEO expert and technical SEO specialist in
            Nepal. I provide professional SEO audit services to help businesses
            find technical issues, indexing problems, Core Web Vitals errors,
            content gaps, and ranking barriers that may be stopping their
            website from growing.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            If your website is not ranking on Google, losing organic traffic,
            failing to generate leads, or not being indexed properly, a detailed
            SEO audit can show exactly what needs to be fixed and which actions
            should be prioritized first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Order Your SEO Audit
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

        {/* What's Included */}
        <section className="mb-20 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-3xl font-bold mb-6">
            What Is Included in My SEO Audit?
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            My SEO audit is designed to give you a clear picture of your
            website’s search performance. Instead of giving you generic tool
            exports, I focus on practical findings, priority fixes, and actions
            that can improve crawlability, indexing, rankings, user experience,
            and conversions.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((deliverable) => (
              <div key={deliverable} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                <p className="text-foreground">{deliverable}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Audit Areas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Detailed SEO Audit Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {auditAreas.map((area) => {
              const Icon = area.icon;

              return (
                <Card key={area.title} className="h-full">
                  <CardHeader>
                    <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <CardTitle>{area.title}</CardTitle>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {area.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose My SEO Audit Services in Nepal?
          </h2>

          <div className="space-y-4">
            {[
              "I combine SEO strategy with developer-level technical analysis.",
              "I do not rely only on automated reports. I manually review technical, content, and search performance issues.",
              "I prioritize recommendations by impact, urgency, and implementation difficulty.",
              "I understand Next.js, React, WordPress, Django, Laravel, PHP, and custom-coded websites.",
              "I review real Google Search Console data instead of only relying on third-party metrics.",
              "I include technical SEO, content SEO, internal linking, Core Web Vitals, indexing, and competitor insights.",
              "I can help implement the recommendations after the audit if you need execution support.",
            ].map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Issues Found */}
        <section className="mb-20 bg-primary/5 p-8 rounded-lg border border-primary/20">
          <h2 className="text-3xl font-bold mb-6">
            Common Issues I Find During SEO Audits
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Many websites do not fail because of one single SEO issue. Rankings
            usually suffer because of multiple technical, content, performance,
            and authority problems working together. These are some of the most
            common issues I find during SEO audits.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {commonIssues.map((issue) => (
              <div key={issue} className="flex items-start gap-3">
                <div className="h-3 w-3 bg-primary rounded-full mt-2 shrink-0" />
                <p className="text-foreground">{issue}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Audit Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My SEO Audit Process
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
            Tools I Use for SEO Audits
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            A strong SEO audit combines tools, manual review, technical
            knowledge, and search performance analysis. I use multiple tools to
            validate findings and avoid relying on one source of SEO data.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div key={tool} className="p-4 rounded-lg border bg-background">
                <p className="font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Needs Audit */}
        <section className="mb-20 p-8 rounded-lg border bg-background">
          <div className="flex items-start gap-4">
            <ListChecks className="h-8 w-8 text-primary shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Who Should Get an SEO Audit?
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  You should get an SEO audit if your website is not ranking,
                  organic traffic is dropping, important pages are not indexed,
                  your website is slow, or you are planning a redesign,
                  migration, or new SEO campaign.
                </p>

                <p>
                  SEO audits are valuable for service businesses, ecommerce
                  websites, blogs, SaaS websites, agencies, startups, local
                  businesses, and personal brands that want better visibility on
                  Google and stronger organic growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nepal Section */}
        <section className="mb-20 p-8 rounded-lg border bg-accent/40">
          <div className="flex items-start gap-4">
            <Map className="h-8 w-8 text-primary shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                SEO Audit Services for Businesses in Nepal
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Many Nepali websites face technical SEO issues such as slow
                  hosting, unoptimized images, poor mobile performance, missing
                  schema, weak content structure, and incomplete indexing. These
                  problems can make it difficult to rank even when the business
                  has good services.
                </p>

                <p>
                  I provide SEO audit services for businesses in Kathmandu,
                  Lalitpur, Bhaktapur, Pokhara, Chitwan, Butwal, Biratnagar,
                  and across Nepal. I also work with international websites that
                  need technical SEO and organic growth support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Result Expectation */}
        <section className="mb-20 p-8 rounded-lg border bg-background">
          <div className="flex items-start gap-4">
            <TrendingUp className="h-8 w-8 text-primary shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                What Happens After the SEO Audit?
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  After the audit, you will know which issues are hurting your
                  website and which fixes should be done first. The goal is to
                  remove technical barriers, improve page quality, strengthen
                  internal linking, and help search engines understand your
                  website better.
                </p>

                <p>
                  SEO results depend on the condition of your website,
                  competition, content quality, authority, and implementation.
                  Some technical improvements can create early changes, while
                  larger ranking improvements usually require consistent
                  optimization over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions About SEO Audits
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

        {/* CTA Section */}
        <section className="bg-linear-to-r from-primary/10 to-primary/5 rounded-lg p-10 sm:p-12 text-center border border-primary/20">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Stop Guessing What Is Wrong With Your SEO
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a professional SEO audit that shows what is stopping your
            website from ranking, indexing, loading faster, and generating more
            organic leads.
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
                View All SEO Services
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
                Technical SEO Specialist in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Fix crawlability, indexing, Core Web Vitals, schema, and technical SEO issues.
              </p>
            </Link>

            <Link href="/seo-expert-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Improve rankings, organic traffic, local visibility, AEO, GEO, and content SEO.
              </p>
            </Link>

            <Link href="/local-seo-services-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                Local SEO Services in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Rank better for Kathmandu and Nepal-based local search queries.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}