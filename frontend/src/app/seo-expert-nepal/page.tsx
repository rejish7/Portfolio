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
  MapPin,
  FileSearch,
  TrendingUp,
  Bot,
  Globe2,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Expert in Nepal | Technical SEO & AEO Specialist",
  description:
    "Hire Rejish Khanal, an SEO expert in Nepal and Kathmandu specializing in technical SEO, local SEO, AEO, GEO, content SEO, and organic growth.",
  keywords: [
    "SEO expert in Nepal",
    "SEO expert Nepal",
    "SEO expert in Kathmandu",
    "SEO specialist in Kathmandu",
    "SEO specialist Nepal",
    "SEO consultant Nepal",
    "freelance SEO expert Nepal",
    "technical SEO in Nepal",
    "technical SEO expert Nepal",
    "local SEO expert Kathmandu",
    "AEO expert in Nepal",
    "GEO expert in Nepal",
    "organic growth specialist Nepal",
    "SEO audit Nepal",
    "SEO services in Nepal",
    "SEO services Kathmandu",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/seo-expert-nepal",
  },
  openGraph: {
    title: "SEO Expert in Nepal | Technical SEO, AEO, GEO & Organic Growth",
    description:
      "Work with Rejish Khanal, an SEO expert in Kathmandu, Nepal helping businesses improve Google rankings, technical SEO, local visibility, AI search presence, and organic leads.",
    url: "https://rejishkhanal.com.np/seo-expert-nepal",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Expert in Nepal | Technical SEO & AEO Specialist",
    description:
      "Technical SEO, local SEO, AEO, GEO, content SEO, and organic growth services for businesses in Nepal and international markets.",
  },
};

export default function SEOExpertPage() {
  const expertise = [
    {
      icon: Code2,
      title: "Technical SEO in Nepal",
      description:
        "Improve crawlability, indexing, Core Web Vitals, site architecture, redirects, canonical tags, XML sitemaps, robots.txt, schema markup, and JavaScript SEO.",
    },
    {
      icon: MapPin,
      title: "Local SEO in Kathmandu",
      description:
        "Optimize your website for Kathmandu and Nepal-based searches with local landing pages, Google Business Profile strategy, local citations, reviews, and map visibility.",
    },
    {
      icon: Search,
      title: "On-Page SEO",
      description:
        "Optimize titles, meta descriptions, headings, internal links, image alt text, content structure, semantic keywords, and conversion-focused page sections.",
    },
    {
      icon: FileSearch,
      title: "SEO Content Strategy",
      description:
        "Build keyword maps, topic clusters, blog calendars, service pages, comparison pages, and answer-focused content that supports rankings and conversions.",
    },
    {
      icon: Bot,
      title: "AEO and GEO Optimization",
      description:
        "Structure content for AI Overviews, answer engines, featured snippets, People Also Ask, voice search, and generative AI discovery.",
    },
    {
      icon: BarChart3,
      title: "SEO Auditing and Reporting",
      description:
        "Get detailed technical audits, keyword analysis, competitor research, Google Search Console insights, GA4 reporting, and practical SEO roadmaps.",
    },
  ];

  const process = [
    {
      title: "SEO Discovery",
      description:
        "I study your business, audience, current website, competitors, target locations, services, and revenue goals before creating an SEO plan.",
    },
    {
      title: "Technical SEO Audit",
      description:
        "I review crawling, indexing, site speed, structured data, mobile usability, page experience, internal links, redirects, canonicals, broken links, and website architecture.",
    },
    {
      title: "Keyword and Intent Mapping",
      description:
        "I map keywords based on search intent, commercial value, competition, topical relevance, and conversion potential.",
    },
    {
      title: "On-Page Optimization",
      description:
        "I optimize service pages, landing pages, blog posts, metadata, headings, content depth, internal links, and calls to action.",
    },
    {
      title: "AEO and GEO Enhancement",
      description:
        "I add direct answers, FAQs, schema-ready content, entity signals, concise definitions, and structured sections for AI search visibility.",
    },
    {
      title: "Tracking and Improvement",
      description:
        "I monitor impressions, clicks, rankings, search queries, user behavior, conversions, and technical health to improve performance over time.",
    },
  ];

  const serviceAreas = [
    "Kathmandu",
    "Lalitpur",
    "Bhaktapur",
    "Pokhara",
    "Chitwan",
    "Butwal",
    "Biratnagar",
    "Nepal",
    "International Clients",
  ];

  const targetKeywords = [
    "SEO expert in Nepal",
    "SEO expert in Kathmandu",
    "SEO specialist in Kathmandu",
    "SEO consultant in Nepal",
    "Technical SEO in Nepal",
    "Technical SEO expert Nepal",
    "AEO expert in Nepal",
    "GEO expert in Nepal",
    "Local SEO expert Kathmandu",
    "SEO audit Nepal",
    "SEO services in Nepal",
    "Organic growth specialist Nepal",
  ];

  const faqs = [
    {
      question: "Who is an SEO expert in Nepal?",
      answer:
        "An SEO expert in Nepal is a professional who helps businesses improve their visibility on Google and other search platforms through technical SEO, content optimization, local SEO, keyword research, and performance tracking. I help Nepali businesses and international clients build search-friendly websites that attract qualified organic traffic.",
    },
    {
      question: "Why should I hire an SEO expert in Kathmandu?",
      answer:
        "Hiring an SEO expert in Kathmandu helps your business compete for local and national search terms that your customers are already using. A Kathmandu-based SEO specialist also understands the Nepali market, local search behavior, competition, and location-based ranking opportunities.",
    },
    {
      question: "What is technical SEO and why is it important?",
      answer:
        "Technical SEO improves the backend structure of your website so search engines can crawl, render, index, and understand your pages properly. It includes site speed, Core Web Vitals, schema markup, mobile usability, redirects, canonical tags, internal linking, sitemaps, and website architecture.",
    },
    {
      question: "What is the difference between SEO, AEO, and GEO?",
      answer:
        "SEO focuses on improving search visibility and rankings. AEO, or Answer Engine Optimization, focuses on making your content suitable for direct answers, featured snippets, People Also Ask, and voice search. GEO, or Generative Engine Optimization, focuses on improving visibility in AI-powered and generative search experiences.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO results depend on your website condition, competition, keyword difficulty, content quality, and technical health. Some technical improvements may show early movement within a few weeks, while stronger organic growth usually takes three to six months or more.",
    },
    {
      question: "Do you provide SEO audits in Nepal?",
      answer:
        "Yes. I provide technical SEO audits, content audits, keyword audits, competitor analysis, local SEO audits, Google Search Console reviews, and website performance audits for businesses in Nepal and international markets.",
    },
    {
      question: "Can you help my business rank for local keywords in Nepal?",
      answer:
        "Yes. I can help you target local keywords such as SEO expert in Kathmandu, SEO services in Nepal, local SEO Kathmandu, service-based keywords, and location-specific landing pages based on your business goals.",
    },
    {
      question: "Do you work with startups and small businesses?",
      answer:
        "Yes. I work with startups, small businesses, service providers, ecommerce brands, content websites, agencies, and personal brands that want to grow through organic search.",
    },
  ];

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rejish Khanal - SEO Expert in Nepal",
    description:
      "SEO expert in Nepal specializing in technical SEO, local SEO, content SEO, AEO, GEO, SEO audits, and organic growth strategy.",
    url: "https://rejishkhanal.com.np/seo-expert-nepal",
    image: "https://rejishkhanal.com.np/og-image.jpg",
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
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressLocality: "Kathmandu",
    },
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      jobTitle: "SEO Expert and Technical SEO Specialist",
      sameAs: [
        "https://linkedin.com/in/rejish-khanal",
        "https://github.com/rejish7",
      ],
    },
    serviceType: [
      "Technical SEO",
      "Local SEO",
      "SEO Audit",
      "Content SEO",
      "AEO",
      "GEO",
      "Organic Growth Strategy",
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
    jobTitle: "SEO Expert in Nepal",
    description:
      "Rejish Khanal is an SEO expert in Nepal specializing in technical SEO, local SEO, AEO, GEO, content optimization, and organic growth.",
    knowsAbout: [
      "SEO",
      "Technical SEO",
      "Local SEO",
      "AEO",
      "GEO",
      "Content SEO",
      "Google Search Console",
      "Core Web Vitals",
      "Schema Markup",
      "Organic Growth",
    ],
    sameAs: [
      "https://linkedin.com/in/rejish-khanal",
      "https://github.com/rejish7",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Services in Nepal",
    description:
      "Technical SEO, local SEO, AEO, GEO, SEO audits, content optimization, and organic growth services for businesses in Nepal.",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    serviceType: "Search Engine Optimization",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SEO Expert in Nepal",
    url: "https://rejishkhanal.com.np/seo-expert-nepal",
    description:
      "SEO expert in Nepal for technical SEO, local SEO, AEO, GEO, content SEO, and organic growth.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "SEO Expert in Nepal",
      "SEO Expert in Kathmandu",
      "Technical SEO in Nepal",
      "AEO Expert in Nepal",
      "GEO Expert in Nepal",
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
        name: "SEO Expert in Nepal",
        item: "https://rejishkhanal.com.np/seo-expert-nepal",
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
          __html: JSON.stringify(professionalServiceSchema),
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
        <section className="mb-20">
          <p className="text-sm font-semibold text-primary mb-4">
            SEO Expert in Nepal | Technical SEO | Local SEO | AEO | GEO
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            SEO Expert in Nepal Helping Businesses Rank Higher, Get More Traffic,
            and Grow Organically
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, an SEO expert in Kathmandu, Nepal. I help
            businesses, startups, service providers, ecommerce brands, and
            personal websites improve their Google visibility through technical
            SEO, local SEO, on-page SEO, content strategy, AEO, GEO, and
            data-driven organic growth.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            If you are looking for an SEO expert in Nepal, SEO expert in
            Kathmandu, SEO specialist in Kathmandu, technical SEO expert in
            Nepal, or AEO and GEO specialist, I can help you build a search
            strategy that is practical, measurable, and built for long-term
            visibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Hire Me as Your SEO Expert
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request an SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            SEO Services in Nepal for Search Visibility and Organic Growth
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Search engine optimization is no longer only about adding keywords
              to a page. A website needs a strong technical foundation, helpful
              content, clear site structure, fast loading speed, internal links,
              structured data, and content that directly answers user intent.
            </p>

            <p>
              My SEO services in Nepal are designed to help your website become
              easier for search engines to crawl, index, understand, and rank.
              I focus on both users and search engines so your pages can attract
              relevant visitors and convert them into leads, customers, or
              inquiries.
            </p>

            <p>
              Whether you need local SEO in Kathmandu, technical SEO in Nepal,
              an SEO audit, blog content strategy, service page optimization, or
              AI search visibility through AEO and GEO, I can help you build a
              complete organic growth system.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My SEO Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => {
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
            Why Work With Me as Your SEO Expert in Nepal?
          </h2>

          <div className="space-y-4">
            {[
              "I combine SEO knowledge with technical implementation skills, which means I can identify issues and understand how to fix them.",
              "I optimize websites for Google Search, local search, AI Overviews, answer engines, and generative search experiences.",
              "I focus on search intent, not just keywords, so your pages attract visitors who are more likely to convert.",
              "I create SEO strategies for Nepal-based businesses as well as international websites targeting competitive markets.",
              "I use Google Search Console, analytics data, competitor research, and technical audits to make informed SEO decisions.",
              "I avoid keyword stuffing, spammy link tactics, and short-term tricks that can damage long-term search performance.",
              "I build SEO systems that include technical SEO, content SEO, local SEO, AEO, GEO, and conversion-focused optimization.",
            ].map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Technical SEO in Nepal for Better Crawling, Indexing, and Performance
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Technical SEO is one of the most important parts of modern search
              engine optimization. Even strong content can struggle to rank if
              search engines cannot crawl, render, index, or understand your
              pages properly.
            </p>

            <p>
              As a technical SEO specialist in Nepal, I review the foundation of
              your website and identify issues that may be blocking organic
              growth. This includes site speed, Core Web Vitals, internal
              linking, redirects, sitemap structure, robots.txt, canonical tags,
              duplicate content, schema markup, broken pages, and mobile
              usability.
            </p>

            <p>
              Technical SEO helps your website communicate clearly with search
              engines. It also improves user experience, page performance, and
              the overall quality of your website.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              "Crawlability and indexing audit",
              "Core Web Vitals optimization",
              "Schema markup implementation",
              "XML sitemap optimization",
              "Robots.txt review",
              "Redirect and canonical cleanup",
              "Broken link fixing",
              "Mobile SEO review",
              "JavaScript SEO checks",
              "Internal linking improvement",
              "Duplicate content analysis",
              "Website architecture planning",
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg border bg-background">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Local SEO Expert in Kathmandu for Location-Based Visibility
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              If your business serves customers in Kathmandu or across Nepal,
              local SEO can help you appear when people search for services near
              them. Local SEO is important for consultants, agencies, clinics,
              education consultancies, real estate businesses, ecommerce stores,
              finance websites, service providers, and local brands.
            </p>

            <p>
              I help businesses improve their local search presence through
              location-based landing pages, local keyword targeting, Google
              Business Profile optimization, local content, internal links,
              service area targeting, and trust-building website content.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              Locations I Can Help You Target
            </h3>

            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full border bg-background text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            AEO and GEO Expert in Nepal for AI Search Visibility
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Search is changing. People now use Google AI Overviews, featured
              snippets, People Also Ask, voice assistants, and generative AI
              platforms to get direct answers. This means your website content
              should not only be written for rankings. It should also be
              structured to become a clear and trusted answer.
            </p>

            <p>
              AEO, or Answer Engine Optimization, focuses on helping your
              content appear in answer-style search results. GEO, or Generative
              Engine Optimization, focuses on improving your visibility in
              AI-powered search environments where platforms summarize
              information from multiple sources.
            </p>

            <p>
              I optimize content with clear definitions, concise answers, FAQ
              sections, entity-rich language, structured headings, schema markup,
              topical depth, and internal links so both search engines and AI
              systems can understand your expertise.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My SEO Process
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {process.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <p className="text-sm font-semibold text-primary mb-2">
                    Step {index + 1}
                  </p>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            SEO Keywords This Page Is Built to Target
          </h2>

          <p className="text-lg text-muted-foreground mb-6">
            This page is structured to target high-intent search terms related
            to SEO services, technical SEO, AEO, GEO, and local SEO in Nepal.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetKeywords.map((keyword) => (
              <div key={keyword} className="p-4 rounded-lg border bg-background">
                <p className="font-medium">{keyword}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Who Can Benefit From My SEO Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Startups",
                description:
                  "Build an SEO foundation early with clean site architecture, focused landing pages, keyword strategy, and scalable content planning.",
              },
              {
                title: "Small Businesses",
                description:
                  "Improve local visibility, attract qualified leads, and compete for service-based keywords in Kathmandu and across Nepal.",
              },
              {
                title: "Service Providers",
                description:
                  "Rank for high-intent service keywords with optimized landing pages, trust signals, FAQs, and conversion-focused content.",
              },
              {
                title: "Ecommerce Websites",
                description:
                  "Improve category pages, product pages, technical SEO, structured data, internal linking, and organic product discovery.",
              },
              {
                title: "Agencies",
                description:
                  "Get support with SEO audits, technical recommendations, content briefs, website optimization, and white-label SEO execution.",
              },
              {
                title: "International Clients",
                description:
                  "Work remotely with a Nepal-based SEO specialist experienced in global SEO, technical audits, and content-led organic growth.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 rounded-lg border bg-background">
          <div className="flex items-start gap-4">
            <Globe2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold mb-4">
                SEO Is a Long-Term Growth Channel
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  SEO is not a one-time task. It is a continuous process of
                  improving your website, content, authority, technical health,
                  search intent coverage, and user experience.
                </p>

                <p>
                  I do not promise overnight rankings or guaranteed first-page
                  positions because real SEO depends on competition, website
                  quality, content depth, technical condition, authority, and
                  ongoing optimization. My focus is to build a sustainable SEO
                  system that improves your chances of long-term organic growth.
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
          <TrendingUp className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Ready to Improve Your Google Rankings and Organic Traffic?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Work with an SEO expert in Nepal who understands technical SEO,
            local SEO, content strategy, AEO, GEO, and search-focused website
            optimization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Book a Free SEO Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Get a Technical SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">
            More SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/technical-seo-specialist-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                Technical SEO Specialist in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Fix crawl, index, speed, schema, and technical website issues.
              </p>
            </Link>

            <Link href="/seo-audit-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Audit Services in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Get a complete technical, content, and performance SEO review.
              </p>
            </Link>

            <Link href="/local-seo-services-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                Local SEO Services in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Improve visibility for Kathmandu and Nepal-based local searches.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}