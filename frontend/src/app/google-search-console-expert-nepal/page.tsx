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
  FileSearch,
  BarChart3,
  Gauge,
  ShieldCheck,
  Globe2,
  FileText,
  MonitorCheck,
  Zap,
  TrendingUp,
  ListChecks,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Search Console Expert in Nepal | GSC Audit & Optimization",
  description:
    "Hire Rejish Khanal, a Google Search Console expert in Nepal. Get indexing audit, coverage analysis, Core Web Vitals monitoring, manual action recovery, sitemap optimization, and search performance insights.",
  keywords: [
    "Google Search Console expert Nepal",
    "Google Search Console expert in Nepal",
    "Google Search Console specialist Nepal",
    "GSC audit Nepal",
    "Google Search Console services Nepal",
    "indexing audit Nepal",
    "crawl analysis Nepal",
    "Search Console consultant Nepal",
    "Core Web Vitals monitoring Nepal",
    "manual action recovery Nepal",
    "sitemap optimization Nepal",
    "SEO specialist Kathmandu",
    "SEO expert Nepal",
    "Google Search Console Nepal",
    "search performance analyst Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/google-search-console-expert-nepal",
  },
  openGraph: {
    title:
      "Google Search Console Expert in Nepal | Indexing, Core Web Vitals & Coverage Analysis",
    description:
      "Google Search Console services in Nepal for indexing audits, coverage analysis, Core Web Vitals, query performance, manual action recovery, and sitemap optimization.",
    url: "https://rejishkhanal.com.np/google-search-console-expert-nepal",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Search Console Expert in Nepal",
    description:
      "Improve indexing, coverage, crawl efficiency, Core Web Vitals, and search performance with expert Google Search Console analysis.",
  },
};

export default function GoogleSearchConsoleExpertPage() {
  const services = [
    {
      title: "Indexing Analysis & Coverage Report",
      description:
        "Review Google Search Console coverage reports to identify indexed pages, excluded pages, crawl errors, and pages with indexing issues such as crawled currently not indexed, discovered currently not indexed, and duplicate without canonical.",
      icon: Search,
    },
    {
      title: "Query Performance & Keyword Insights",
      description:
        "Analyze search queries, impressions, clicks, CTR, and average position trends. Identify high-opportunity keywords, declining queries, and pages that need content, meta, or technical improvements.",
      icon: BarChart3,
    },
    {
      title: "Core Web Vitals Monitoring",
      description:
        "Track LCP, INP, and CLS data from Search Console's Core Web Vitals report. Identify problematic URLs, device segments, and page experience issues that affect rankings and user experience.",
      icon: Gauge,
    },
    {
      title: "Manual Action Review & Recovery",
      description:
        "Review manual actions against your website for spammy links, unnatural outbound links, thin content, or cloaking. Prepare and submit reconsideration requests with detailed corrective actions.",
      icon: ShieldCheck,
    },
    {
      title: "Sitemap Optimization & Submission",
      description:
        "Audit XML sitemaps for broken, redirected, noindexed, thin, or low-value URLs. Optimize sitemap structure, split large sitemaps, add video or image extensions, and submit to Search Console properly.",
      icon: FileText,
    },
    {
      title: "Crawling Analysis & Crawl Budget Optimization",
      description:
        "Analyze Googlebot crawl stats, crawl rate, crawl requests, response codes, and bandwidth usage. Optimize crawl budget by blocking low-value URLs, fixing redirect chains, and improving server response time.",
      icon: Globe2,
    },
    {
      title: "Page Experience & Mobile Usability Analysis",
      description:
        "Review page experience signals and mobile usability issues from Search Console. Fix tap-target problems, viewport configuration, content sizing, and intrusive interstitials affecting mobile rankings.",
      icon: MonitorCheck,
    },
    {
      title: "Search Performance Analytics & Reporting",
      description:
        "Set up custom performance reports, date comparisons, search appearance filters, country and device segmentation, and regular reporting to track organic search trends and measure SEO progress.",
      icon: TrendingUp,
    },
  ];

  const process = [
    {
      step: 1,
      title: "GSC Setup & Configuration Review",
      description:
        "I verify that Google Search Console is properly set up, property types are correct, verified owners are configured, and all relevant data streams such as domain and URL prefix properties are active and accurate.",
    },
    {
      step: 2,
      title: "Coverage & Indexing Deep Dive",
      description:
        "I analyze coverage reports for indexing errors, warnings, and exclusions. I identify patterns, fix noindex issues, canonical conflicts, blocked resources, and pages stuck in index queues.",
    },
    {
      step: 3,
      title: "Query & Performance Evaluation",
      description:
        "I review search query data to find ranking trends, keyword opportunities, position drops, CTR issues, and pages with declining impressions. I identify what is working and what needs improvement.",
    },
    {
      step: 4,
      title: "Technical & Page Experience Audit",
      description:
        "I examine Core Web Vitals data, mobile usability issues, page experience signals, AMP errors if applicable, and rich result status reports to identify experience-related ranking issues.",
    },
    {
      step: 5,
      title: "Prioritized Optimization Roadmap",
      description:
        "I create a clear action plan based on Search Console data, separating critical indexing fixes, high-impact keyword opportunities, Core Web Vitals improvements, and quick wins for faster results.",
    },
    {
      step: 6,
      title: "Monitoring & Regular Reporting",
      description:
        "I set up regular Search Console monitoring, track changes in coverage, impressions, clicks, Core Web Vitals, and manual actions, and provide monthly or bi-weekly updates on search performance.",
    },
  ];

  const problems = [
    "Your website pages are not indexed by Google",
    "Google Search Console shows Crawled - currently not indexed errors",
    "Your website has a manual action penalty from Google",
    "Core Web Vitals are failing and Search Console shows poor LCP, INP, or CLS data",
    "Your XML sitemap contains errors, broken URLs, or excluded pages",
    "Crawl stats show high 404 rates, redirect chains, or blocked resources",
    "Your search impressions are dropping without obvious reasons",
    "You cannot understand Search Console data or know what to fix first",
    "Mobile usability issues are appearing in Search Console reports",
    "Your canonical tags are creating indexing conflicts",
    "Pages that previously ranked are losing positions in search results",
    "You are not sure if Search Console is configured correctly for your website",
    "Google is not crawling your new or updated pages fast enough",
    "Your rich results are not showing despite implementing structured data",
  ];

  const tools = [
    "Google Search Console",
    "Google Analytics 4",
    "PageSpeed Insights",
    "Lighthouse",
    "Chrome DevTools",
    "Screaming Frog SEO Spider",
    "Ahrefs",
    "Semrush",
    "Rich Results Test",
    "Schema Markup Validator",
    "Google Mobile-Friendly Test",
    "Server log analysis tools",
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
    "Portfolio and blog websites",
  ];

  const faqs = [
    {
      question: "What is Google Search Console and why do I need it?",
      answer:
        "Google Search Console is a free tool from Google that helps you monitor, maintain, and troubleshoot your website's presence in Google Search results. It provides data on indexing status, search queries, crawl stats, Core Web Vitals, mobile usability, manual actions, and sitemap status. Every website owner should have Search Console configured to understand how Google views their website.",
    },
    {
      question: "How do I know if my website is indexed on Google?",
      answer:
        "You can check indexing status in Google Search Console by entering a URL in the URL inspection tool. This shows whether the URL is indexed, when it was last crawled, and whether Google found any issues. The Coverage report also shows all indexed versus excluded pages across your entire website.",
    },
    {
      question: "What does a Google Search Console expert do in Nepal?",
      answer:
        "A Google Search Console expert in Nepal analyzes your Search Console data to identify indexing problems, crawl errors, coverage issues, keyword performance trends, Core Web Vitals problems, manual actions, sitemap errors, and mobile usability issues. Based on this analysis, they create a clear action plan to improve your website's search performance and fix technical SEO issues.",
    },
    {
      question: "How can I fix Crawled - currently not indexed errors?",
      answer:
        "Fixing Crawled - currently not indexed errors involves improving page quality, internal linking, content uniqueness, and ensuring pages have sufficient text content. You can request indexing via the URL inspection tool, but long-term fixes include better site architecture, reducing thin content, and building stronger internal links to affected pages.",
    },
    {
      question: "What is a manual action and how do I recover?",
      answer:
        "A manual action is a penalty applied by Google's webspam team when a website violates Google's guidelines. Common manual actions include unnatural links, thin content, cloaking, and user-generated spam. Recovery involves identifying and fixing the violation, documenting all corrective actions, and submitting a reconsideration request through Google Search Console.",
    },
    {
      question: "How do I optimize my XML sitemap in Search Console?",
      answer:
        "A well-optimized XML sitemap includes only canonical, indexable, high-quality URLs with proper lastmod dates, change frequency, and priority tags. Sitemaps should be under 50MB or 50,000 URLs, organized by content type if large, and free of redirected, broken, noindexed, or blocked URLs. After optimization, submit the sitemap in Search Console and monitor the report for errors.",
    },
    {
      question: "What is crawl budget and why does it matter?",
      answer:
        "Crawl budget refers to the number of URLs Googlebot can and wants to crawl on your website within a given timeframe. If Googlebot wastes crawl budget on low-value URLs, redirect chains, error pages, or duplicate content, your important pages may be crawled less frequently or not at all. Optimizing crawl budget helps Google discover and index your valuable content faster.",
    },
    {
      question: "How can I improve Core Web Vitals using Search Console data?",
      answer:
        "Search Console's Core Web Vitals report shows which URLs have poor, needs improvement, or good LCP, INP, and CLS scores, segmented by mobile and desktop. By analyzing the report, you can identify problematic URL groups, prioritize fixes for high-traffic pages, and track improvement over time after implementing performance changes.",
    },
    {
      question: "Can you help set up and verify Search Console for my website?",
      answer:
        "Yes, I can help set up Google Search Console for your website using DNS TXT record, HTML file upload, Google Analytics, Google Tag Manager, or domain provider verification. I ensure both domain and URL prefix properties are configured correctly for complete data coverage.",
    },
    {
      question: "What is the difference between impressions and clicks in Search Console?",
      answer:
        "Impressions in Search Console count how many times your website appeared in Google Search results, while clicks count how many times users actually clicked on your listing. High impressions with low clicks often indicate poor title tags, meta descriptions, or ranking position. Improving click-through rate can increase organic traffic without changing rankings.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Search Console Expert in Nepal",
    description:
      "Google Search Console services in Nepal for indexing audits, coverage analysis, Core Web Vitals monitoring, query performance, manual action recovery, and sitemap optimization.",
    serviceType: "Google Search Console Consulting",
    url: "https://rejishkhanal.com.np/google-search-console-expert-nepal",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      jobTitle: "Google Search Console Expert in Nepal",
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
      name: "Google Search Console Services",
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
    jobTitle: "Google Search Console Expert in Nepal",
    description:
      "Rejish Khanal is a Google Search Console expert in Nepal helping businesses analyze indexing, coverage, Core Web Vitals, query performance, and crawl data to improve organic search visibility.",
    knowsAbout: [
      "Google Search Console",
      "Indexing",
      "Crawl Analysis",
      "Core Web Vitals",
      "SEO Audits",
      "Sitemap Optimization",
      "Manual Action Recovery",
      "Search Performance Analysis",
      "Technical SEO",
      "Page Experience",
      "Structured Data",
      "XML Sitemaps",
    ],
    sameAs: [
      "https://linkedin.com/in/rejish-khanal",
      "https://github.com/rejish7",
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Google Search Console Expert in Nepal",
    url: "https://rejishkhanal.com.np/google-search-console-expert-nepal",
    description:
      "Google Search Console expert in Nepal for indexing analysis, coverage reports, Core Web Vitals monitoring, and search performance optimization.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "Google Search Console Expert in Nepal",
      "Indexing Analysis",
      "Core Web Vitals Monitoring",
      "Crawl Budget Optimization",
      "Search Performance Analysis",
      "Sitemap Optimization Nepal",
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
        name: "Services",
        item: "https://rejishkhanal.com.np/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Google Search Console Expert in Nepal",
        item: "https://rejishkhanal.com.np/google-search-console-expert-nepal",
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
            Google Search Console Expert in Nepal | Indexing Audit | Core Web
            Vitals | Crawl Analysis
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Google Search Console Expert in Nepal for Indexing, Coverage &
            Search Performance
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, a Google Search Console expert based in
            Kathmandu, Nepal. I help businesses analyze Search Console data, fix
            indexing problems, improve Core Web Vitals, optimize crawl
            efficiency, recover from manual actions, and grow organic traffic
            through data-driven search insights.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            Google Search Console contains all the data you need to understand
            how Google sees your website. The challenge is knowing what to look
            for, what the data means, and what actions will actually improve
            your search performance. That is where expert analysis makes the
            difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get a Search Console Audit
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request a Full SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Google Search Console Services in Nepal for Better Rankings and
            Organic Visibility
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Google Search Console is the most important SEO tool you already
              have access to. It tells you exactly how Google crawls, indexes,
              and evaluates your website. The problem is that most website
              owners either ignore Search Console data or struggle to interpret
              what the reports mean.
            </p>

            <p>
              My Google Search Console services in Nepal focus on extracting
              actionable insights from your Search Console data. I analyze
              indexing coverage, search queries, Core Web Vitals, crawl stats,
              mobile usability, manual actions, and sitemap status to identify
              opportunities and problems affecting your search visibility.
            </p>

            <p>
              Whether your pages are not indexed, your traffic is declining, or
              you simply want to understand what Search Console data means for
              your business, I provide clear analysis and practical
              recommendations based on real data.
            </p>
          </div>
        </section>

        <section className="mb-20 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Me as Your Google Search Console Expert?
          </h2>

          <div className="space-y-4">
            {[
              "I have deep experience reading and interpreting Google Search Console data for different types of websites.",
              "I combine Search Console analysis with technical SEO knowledge to fix root causes, not just symptoms.",
              "I help you understand what each Search Console report means and what actions to take.",
              "I identify indexing and coverage patterns that automated tools and basic checks often miss.",
              "I provide clear prioritization so you know which issues to fix first for maximum impact.",
              "I set up proper tracking, reporting, and monitoring so you can see real SEO progress over time.",
              "I work with businesses in Kathmandu, across Nepal, and international markets.",
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
            Google Search Console Services I Offer
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
            Indexing Analysis & Coverage Report
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              The Coverage report in Google Search Console is where most
              indexing problems appear. It shows which URLs are indexed,
              excluded, or errored, and why. Understanding this report is
              critical for ensuring your important pages are discoverable in
              search results.
            </p>

            <p>
              I analyze the Coverage report to identify patterns in indexing
              errors, warnings, and exclusions. I look for issues such as
              crawled currently not indexed, discovered currently not indexed,
              duplicate without canonical, soft 404 errors, and pages with
              noindex tags. Each error type requires a different approach to
              fix.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Error Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Identify and categorize all indexing errors including server
                  errors, redirect errors, soft 404s, blocked URLs, and
                  accessibility issues preventing Google from indexing pages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exclusion Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Review excluded URLs to confirm noindex tags, canonical
                  conflicts, duplicate pages, and low-value URLs are
                  intentionally or unintentionally blocking important pages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Indexation Fix Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create a prioritized plan to fix indexing errors, improve page
                  quality for URLs stuck in index queues, and submit critical
                  pages for re-crawling through the URL inspection tool.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Common Google Search Console Problems I Fix
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
                Core Web Vitals Monitoring in Nepal
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Google Search Console provides a dedicated Core Web Vitals
                  report that shows how your URLs perform for Largest Contentful
                  Paint, Interaction to Next Paint, and Cumulative Layout Shift.
                  This report is segmented by mobile and desktop, making it easy
                  to identify problematic URL groups.
                </p>

                <p>
                  I monitor Core Web Vitals data from Search Console to track
                  performance trends, identify URLs that need improvement,
                  measure the impact of optimization efforts, and ensure your
                  website meets Google&apos;s page experience criteria for
                  better rankings and user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My GSC Analysis Process
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
            Tools I Use for Search Console Analysis
          </h2>

          <p className="text-lg text-muted-foreground mb-6">
            Search Console is the primary tool, but I combine it with other
            analytics, auditing, and performance tools for a complete picture of
            your search health.
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
            Every platform generates different Search Console signals. I
            understand how each CMS and framework interacts with Google
            indexing, crawling, and search performance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((platform) => (
              <div
                key={platform}
                className="p-4 rounded-lg border bg-background"
              >
                <p className="font-medium">{platform}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 rounded-lg border bg-background">
          <div className="flex items-start gap-4">
            <ListChecks className="h-8 w-8 text-primary flex-shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Search Console Data Drives Better SEO Decisions
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Search Console is not just a monitoring tool. It is a
                  decision-making tool that tells you exactly what Google thinks
                  about your website. The data in Search Console can guide your
                  content strategy, technical fixes, keyword targeting, and page
                  experience improvements.
                </p>

                <p>
                  When you understand what Search Console data means, you stop
                  guessing about SEO and start making informed decisions based
                  on real search engine signals. This approach leads to more
                  predictable and sustainable organic growth.
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
          <Zap className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Ready to Unlock Your Search Console Data?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a professional Google Search Console audit and discover what
            your data says about indexing, coverage, Core Web Vitals, crawl
            health, and search performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Book a Search Console Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Get a Full SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">
            Related SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/seo-expert-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Full-service SEO consulting for rankings, traffic, and organic
                growth.
              </p>
            </Link>

            <Link href="/technical-seo-specialist-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                Technical SEO Specialist in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Fix crawlability, indexing, Core Web Vitals, and site
                architecture issues.
              </p>
            </Link>

            <Link href="/seo-audit-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Audit Services in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Get a comprehensive technical, content, and performance SEO
                audit.
              </p>
            </Link>

            <Link href="/seo-specialist-kathmandu" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Specialist in Kathmandu
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Local SEO expertise for businesses in Kathmandu valley.
              </p>
            </Link>

            <Link href="/core-web-vitals-optimization" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                Core Web Vitals Optimization
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Improve LCP, INP, and CLS for better rankings and user
                experience.
              </p>
            </Link>

            <Link href="/aeo-expert-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                AEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Optimize for AI Overviews and answer engine visibility.
              </p>
            </Link>

            <Link href="/geo-expert-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                GEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Generative engine optimization for AI-driven search platforms.
              </p>
            </Link>

            <Link href="/wordpress-seo-expert-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                WordPress SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                WordPress-specific SEO optimization, speed, and structured data.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}