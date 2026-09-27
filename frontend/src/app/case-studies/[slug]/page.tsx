import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { notFound } from "next/navigation";

interface Metric {
  label: string;
  value: string;
  hint?: string;
}

interface Screenshot {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

interface ApproachStep {
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  description: string;
  eyebrow: string;
  industry?: string;
  timeline?: string;
  overview: string;
  challenge: string;
  challengePoints?: string[];
  solution: string;
  approach?: ApproachStep[];
  implementation?: string[];
  results: string;
  resultsQuote?: string;
  aiVisibility?: { title: string; text: string };
  heroImage?: Screenshot;
  secondaryImage?: Screenshot;
  dataNote?: string;
  metrics: Metric[];
  technologies: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  "technical-seo-ecommerce": {
    title: "Technical SEO Audit - E-Commerce Site",
    description: "Improved crawlability and Core Web Vitals leading to 45% traffic increase",
    eyebrow: "E-Commerce · Technical SEO",
    overview:
      "An e-commerce website was struggling with poor search visibility, slow page loads, and indexing issues. A comprehensive technical SEO audit and implementation plan was needed to unlock organic growth.",
    challenge:
      "The site had significant crawlability issues including broken canonical tags, oversized JavaScript bundles blocking rendering, unoptimized product images, and a disorganized XML sitemap. Core Web Vitals scores were poor across all metrics, directly impacting search rankings.",
    solution:
      "Implemented a full technical SEO overhaul: fixed canonical tags, optimized JavaScript code splitting, compressed and lazy-loaded images, restructured the XML sitemap to prioritize product pages, improved server response times, and added structured data (Product schema) to all product pages.",
    results:
      "Within three months, organic traffic increased by 45%, LCP dropped from 5.2s to 1.9s, and 28 new keywords reached the first page of Google. Bounce rate decreased by 18% and conversion rate improved significantly.",
    metrics: [
      { label: "Traffic Increase", value: "45%" },
      { label: "Ranking Improvement", value: "+28 keywords" },
      { label: "LCP Improvement", value: "5.2s → 1.9s" },
    ],
    technologies: [
      "Core Web Vitals",
      "Schema Markup",
      "XML Sitemap",
      "JavaScript SEO",
      "Image Optimization",
    ],
  },
  "core-web-vitals-saas": {
    title: "Core Web Vitals Optimization",
    description: "Optimized page speed resulting in better rankings and 32% higher conversions",
    eyebrow: "SaaS · Performance",
    overview:
      "A SaaS platform needed to improve Core Web Vitals scores to maintain and improve search rankings after a Google algorithm update focused on page experience.",
    challenge:
      "LCP was consistently above 4 seconds, CLS scores were high due to dynamic content loading, and INP was sluggish on mobile devices. These issues were directly affecting search rankings and user retention.",
    solution:
      "Optimized server-side rendering, implemented image preloading, reduced CSS and JavaScript payload, added font-display: swap for web fonts, implemented content-visibility for below-the-fold content, and optimized the server response pipeline.",
    results:
      "LCP improved to 1.8s, CLS dropped to 0.05, and INP fell below 200ms. Organic rankings improved for key terms, conversions increased by 32%, and bounce rate decreased by 15%.",
    metrics: [
      { label: "LCP", value: "1.8s" },
      { label: "Conversion Increase", value: "+32%" },
      { label: "Bounce Rate", value: "-15%" },
    ],
    technologies: [
      "Core Web Vitals",
      "Server-Side Rendering",
      "Performance Optimization",
      "Image Optimization",
      "CSS Optimization",
    ],
  },
  "local-seo-restaurant": {
    title: "Local SEO Setup - Kathmandu Restaurant",
    description: "Google Business Profile optimization and local citations for visibility",
    eyebrow: "Hospitality · Local SEO",
    overview:
      "A restaurant in Kathmandu wanted to improve its visibility in local search results, Google Maps, and voice search queries for food-related searches.",
    challenge:
      "The restaurant had an unclaimed Google Business Profile, inconsistent NAP (Name, Address, Phone) citations across directories, no local landing pages, and limited online reviews. Local search visibility was nearly nonexistent.",
    solution:
      "Claimed and fully optimized the Google Business Profile with photos, categories, and posts. Fixed NAP consistency across 15+ directories. Created location-specific landing pages targeting Kathmandu food searches. Implemented LocalBusiness schema markup and set up a review generation strategy.",
    results:
      "Google Maps views increased by 156%, website clicks from Maps grew by 89%, and phone calls from search increased by 120%. The restaurant now appears in the top 3 of local map pack for relevant searches.",
    metrics: [
      { label: "Google Maps Views", value: "+156%" },
      { label: "Website Clicks", value: "+89%" },
      { label: "Phone Calls", value: "+120%" },
    ],
    technologies: [
      "Local SEO",
      "Google Business Profile",
      "Schema Markup",
      "Local Citations",
      "Review Management",
    ],
  },
  "ecommerce-seo-growth": {
    title: "E-Commerce SEO Case Study: 46.6K Impressions and 12.2% CTR in 90 Days",
    description:
      "E-commerce SEO case study: a technical and on-page overhaul took this online store to 5.71K clicks, 46.6K impressions, a 12.2% CTR, an average position of 5.8 and 2.03K AI Overview impressions — verified in Google Search Console.",
    eyebrow: "E-Commerce · Technical SEO & Content",
    industry: "E-Commerce / D2C Online Store",
    timeline: "25 Jun – 21 Sep 2026",
    heroImage: {
      src: "/case-studies/ecommerce-gsc-performance.png",
      alt: "Google Search Console performance report for the e-commerce store showing 5.71K total clicks, 46.6K total impressions, a 12.2% average CTR and an average position of 5.8 between 25 June and 21 September 2026",
      caption:
        "Google Search Console performance — 25 Jun 2026 to 21 Sep 2026 · clicks, impressions, CTR and average position",
      width: 2062,
      height: 1106,
    },
    overview:
      "A consumer e-commerce store with a large, fast-growing catalogue was publishing more products every week but search visibility was flat. Crawl budget was being burned on parameter and facet URLs, category pages cannibalised each other, and the product template was too heavy for mobile. Over a 90-day engagement we rebuilt the technical foundation, restructured the category and product pages around real search demand, and instrumented everything in Google Search Console so every change could be measured.",
    challenge:
      "The store was losing impressions to itself. Faceted navigation and URL parameters created thousands of near-duplicate pages, the same head term was targeted by several categories at once, and new products were discovered but not indexed. On top of that, the product template shipped render-blocking JavaScript and uncompressed imagery, so Core Web Vitals failed on mobile — the exact device where most of the store's demand lives.",
    challengePoints: [
      "Thousands of parameterised and faceted URLs duplicating category content and splitting crawl budget.",
      "Category and product pages competing for the same head terms (keyword cannibalisation).",
      "New SKUs stuck in “Discovered – currently not indexed” for weeks after launch.",
      "Mobile LCP well above 4s on category and product templates.",
      "No Product, Offer or Review structured data — listings without rich results.",
      "Guides and blog posts published with no internal links to revenue pages.",
    ],
    solution:
      "We treated the store as a system rather than a checklist. First we mapped crawl behaviour and consolidated duplicate clusters behind canonical rules and robots directives, then rebuilt the XML sitemap around indexable templates only. Second we fixed the front end: code-splitting, preloaded hero images, AVIF/WebP conversion and deferred third-party scripts brought the templates back inside Core Web Vitals thresholds. Third we rewrote the on-page layer — one primary query per URL, unique intros for the top 40 categories, and Product, Offer, AggregateRating and BreadcrumbList JSON-LD across the catalogue. Finally we built a hub-and-spoke internal linking model so guides fed categories and categories fed bestsellers.",
    approach: [
      {
        title: "Crawl & Duplicate Analysis",
        description:
          "Analysed crawl paths and index coverage to isolate parameter, facet and sort URLs, then quantified exactly how much crawl budget and link equity they were absorbing.",
      },
      {
        title: "Technical Remediation",
        description:
          "Canonical and robots rules for facets, a cleaned XML sitemap split by template, code-splitting, image compression with AVIF and lazy loading, and faster server responses.",
      },
      {
        title: "On-Page & Structured Data",
        description:
          "One primary query per URL, rewritten titles and meta descriptions, unique category copy, FAQ content and Product, Offer and AggregateRating schema on every listing.",
      },
      {
        title: "Measurement & Iteration",
        description:
          "Weekly Google Search Console reviews segmented by page type, query group and device, plus Core Web Vitals field data monitoring to protect every gain.",
      },
    ],
    implementation: [
      "Canonical tags and robots rules covering parameter, facet and sort URLs",
      "XML sitemap split by template with non-indexable URLs pruned out",
      "Product, Offer, AggregateRating and BreadcrumbList JSON-LD across the catalogue",
      "Mobile LCP work: preloaded heroes, AVIF/WebP, deferred non-critical JavaScript",
      "Unique intro copy and heading hierarchy on the top 40 category pages",
      "Internal-linking hubs connecting guides → categories → bestsellers",
      "Cannibalisation resolved so each URL owns exactly one primary query",
      "Weekly GSC reporting cadence by page type, query group and device",
    ],
    results:
      "Between 25 June and 21 September 2026 the store recorded 5.71K clicks from 46.6K impressions, a 12.2% average click-through rate and a site-wide average position of 5.8. Index coverage stabilised — new products are now indexed within days instead of weeks — and the category pages that had been cannibalising each other each own a clear query. CTR at 12.2% is the signal that titles and descriptions now match intent, while position 5.8 keeps the store inside the first screen for its priority terms.",
    resultsQuote:
      "5.71K clicks · 46.6K impressions · 12.2% CTR · average position 5.8 — verified in Google Search Console.",
    aiVisibility: {
      title: "Visibility in Google's AI Overviews",
      text: "Beyond classic blue links, the store earned 2.03K impressions in Google's generative AI features during the same window. Clear entity signals, structured product data and answer-ready category content mean the catalogue is being surfaced in AI answers as well as organic results — an increasingly important share of discovery for e-commerce queries.",
    },
    secondaryImage: {
      src: "/case-studies/ecommerce-gsc-ai-overview.png",
      alt: "Google Search Console report showing 2.03K total impressions in Google generative AI features for the e-commerce store between 25 June and 23 September 2026",
      caption:
        "Google Search Console — generative AI features · 2.03K impressions, 25 Jun to 23 Sep 2026",
      width: 2096,
      height: 832,
    },
    dataNote:
      "Source: Google Search Console, Performance report, 25 Jun 2026 – 21 Sep 2026 (all devices). AI Overview figures cover 25 Jun – 23 Sep 2026.",
    metrics: [
      { label: "Total Clicks", value: "5.71K", hint: "25 Jun – 21 Sep 2026" },
      { label: "Total Impressions", value: "46.6K", hint: "25 Jun – 21 Sep 2026" },
      { label: "Average CTR", value: "12.2%", hint: "Across all queries" },
      { label: "Average Position", value: "5.8", hint: "Site-wide" },
    ],
    technologies: [
      "Technical SEO",
      "Crawl Budget Optimization",
      "Core Web Vitals",
      "Product & Offer Schema",
      "Category Page SEO",
      "Internal Linking",
      "Google Search Console",
      "AI Overview Optimization",
    ],
  },
  "service-business-seo": {
    title: "Service Business SEO Case Study: 26.7K Impressions and 1.2K Clicks in 90 Days",
    description:
      "Service business SEO case study: restructuring service pages, entity schema and topic clusters produced 1.2K clicks, 26.7K impressions, a 4.5% CTR and an average position of 20.6 — verified in Google Search Console.",
    eyebrow: "Service Business · SEO & Content",
    industry: "Service-Oriented Business (Professional Services)",
    timeline: "25 Jun – 21 Sep 2026",
    heroImage: {
      src: "/case-studies/service-gsc-performance.png",
      alt: "Google Search Console performance report for the service business showing 1.2K total clicks, 26.7K total impressions, a 4.5% average CTR and an average position of 20.6 between 25 June and 21 September 2026",
      caption:
        "Google Search Console performance — 25 Jun 2026 to 21 Sep 2026 · clicks, impressions, CTR and average position",
      width: 2052,
      height: 1110,
    },
    overview:
      "A service business relying on referrals wanted a predictable inbound channel. Its website ranked for a handful of brand terms and nothing else: service pages were thin and interchangeable, blog posts were published without a structure, and Google had no clear entity to associate with the business. Over 90 days we rebuilt the site's information architecture around the way clients actually search, gave every service a dedicated optimised page, and used topic clusters and schema to make the offering explicit to search engines.",
    challenge:
      "One page was trying to serve five different services, so it could not rank well for any of them. Location and entity signals were missing, structured data was absent, and the blog operated as a silo with no links to the pages that generate enquiries. Most queries sat between positions 11 and 20 — visible, but rarely clicked — and the site's average CTR suffered as a result.",
    challengePoints: [
      "Multiple services targeted by a single generic page, splitting relevance.",
      "No Service or LocalBusiness schema — no rich results or clear entity signals.",
      "Blog content published in silos with zero internal links to enquiry pages.",
      "Most non-brand queries sitting on page two (positions 11–20).",
      "Template-heavy pages with poor mobile Core Web Vitals.",
      "Inconsistent business details across the site and third-party directories.",
    ],
    solution:
      "We split the offering into one dedicated, fully optimised page per service, each with its own search-intent-led copy, FAQ section and Service schema. A hub page and topic cluster structure then connected informational articles to those money pages, so every post passed internal-link equity where it converts. Entity signals were tightened — consistent business details, Organization and LocalBusiness markup, and a clear heading hierarchy — while the template was slimmed down to fix mobile performance.",
    approach: [
      {
        title: "Intent & Gap Audit",
        description:
          "Mapped every service against real search demand, identified which queries belonged on which page, and found the gaps competitors were already winning.",
      },
      {
        title: "Information Architecture",
        description:
          "Rebuilt the navigation and URL structure: one page per service, a supporting hub, and a cluster model that connects articles to enquiry pages.",
      },
      {
        title: "Service Pages & Entity Schema",
        description:
          "Wrote intent-led copy for each service, added FAQs and Service, FAQPage and LocalBusiness JSON-LD, and normalised business details sitewide.",
      },
      {
        title: "Content Clusters & Measurement",
        description:
          "Published supporting articles targeting problem-aware queries, internally linked them to service pages, and tracked position movement weekly in GSC.",
      },
    ],
    implementation: [
      "One dedicated, fully optimised landing page per service",
      "Service, FAQPage and LocalBusiness structured data sitewide",
      "Topic cluster hub with internal links from articles to service pages",
      "Unique title tags and meta descriptions aligned to search intent",
      "Consistent business details (NAP) across site and directories",
      "Mobile performance fixes: deferred scripts, compressed assets, tighter template",
      "Clear H1/H2 hierarchy and semantic HTML on every service page",
      "Weekly GSC tracking of queries, average position and CTR by page group",
    ],
    results:
      "Between 25 June and 21 September 2026 the site earned 1.2K clicks from 26.7K impressions at a 4.5% average CTR, holding an average position of 20.6 across a broad query set that includes a large share of early-stage informational searches. The commercial pages now carry unique titles, schema and internal-link equity, and the mid-tail queries previously parked on page two have a clear route to page one. Impressions are the leading indicator here: the site is being surfaced for far more relevant queries than before, and clicks follow as those positions firm up.",
    resultsQuote:
      "1.2K clicks · 26.7K impressions · 4.5% CTR · average position 20.6 — verified in Google Search Console.",
    dataNote:
      "Source: Google Search Console, Performance report, 25 Jun 2026 – 21 Sep 2026 (all devices).",
    metrics: [
      { label: "Total Clicks", value: "1.2K", hint: "25 Jun – 21 Sep 2026" },
      { label: "Total Impressions", value: "26.7K", hint: "25 Jun – 21 Sep 2026" },
      { label: "Average CTR", value: "4.5%", hint: "Across all queries" },
      { label: "Average Position", value: "20.6", hint: "Site-wide" },
    ],
    technologies: [
      "Service Page SEO",
      "Topic Clusters",
      "Schema Markup",
      "Entity & NAP Consistency",
      "Internal Linking",
      "Content Strategy",
      "Core Web Vitals",
      "Google Search Console",
    ],
  },
};

function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

const baseUrl = "https://rejishkhanal.com.np";

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study Not Found" };

  const url = `${baseUrl}/case-studies/${slug}`;
  const ogImage = study.heroImage;

  return {
    title: { absolute: `${study.title} | Rejish Khanal Case Study` },
    description: study.description,
    keywords: [
      study.eyebrow,
      ...study.technologies,
      "SEO case study",
      `${study.industry ?? "SEO"} case study`,
      "Google Search Console results",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${study.title} | Rejish Khanal Case Study`,
      description: study.description,
      url,
      siteName: "Rejish Khanal",
      type: "article",
      ...(ogImage
        ? {
            images: [
              {
                url: `${baseUrl}${ogImage.src}`,
                width: ogImage.width,
                height: ogImage.height,
                alt: ogImage.alt,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Rejish Khanal Case Study`,
      description: study.description,
      ...(ogImage ? { images: [`${baseUrl}${ogImage.src}`] } : {}),
    },
  };
}

function SectionHeading({
  index,
  title,
  id,
}: {
  index: string;
  title: string;
  id: string;
}) {
  return (
    <div className="mb-5">
      <span className="block text-xs font-semibold uppercase tracking-wider text-primary font-mono mb-2">
        {index}
      </span>
      <h2 id={id} className="text-2xl sm:text-3xl font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
}

function Screenshot({ shot, priority = false }: { shot: Screenshot; priority?: boolean }) {
  return (
    <figure className="rounded-2xl border border-border bg-card p-3 shadow-sm">
      <div className="relative overflow-hidden rounded-xl bg-muted">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="w-full h-auto"
        />
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-2 px-2 pt-3 pb-1 text-xs text-muted-foreground font-mono">
        <span>{shot.caption}</span>
        <span className="text-primary font-semibold">Verified data</span>
      </figcaption>
    </figure>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const metricCols =
    study.metrics.length >= 4
      ? "grid-cols-2 md:grid-cols-4"
      : "grid-cols-2 md:grid-cols-3";

  // Section numbering: 01 Overview, 02 Challenge, 03 Solution are fixed,
  // everything after depends on which optional sections this study has.
  const pad = (n: number) => String(n).padStart(2, "0");
  const resultsNumber =
    4 + (study.approach ? 1 : 0) + (study.implementation ? 1 : 0);
  const aiNumber = resultsNumber + 1;
  const scopeNumber = resultsNumber + (study.aiVisibility ? 1 : 0) + 1;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    image: study.heroImage ? `${baseUrl}${study.heroImage.src}` : undefined,
    datePublished: "2026-09-27",
    dateModified: "2026-09-27",
    inLanguage: "en",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/case-studies/${slug}`,
    },
    keywords: study.technologies.join(", "),
    author: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Rejish Khanal",
      jobTitle: "Technical SEO Expert",
      url: baseUrl,
    },
    publisher: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Rejish Khanal",
    },
    about: study.industry ?? "Search Engine Optimization",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/case-studies" },
            { label: study.industry ?? study.title },
          ]}
        />

        {/* Header */}
        <header className="mt-6 mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold font-mono uppercase tracking-wider">
              Case Study
            </span>
            <span className="px-3 py-1 rounded-full bg-accent text-xs font-semibold text-foreground border border-border">
              {study.eyebrow}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-5">
            {study.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {study.description}
          </p>

          {(study.industry || study.timeline) && (
            <dl className="flex flex-wrap gap-x-10 gap-y-3 mt-7 text-sm">
              {study.industry && (
                <div>
                  <dt className="text-muted-foreground uppercase tracking-wider text-[11px] font-semibold font-mono">
                    Industry
                  </dt>
                  <dd className="font-semibold mt-0.5">{study.industry}</dd>
                </div>
              )}
              {study.timeline && (
                <div>
                  <dt className="text-muted-foreground uppercase tracking-wider text-[11px] font-semibold font-mono">
                    Engagement
                  </dt>
                  <dd className="font-semibold mt-0.5">{study.timeline}</dd>
                </div>
              )}
            </dl>
          )}
        </header>

        {/* Metrics */}
        <section aria-label="Key results" className="mb-10">
          <div className={`grid ${metricCols} gap-4`}>
            {study.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-card rounded-2xl border border-border shadow-sm text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold">{metric.label}</div>
                {metric.hint && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {metric.hint}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Hero proof screenshot */}
        {study.heroImage && (
          <div className="mb-14">
            <Screenshot shot={study.heroImage} priority />
          </div>
        )}

        {/* Overview */}
        <section className="mb-12" aria-labelledby="overview">
          <SectionHeading index="01 — Overview" title="Project Overview" id="overview" />
          <p className="text-muted-foreground leading-relaxed text-[17px]">
            {study.overview}
          </p>
        </section>

        {/* Challenge */}
        <section className="mb-12" aria-labelledby="challenge">
          <SectionHeading index="02 — Challenge" title="The Challenge" id="challenge" />
          <p className="text-muted-foreground leading-relaxed text-[17px] mb-6">
            {study.challenge}
          </p>
          {study.challengePoints && (
            <ul className="grid sm:grid-cols-2 gap-3">
              {study.challengePoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 p-4 rounded-xl bg-accent/40 border border-border text-sm leading-relaxed"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Solution */}
        <section className="mb-12" aria-labelledby="solution">
          <SectionHeading index="03 — Solution" title="The Solution" id="solution" />
          <p className="text-muted-foreground leading-relaxed text-[17px]">
            {study.solution}
          </p>
        </section>

        {/* Approach */}
        {study.approach && (
          <section className="mb-12" aria-labelledby="approach">
            <SectionHeading
              index="04 — Approach"
              title="How the Work Was Executed"
              id="approach"
            />
            <ol className="grid sm:grid-cols-2 gap-4">
              {study.approach.map((step, idx) => (
                <li
                  key={step.title}
                  className="p-5 rounded-2xl bg-card border border-border shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-primary">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Implementation checklist */}
        {study.implementation && (
          <section className="mb-12" aria-labelledby="implementation">
            <SectionHeading
              index="05 — Implementation"
              title="What Was Implemented"
              id="implementation"
            />
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {study.implementation.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 mt-0.5 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Results */}
        <section className="mb-12" aria-labelledby="results">
          <SectionHeading
            index={`${pad(resultsNumber)} — Results`}
            title="The Results"
            id="results"
          />
          <p className="text-muted-foreground leading-relaxed text-[17px] mb-6">
            {study.results}
          </p>
          {study.resultsQuote && (
            <blockquote className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <Quote
                className="h-6 w-6 shrink-0 text-primary"
                aria-hidden="true"
              />
              <p className="text-base sm:text-lg font-semibold leading-snug">
                {study.resultsQuote}
              </p>
            </blockquote>
          )}
        </section>

        {/* AI visibility (proof screenshot) */}
        {study.aiVisibility && study.secondaryImage && (
          <section className="mb-12" aria-labelledby="ai-visibility">
            <SectionHeading
              index={`${pad(aiNumber)} — AI Visibility`}
              title={study.aiVisibility.title}
              id="ai-visibility"
            />
            <p className="text-muted-foreground leading-relaxed text-[17px] mb-6">
              {study.aiVisibility.text}
            </p>
            <Screenshot shot={study.secondaryImage} />
          </section>
        )}

        {/* Data note */}
        {study.dataNote && (
          <p className="text-xs text-muted-foreground font-mono border-l-2 border-border pl-4 mb-12">
            {study.dataNote}
          </p>
        )}

        {/* Technologies */}
        <section className="mb-12" aria-labelledby="technologies">
          <SectionHeading
            index={`${pad(scopeNumber)} — Scope`}
            title="Skills & Tools Applied"
            id="technologies"
          />
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium bg-accent text-foreground rounded-lg border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Want numbers like these for your site?
          </h2>
          <p className="text-muted-foreground mb-7 max-w-2xl mx-auto">
            Send me your URL and I&apos;ll review your technical SEO, Core Web
            Vitals and search visibility — with a prioritised action list.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/free-seo-review">
              <Button size="lg" className="group w-full sm:w-auto">
                Get a Free SEO Review
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Discuss a Project
              </Button>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t border-border">
          <Link href="/case-studies">
            <Button variant="outline" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              All Case Studies
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="group">
              Get Similar Results
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
