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
  Bot,
  Globe2,
  Search,
  ClipboardList,
  Wrench,
  LineChart,
  Target,
  ShieldCheck,
  AlertTriangle,
  Users,
} from "lucide-react";

const pageUrl = "https://rejishkhanal.com.np/geo-expert-nepal";

export const metadata: Metadata = {
  title: "GEO Expert in Nepal for AI Search",
  description:
    "Work with Rejish Khanal, a GEO expert in Nepal providing AI search audits, entity optimization and content improvements for Google, ChatGPT and Perplexity.",
  keywords: [
    "GEO expert in Nepal",
    "GEO services Nepal",
    "generative engine optimization Nepal",
    "AI search optimization Nepal",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "GEO Expert in Nepal for AI Search | Rejish Khanal",
    description:
      "Work with Rejish Khanal, a GEO expert in Nepal providing AI search audits, entity optimization and content improvements for Google, ChatGPT and Perplexity.",
    url: pageUrl,
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://rejishkhanal.com.np/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rejish Khanal, SEO expert and web developer in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Expert in Nepal for AI Search | Rejish Khanal",
    description:
      "AI search audits, entity optimization and content improvements for generative search, delivered from Nepal for local and remote clients.",
    images: ["https://rejishkhanal.com.np/og-image.jpg"],
  },
};

const problems = [
  "Your brand rarely appears in AI-generated answers while competitors are cited.",
  "Search engines cannot clearly connect your business with the services you sell.",
  "Important content is hard to extract, quote or summarize.",
  "Service pages make claims that are not supported by evidence on the page.",
  "Business, author and entity information is inconsistent across the site.",
  "Useful content exists but is poorly connected internally.",
  "Structured data does not match what visitors can see on the page.",
  "Key questions your buyers ask are not answered in a direct, complete way.",
];

const servicePackages = [
  {
    icon: ClipboardList,
    title: "GEO Audit",
    description:
      "A structured review of how your brand, services and content currently come across to generative search systems.",
    items: [
      "AI visibility baseline on agreed test queries",
      "Brand and entity assessment",
      "Citation-source assessment",
      "Content extractability review",
      "Important-question mapping",
      "Internal-link review",
      "Structured data validation",
      "Competitor visibility comparison",
      "Prioritized implementation roadmap",
    ],
  },
  {
    icon: Wrench,
    title: "GEO Implementation",
    description:
      "Hands-on changes to the pages, entities and supporting content that shape how your business is understood.",
    items: [
      "Service-page restructuring",
      "Direct-answer improvements",
      "Entity relationship clarification",
      "Author and provider signal improvements",
      "Supporting content creation",
      "Internal-link implementation",
      "Evidence and source improvements",
      "Appropriate structured data",
    ],
  },
  {
    icon: LineChart,
    title: "GEO Monitoring",
    description:
      "Repeatable checks that record what changed, on which platform, and on which date.",
    items: [
      "Tracked test queries",
      "Platform and date documentation",
      "Branded and non-branded visibility checks",
      "Cited URL monitoring",
      "Competitor comparison",
      "Content-gap reporting",
      "Monthly implementation priorities",
    ],
  },
];

const platforms = [
  {
    name: "Google AI Overviews",
    note: "Summaries shown above or within traditional search results.",
  },
  {
    name: "ChatGPT Search",
    note: "Conversational answers that draw on retrieved web sources.",
  },
  {
    name: "Perplexity",
    note: "Answer-style results with visible source citations.",
  },
  {
    name: "Bing and Microsoft Copilot",
    note: "Where these search experiences are relevant to your market.",
  },
  {
    name: "Traditional Google Search",
    note: "GEO depends partly on strong technical SEO and retrievable content.",
  },
];

const process = [
  {
    title: "Baseline and discovery",
    body: "We agree the business priorities, the platforms that matter to you, and a starter set of test queries.",
    output:
      "You receive a written baseline: agreed queries, platforms, dates and current observations.",
  },
  {
    title: "Technical and entity audit",
    body: "I review crawlability, indexing, structured data and how clearly your brand, services and people are defined.",
    output:
      "You receive a list of technical and entity gaps, ordered by likely impact.",
  },
  {
    title: "Content and evidence assessment",
    body: "Each important page is checked for extractability, answer clarity, supporting evidence and internal connections.",
    output:
      "You receive page-level notes covering structure, evidence gaps and internal-link fixes.",
  },
  {
    title: "Implementation",
    body: "Approved changes are made directly, or delivered as a precise specification if your own developers implement them.",
    output:
      "You receive completed page changes, updated internal links and schema, or a build-ready specification.",
  },
  {
    title: "Testing and monitoring",
    body: "The agreed queries are re-checked on each platform with the date and result recorded.",
    output:
      "You receive dated visibility checks listing the query, platform, observation and cited URLs.",
  },
  {
    title: "Iteration",
    body: "Findings from each cycle shape the next round of work instead of a one-off report.",
    output:
      "You receive an updated priority list for the next cycle with reasons for each item.",
  },
];

const trackedSignals = [
  "Inclusion in selected AI-generated answers",
  "Pages receiving citations",
  "Brand mentions",
  "Branded search growth",
  "Non-branded organic visibility",
  "Search Console impressions and clicks",
  "Relevant referring sources",
  "Assisted leads and enquiries",
  "Query coverage",
  "Indexing and crawl health",
];

const fitFor = [
  "Nepal-based service businesses",
  "Ecommerce brands",
  "SaaS businesses",
  "Professional service providers",
  "Personal brands",
  "Businesses expanding internationally",
  "Organizations with established expertise but weak AI-search visibility",
];

const notYet = [
  "The website is not indexable.",
  "The core service pages are incomplete.",
  "The business has no clear offering.",
  "Existing claims cannot be supported.",
  "The business expects guaranteed AI citations.",
  "Basic technical SEO problems remain unresolved.",
];

const faqs = [
  {
    question: "What does a GEO expert do?",
    answer:
      "A GEO expert reviews how clearly your business, services and content are understood by generative search systems, then improves the pages, entities and supporting evidence behind that understanding. The work covers technical checks, content structure, internal links and repeatable visibility testing.",
  },
  {
    question: "How is GEO different from traditional SEO?",
    answer:
      "SEO improves visibility in traditional search results through crawling, indexing, relevance and authority. GEO focuses on how content and entities are retrieved, understood and potentially cited inside generated answers, and it relies on the same technical foundation.",
  },
  {
    question: "Can GEO guarantee citations in ChatGPT or Google AI Overviews?",
    answer:
      "No. No practitioner can guarantee inclusion or citation in any AI-generated result, and anyone promising that should be treated with caution. GEO work improves how retrievable, clear and well-supported your content is, which is the part that can be controlled.",
  },
  {
    question: "How long does GEO implementation take?",
    answer:
      "A focused audit usually takes one to two weeks, while implementation depends on the number of pages and the speed of your publishing process. Most engagements run in cycles, with monitoring and iteration after the first round of changes.",
  },
  {
    question: "Do Nepal businesses need GEO?",
    answer:
      "Nepal businesses that sell to people searching through AI-assisted tools benefit from being clearly understood by those systems, just as international buyers do. The need depends on how your customers actually research and choose a provider.",
  },
  {
    question: "How is AI-search visibility measured?",
    answer:
      "Visibility is tracked with agreed test queries checked on named platforms on specific dates, alongside Search Console impressions, clicks and brand signals. Results vary by platform, location, freshness and query wording, so they are reported as observations rather than fixed rankings.",
  },
  {
    question: "Can GEO work with an existing SEO strategy?",
    answer:
      "Yes, and it usually should. GEO builds on technical SEO, content quality and internal linking, so it fits alongside an existing strategy instead of replacing it. See how SEO, AEO and GEO overlap in the comparison below.",
  },
  {
    question: "What is included in a GEO audit?",
    answer:
      "An audit covers an AI visibility baseline, brand and entity assessment, citation-source review, content extractability, important-question mapping, internal links, structured data validation, a competitor comparison and a prioritized roadmap.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://rejishkhanal.com.np/#person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np/",
      image:
        "https://rejishkhanal.com.np/assets/images/rejish-khanal-seo-expert-in-nepal.webp",
      jobTitle: ["Technical SEO Expert", "Full-Stack Developer"],
      knowsAbout: [
        "Technical SEO",
        "Generative Engine Optimization",
        "Answer Engine Optimization",
        "Structured Data",
        "Core Web Vitals",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://rejishkhanal.com.np/#website",
      url: "https://rejishkhanal.com.np/",
      name: "Rejish Khanal",
      publisher: { "@id": "https://rejishkhanal.com.np/#person" },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "GEO Expert in Nepal for AI Search Visibility",
      description:
        "Generative Engine Optimization services in Nepal covering AI search audits, entity optimization, structured content and visibility monitoring for Google AI Overviews, ChatGPT Search and Perplexity.",
      isPartOf: { "@id": "https://rejishkhanal.com.np/#website" },
      about: { "@id": `${pageUrl}#service` },
      author: { "@id": "https://rejishkhanal.com.np/#person" },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Generative Engine Optimization Services",
      serviceType: "Generative Engine Optimization",
      url: pageUrl,
      description:
        "GEO audits, implementation and monitoring to improve how a brand, its services and its content are understood across generative and traditional search.",
      provider: { "@id": "https://rejishkhanal.com.np/#person" },
      areaServed: ["Nepal", "Remote clients worldwide"],
      serviceOutput:
        "GEO audit findings, implementation changes and dated visibility monitoring",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://rejishkhanal.com.np/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "GEO Expert in Nepal",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function GEOExpertNepalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* HERO */}
        <section className="mb-20">
          <p className="text-sm font-semibold text-primary mb-4">
            Generative Engine Optimization (GEO)
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            GEO Expert in Nepal for AI Search Visibility
          </h1>

          <p className="text-xl text-muted-foreground mb-5">
            I help businesses improve how their brands, services and expertise
            are understood across Google AI Overviews, ChatGPT Search,
            Perplexity and other generative search experiences.
          </p>

          <p className="text-lg text-muted-foreground mb-6">
            My GEO work combines technical SEO, entity optimization,
            structured content and evidence-based authority signals. I work with
            businesses in Nepal and with remote clients internationally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="/contact">
              <Button size="lg" className="group">
                Request a GEO Audit
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="#geo-process">
              <Button size="lg" variant="outline">
                See How GEO Works
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Prefer to review evidence first?{" "}
            <Link
              href="/case-studies"
              className="text-primary font-medium hover:underline"
            >
              See documented case studies
            </Link>{" "}
            with dates, methods and limitations.
          </p>
        </section>

        {/* WHAT GEO SOLVES */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">
            What GEO work actually solves
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Most businesses do not have a visibility problem in isolation. They
            have a clarity problem: search and AI systems cannot reliably tell
            what the business offers, who is behind it, and which claims are
            supported.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border bg-background p-4"
              >
                <CheckCircle2
                  className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6 max-w-3xl">
            GEO improves the inputs those systems work with. It does not
            control which sources any AI platform chooses to cite.
          </p>
        </section>

        {/* GEO SERVICES */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">GEO services</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Three connected offers. Most engagements start with the audit, move
            into implementation, then settle into a monitoring rhythm.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {servicePackages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <Card key={pkg.title} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle>{pkg.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                      {pkg.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2
                            className="h-4 w-4 text-primary mt-1 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* PLATFORMS */}
        <section className="mb-20 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-3xl font-bold mb-4">Platforms covered</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Work is scoped around the search experiences your customers
            actually use. This is independent consulting work with no official
            partnership, endorsement or affiliation with any platform listed
            here.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="rounded-lg border bg-background p-4"
              >
                <p className="font-semibold mb-1">{platform.name}</p>
                <p className="text-sm text-muted-foreground">{platform.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section id="geo-process" className="mb-20 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-4">
            How a GEO engagement runs
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Every step has a defined output, so you always know what you are
            receiving and when.
          </p>

          <div className="space-y-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border bg-background p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm font-semibold text-primary mt-1">
                    Step {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-3">{step.body}</p>
                    <p className="text-sm text-foreground bg-accent/50 rounded px-3 py-2">
                      <span className="font-semibold">You receive: </span>
                      {step.output}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MEASUREMENT */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">
            How GEO performance is measured
          </h2>

          <div className="space-y-4 text-muted-foreground max-w-3xl mb-6">
            <p>
              AI-generated results change with the platform, the location, the
              query wording, personalization and how fresh the underlying
              content is. Two people asking the same question can see different
              answers on the same day.
            </p>
            <p>
              Because of that, AI visibility is reported as dated observations
              rather than as a stable ranking position. The signals below are
              tracked together so a single fluctuation is not mistaken for a
              trend.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {trackedSignals.map((signal) => (
              <div key={signal} className="flex items-start gap-2">
                <Target
                  className="h-4 w-4 text-primary mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-muted-foreground">{signal}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6 max-w-3xl">
            Reports include the query, platform, date and observed result, with
            limitations stated alongside the findings.
          </p>
        </section>

        {/* PROOF */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Evidence and experience</h2>

          <div className="space-y-4 text-muted-foreground max-w-3xl mb-8">
            <p>
              Published case studies on this site cover technical SEO audits,
              content restructuring, entity schema work and Core Web Vitals
              improvements. Each one lists the problem, the actions taken, the
              tools used, the observable outcome, the measurement period and the
              limitations.
            </p>
            <p>
              GEO-specific visibility checks are recorded per engagement with
              the platform and date attached. Nothing on this page claims a
              citation, ranking or traffic result that has not been measured.
            </p>
            {/* EVIDENCE SLOT: add dated GEO query-test results, Google Search
                Console screenshots or AI-visibility logs here when available.
                Include problem, actions, tools, outcome, dates and limitations.
                Do not publish unverified numbers, testimonials or client names. */}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <Link
              href="/case-studies/ecommerce-seo-growth"
              className="block rounded-lg border bg-background p-5 hover:border-primary/50 transition-colors"
            >
              <p className="font-semibold mb-1">
                E-commerce SEO growth with AI Overview impressions
              </p>
              <p className="text-sm text-muted-foreground">
                Technical and on-page overhaul, measured 25 Jun to 21 Sep 2026
                with Search Console data.
              </p>
            </Link>
            <Link
              href="/case-studies/technical-seo-ecommerce"
              className="block rounded-lg border bg-background p-5 hover:border-primary/50 transition-colors"
            >
              <p className="font-semibold mb-1">
                Technical SEO audit for an e-commerce site
              </p>
              <p className="text-sm text-muted-foreground">
                Crawlability and Core Web Vitals work with recorded before and
                after figures.
              </p>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/case-studies"
              className="text-primary font-medium hover:underline"
            >
              All case studies
            </Link>
            <Link
              href="/projects"
              className="text-primary font-medium hover:underline"
            >
              Project portfolio
            </Link>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Who this service is for
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {fitFor.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Users
                  className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-amber-500/40 bg-amber-500/5 p-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle
                className="h-5 w-5 text-amber-600 dark:text-amber-400"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold">
                When GEO is not the right first investment
              </h3>
            </div>
            <ul className="space-y-2">
              {notYet.map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span aria-hidden="true" className="text-primary mt-0.5">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              In those cases the better first step is usually a{" "}
              <Link
                href="/seo-audit-nepal"
                className="text-primary font-medium hover:underline"
              >
                technical SEO audit
              </Link>{" "}
              or fixing the fundamentals before investing in AI search work.
            </p>
          </div>
        </section>

        {/* GEO vs SEO vs AEO */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">GEO, SEO and AEO compared</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="rounded-lg border bg-background p-5">
              <div className="flex items-center gap-2 mb-3">
                <Search className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="font-bold">SEO</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Improves visibility in traditional search results through
                crawling, indexing, relevance, content quality and authority.
              </p>
              <Link
                href="/seo-expert-nepal"
                className="inline-block mt-3 text-sm text-primary font-medium hover:underline"
              >
                Work with an SEO expert in Nepal
              </Link>
            </div>

            <div className="rounded-lg border bg-background p-5">
              <div className="flex items-center gap-2 mb-3">
                <Bot className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="font-bold">AEO</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Improves content for direct answers and question-based results,
                so it can be retrieved and presented cleanly.
              </p>
              <Link
                href="/aeo-expert-nepal"
                className="inline-block mt-3 text-sm text-primary font-medium hover:underline"
              >
                Explore AEO services
              </Link>
            </div>

            <div className="rounded-lg border bg-background p-5">
              <div className="flex items-center gap-2 mb-3">
                <Globe2 className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="font-bold">GEO</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Improves how content and entities are retrieved, understood and
                potentially cited in generative responses.
              </p>
              <span className="inline-block mt-3 text-sm text-muted-foreground">
                Current service
              </span>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground max-w-3xl">
            <p>
              These disciplines overlap and should not be treated as completely
              separate systems. GEO leans on technical foundations such as
              crawlability and structured data, so{" "}
              <Link
                href="/technical-seo-expert-nepal"
                className="text-primary font-medium hover:underline"
              >
                technical SEO work
              </Link>{" "}
              often sits underneath a GEO engagement.
            </p>
            <p>
              When a site is healthy technically but unclear about what it
              offers, content and entity work takes priority instead.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Frequently asked questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.question}>
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

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-10 sm:p-12 text-center border border-primary/20 mb-20">
          <ShieldCheck
            className="h-12 w-12 text-primary mx-auto mb-5"
            aria-hidden="true"
          />

          <h2 className="text-3xl font-bold mb-4">
            Find Out Why Your Business Is Missing from AI Search
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Request a GEO audit to identify technical, content, entity and
            authority gaps affecting how your business is understood across
            generative and traditional search.
          </p>

          <Link href="/contact">
            <Button size="lg" className="group">
              Request a GEO Audit
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        {/* RELATED SERVICES */}
        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">Related services</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/aeo-expert-nepal"
              className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors"
            >
              <p className="font-semibold hover:text-primary transition-colors">
                AEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Optimize your content for answer engines and direct answers.
              </p>
            </Link>

            <Link
              href="/seo-expert-nepal"
              className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors"
            >
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Complete SEO strategy for long-term organic growth.
              </p>
            </Link>

            <Link
              href="/technical-seo-expert-nepal"
              className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors"
            >
              <p className="font-semibold hover:text-primary transition-colors">
                Technical SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Improve crawling, indexing, speed, schema and technical health.
              </p>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <Link
              href="/case-studies"
              className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors"
            >
              <p className="font-semibold hover:text-primary transition-colors">
                Case Studies
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Dated engagements with methods, outcomes and limitations.
              </p>
            </Link>

            <Link
              href="/projects"
              className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors"
            >
              <p className="font-semibold hover:text-primary transition-colors">
                Projects
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Documented search and development work across industries.
              </p>
            </Link>

            <Link
              href="/contact"
              className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors"
            >
              <p className="font-semibold hover:text-primary transition-colors">
                Contact
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Send your website URL and objective to start the conversation.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
