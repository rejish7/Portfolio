import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Search,
  Code2,
  Gauge,
  Brain,
  Globe2,
  MapPin,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import ServicesCrawlTechnical from "@/components/sections/ServicesCrawlTechnical";
import ServicesAEOGEO from "@/components/sections/ServicesAEOGEO";
import ServicesArchitecture from "@/components/sections/ServicesArchitecture";
import ServicesEngineering from "@/components/sections/ServicesEngineering";
import ServicesEngagementModels from "@/components/sections/ServicesEngagementModels";
import ServicesCaseStudies from "@/components/sections/ServicesCaseStudies";
import { ServicesCTA } from "@/components/sections/ServicesCTA";

export const metadata: Metadata = {
  title: "Technical SEO Services in Nepal | AEO, GEO & Web Development | Rejish Khanal",
  description:
    "Technical SEO, AEO, GEO, Core Web Vitals, JavaScript SEO, and SEO-friendly web development services by Rejish Khanal in Kathmandu, Nepal. Direct implementation, not just reports.",
  keywords: [
    "technical SEO services Nepal",
    "SEO services in Nepal",
    "AEO expert Nepal",
    "GEO expert Nepal",
    "Core Web Vitals optimization Nepal",
    "JavaScript SEO Nepal",
    "SEO audit Nepal",
    "Next.js SEO services",
    "Django developer Nepal",
    "Laravel developer Nepal",
    "WordPress SEO Nepal",
    "local SEO services Nepal",
    "SEO expert Kathmandu",
    "technical SEO expert Nepal",
    "SEO-friendly web development",
    "schema markup implementation Nepal",
    "crawlability optimization Nepal",
    "indexation management Nepal",
    "AI search optimization Nepal",
    "ChatGPT Search optimization",
    "Perplexity SEO",
    "Google AI Overviews optimization",
    "hire SEO expert Nepal",
    "site migration SEO",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/services",
  },
  openGraph: {
    title: "Technical SEO Services in Nepal | AEO, GEO & Web Development | Rejish Khanal",
    description:
      "Technical SEO, AEO, GEO, Core Web Vitals, JavaScript SEO, and SEO-friendly web development services by Rejish Khanal in Kathmandu, Nepal.",
    url: "https://rejishkhanal.com.np/services",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO Services in Nepal | Rejish Khanal",
    description:
      "Technical SEO, AEO, GEO, Core Web Vitals, JavaScript SEO, and SEO-friendly web development services by Rejish Khanal.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technical SEO & Engineering Services in Nepal",
  description:
    "Technical SEO, AEO, GEO, Core Web Vitals, JavaScript SEO, and SEO-friendly web development services by Rejish Khanal in Kathmandu, Nepal. Direct implementation, not just reports.",
  serviceType: [
    "Technical SEO Audit",
    "Core Web Vitals Optimization",
    "JavaScript SEO",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "Schema Markup Implementation",
    "SEO-Friendly Web Development",
    "Next.js Development",
    "Django Development",
    "Laravel Development",
    "WordPress SEO",
    "Local SEO",
    "Site Migration",
  ],
  url: "https://rejishkhanal.com.np/services",
  provider: {
    "@type": "Person",
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
    jobTitle: "Technical SEO Expert in Nepal & Full-Stack Developer",
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
    name: "Technical SEO & Web Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO Audit & Codebase Review", description: "Deep-dive algorithmic & structural analysis covering canonical chains, crawl budget, JS rendering, and server log analysis.", url: "https://rejishkhanal.com.np/services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "JavaScript & Headless Framework Diagnostics", description: "Specialized for Next.js, React, Nuxt, and Vue. Resolves rendering timeouts, hydration mismatches, and edge rendering flaws.", url: "https://rejishkhanal.com.np/services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Core Web Vitals & Real-User Performance", description: "Targeted code refactoring to pass Google's 75th-percentile CrUX metrics for LCP, INP, and CLS.", url: "https://rejishkhanal.com.np/services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entity Clarity & Generative Engine Optimization (GEO)", description: "Structure content hierarchy so LLMs can extract crisp declarative answers and verified entity definitions.", url: "https://rejishkhanal.com.np/services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Advanced Schema Architecture", description: "Handcraft interconnected JSON-LD schema graphs connecting Organization, founder entities, products, and authors.", url: "https://rejishkhanal.com.np/services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Information Architecture & Topic Clustering", description: "Eliminate keyword cannibalization and ensure high-margin conversion pages inherit authority through topic taxonomy.", url: "https://rejishkhanal.com.np/services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Region Global SEO", description: "Clean hreflang headers, localized landing structures, and multi-market search localization.", url: "https://rejishkhanal.com.np/services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Next.js & React Engineering", description: "Full-scale Next.js App Router applications built for search with automatic static optimization and edge middleware.", url: "https://rejishkhanal.com.np/services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "WordPress Technical Re-Engineering", description: "Strip bloated plugins, custom lightweight themes, database caching, and modern media delivery.", url: "https://rejishkhanal.com.np/services" } },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://rejishkhanal.com.np/#person",
  name: "Rejish Khanal",
  url: "https://rejishkhanal.com.np",
  jobTitle: "Technical SEO Expert in Nepal & Full-Stack Developer",
  description:
    "Rejish Khanal is a technical SEO expert and full-stack developer in Kathmandu, Nepal. He provides direct implementation for technical SEO, AEO, GEO, Core Web Vitals, JavaScript SEO, and SEO-friendly web development.",
  knowsAbout: [
    "Technical SEO",
    "AEO",
    "GEO",
    "Core Web Vitals",
    "JavaScript SEO",
    "Schema Markup",
    "Next.js SEO",
    "Django Development",
    "Laravel Development",
    "WordPress SEO",
    "Local SEO",
    "Site Migration SEO",
  ],
  sameAs: [
    "https://github.com/rejish7",
    "https://x.com/KhanalRejish",
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Technical SEO Services in Nepal | AEO, GEO & Web Development",
  url: "https://rejishkhanal.com.np/services",
  description:
    "Technical SEO, AEO, GEO, Core Web Vitals, JavaScript SEO, and SEO-friendly web development services by Rejish Khanal in Kathmandu, Nepal.",
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
  },
  about: [
    "Technical SEO Services Nepal",
    "AEO Expert Nepal",
    "GEO Expert Nepal",
    "Core Web Vitals Optimization",
    "JavaScript SEO",
    "Schema Markup Implementation",
    "SEO-Friendly Web Development",
    "Next.js SEO Services",
    "Django Developer Nepal",
    "Laravel Developer Nepal",
    "WordPress SEO Nepal",
    "Local SEO Services Nepal",
    "Site Migration SEO",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rejishkhanal.com.np" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://rejishkhanal.com.np/services" },
  ],
};

const faqs = [
  {
    question: "What services does Rejish Khanal provide?",
    answer:
      "Rejish Khanal provides technical SEO audits, Core Web Vitals optimization, JavaScript SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), schema markup implementation, SEO-friendly web development, local SEO, and site migration services. All services include direct implementation, not just reports.",
  },
  {
    question: "What makes Rejish Khanal different from other SEO providers in Nepal?",
    answer:
      "Rejish Khanal combines technical SEO expertise with full-stack development skills. Instead of providing reports and recommendations, he implements fixes directly in the codebase. He works with Next.js, Django, Laravel, WordPress, and custom-coded websites, delivering tested production-grade changes.",
  },
  {
    question: "Does Rejish Khanal work with international clients?",
    answer:
      "Yes. Rejish Khanal is based in Kathmandu, Nepal and works with clients in the United States, United Kingdom, Australia, and other international markets. All services are delivered remotely with direct communication and implementation.",
  },
  {
    question: "What is AEO and GEO?",
    answer:
      "AEO (Answer Engine Optimization) is optimizing content for AI-powered search engines like ChatGPT Search, Perplexity, and Google AI Overviews. GEO (Generative Engine Optimization) structures content so large language models can extract and cite factual information. Both focus on making your website visible in AI-driven search results.",
  },
  {
    question: "How do I get started with Rejish Khanal's services?",
    answer:
      "You can contact Rejish Khanal through the contact page to discuss your project. He will review your website, identify the specific issues, and recommend the right service or engagement model for your needs.",
  },
];

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

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServicesHero />
      <ServicesGrid />
      <ServicesCrawlTechnical />
      <ServicesAEOGEO />
      <ServicesArchitecture />
      <ServicesEngineering />

      {/* About Section */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                  About Rejish Khanal
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Technical SEO Expert &amp; Full-Stack Developer in Nepal
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Rejish Khanal is a technical SEO expert and full-stack
                  developer based in Kathmandu, Nepal. He specializes in
                  combining SEO strategy with hands-on development to fix
                  crawlability, indexing, Core Web Vitals, and search visibility
                  issues.
                </p>
                <p>
                  Unlike traditional SEO consultants who provide reports, Rejish
                  implements fixes directly in the codebase. He works with
                  Next.js, Django, Laravel, WordPress, and custom-coded
                  websites, delivering production-grade Pull Requests that
                  resolve technical SEO barriers.
                </p>
                <p>
                  His services cover technical SEO audits, AEO and GEO
                  optimization, schema markup, Core Web Vitals, JavaScript SEO,
                  local SEO, and SEO-friendly web development for businesses in
                  Nepal and international markets.
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl bg-card border border-border p-6 shadow-sm">
                <h3 className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-4">
                  Quick Facts
                </h3>

                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "Based in", value: "Kathmandu, Nepal" },
                    { icon: Globe2, label: "Serves", value: "Nepal, US, UK, Australia" },
                    { icon: Code2, label: "Stack", value: "Next.js, Django, Laravel, WordPress" },
                    { icon: Search, label: "Focus", value: "Technical SEO, AEO, GEO" },
                    { icon: Gauge, label: "Approach", value: "Direct implementation" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesEngagementModels />
      <ServicesCaseStudies />

      {/* FAQ Section - Centered */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                Common Questions
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServicesCTA />

      {/* Internal Links */}
      <section className="bg-accent/20 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                Related Services
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Explore More SEO Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/seo-expert-nepal"
              className="block p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
            >
              <Search className="h-5 w-5 text-primary mb-3" />
              <p className="font-semibold mb-2 text-foreground">
                SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground">
                Complete SEO strategy for rankings, traffic, AEO, GEO, and organic growth.
              </p>
            </Link>

            <Link
              href="/seo-audit-nepal"
              className="block p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
            >
              <Gauge className="h-5 w-5 text-primary mb-3" />
              <p className="font-semibold mb-2 text-foreground">
                SEO Audit Services in Nepal
              </p>
              <p className="text-sm text-muted-foreground">
                Find technical, content, and performance issues hurting your rankings.
              </p>
            </Link>

            <Link
              href="/technical-seo-expert-nepal"
              className="block p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
            >
              <Code2 className="h-5 w-5 text-primary mb-3" />
              <p className="font-semibold mb-2 text-foreground">
                Technical SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground">
                Improve crawlability, indexing, Core Web Vitals, schema, and website performance.
              </p>
            </Link>

            <Link
              href="/seo-consultant-nepal"
              className="block p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
            >
              <Lightbulb className="h-5 w-5 text-primary mb-3" />
              <p className="font-semibold mb-2 text-foreground">
                SEO Consultant in Nepal
              </p>
              <p className="text-sm text-muted-foreground">
                Independent SEO advice, technical reviews, strategic roadmaps, and migration planning.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
