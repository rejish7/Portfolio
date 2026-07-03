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
  Building2,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Specialist in Kathmandu | Technical SEO, Local SEO, AEO & GEO",
  description:
    "Hire Rejish Khanal, an SEO specialist in Kathmandu helping businesses improve Google rankings, local SEO, technical SEO, AEO, GEO, and organic traffic.",
  keywords: [
    "SEO specialist in Kathmandu",
    "SEO expert in Kathmandu",
    "SEO consultant in Kathmandu",
    "freelance SEO specialist in Kathmandu",
    "technical SEO specialist in Kathmandu",
    "technical SEO expert Kathmandu",
    "local SEO expert Kathmandu",
    "SEO services in Kathmandu",
    "SEO audit Kathmandu",
    "Google ranking expert Kathmandu",
    "SEO expert in Nepal",
    "SEO specialist Nepal",
    "technical SEO in Nepal",
    "local SEO Kathmandu",
    "AEO expert in Nepal",
    "GEO expert in Nepal",
    "organic growth specialist Kathmandu",
    "SEO consultant Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/seo-specialist-kathmandu",
  },
  openGraph: {
    title:
      "SEO Specialist in Kathmandu | Technical SEO, Local SEO, AEO & GEO",
    description:
      "Work with Rejish Khanal, an SEO specialist in Kathmandu helping local businesses improve Google rankings, technical SEO, local visibility, AEO, GEO, and organic leads.",
    url: "https://rejishkhanal.com.np/seo-specialist-kathmandu",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Specialist in Kathmandu | Technical SEO & Local SEO Expert",
    description:
      "Technical SEO, local SEO, AEO, GEO, SEO audits, and organic growth services for businesses in Kathmandu and Nepal.",
  },
};

export default function SEOSpecialistKathmanduPage() {
  const expertise = [
    {
      icon: MapPin,
      title: "Local SEO in Kathmandu",
      description:
        "Improve visibility for Kathmandu-based searches with local landing pages, Google Business Profile strategy, local keywords, service area targeting, reviews, citations, and local authority signals.",
    },
    {
      icon: Code2,
      title: "Technical SEO Specialist in Kathmandu",
      description:
        "Fix crawlability, indexing, Core Web Vitals, redirects, canonical tags, XML sitemaps, robots.txt, schema markup, JavaScript SEO, and site architecture issues.",
    },
    {
      icon: Search,
      title: "On-Page SEO Optimization",
      description:
        "Optimize page titles, meta descriptions, headings, URLs, image alt text, semantic keywords, content structure, internal links, and conversion-focused sections.",
    },
    {
      icon: FileSearch,
      title: "SEO Audit for Kathmandu Businesses",
      description:
        "Get a clear SEO audit covering technical SEO errors, indexing issues, content gaps, keyword targeting, local SEO problems, competitor insights, and ranking opportunities.",
    },
    {
      icon: Bot,
      title: "AEO and GEO Optimization",
      description:
        "Structure content for AI Overviews, featured snippets, People Also Ask, voice search, answer engines, and generative AI search visibility.",
    },
    {
      icon: BarChart3,
      title: "SEO Reporting and Growth Tracking",
      description:
        "Track impressions, clicks, rankings, search queries, indexing improvements, local visibility, page performance, and organic traffic growth using data-driven reporting.",
    },
  ];

  const process = [
    {
      title: "Business and SEO Discovery",
      description:
        "I understand your business, target customers, service areas, competitors, website condition, goals, and the keywords your customers use in Kathmandu and Nepal.",
    },
    {
      title: "Website and Technical SEO Audit",
      description:
        "I review crawling, indexing, Core Web Vitals, mobile usability, schema markup, internal links, redirects, canonicals, sitemaps, robots.txt, and technical barriers.",
    },
    {
      title: "Local Keyword and Search Intent Mapping",
      description:
        "I map local and service-based keywords based on search intent, commercial value, competition, topical relevance, and conversion potential.",
    },
    {
      title: "Page and Content Optimization",
      description:
        "I optimize service pages, landing pages, metadata, headings, internal links, body content, FAQs, schema-ready sections, and calls to action.",
    },
    {
      title: "Local SEO and Authority Building",
      description:
        "I improve local relevance through Google Business Profile strategy, location-focused content, citations, review signals, internal links, and local landing pages.",
    },
    {
      title: "Tracking, Reporting, and Improvement",
      description:
        "I monitor performance using Google Search Console, analytics data, keyword movement, local visibility, technical health, and conversion signals.",
    },
  ];

  const serviceAreas = [
    "Kathmandu",
    "New Baneshwar",
    "Thamel",
    "Putalisadak",
    "Kalimati",
    "Baluwatar",
    "Maharajgunj",
    "Koteshwor",
    "Lalitpur",
    "Bhaktapur",
    "Pokhara",
    "Chitwan",
    "Butwal",
    "Biratnagar",
    "Nepal",
  ];

  const targetKeywords = [
    "SEO specialist in Kathmandu",
    "SEO expert in Kathmandu",
    "SEO consultant in Kathmandu",
    "freelance SEO specialist in Kathmandu",
    "technical SEO specialist in Kathmandu",
    "local SEO expert Kathmandu",
    "SEO services in Kathmandu",
    "SEO audit Kathmandu",
    "Google ranking expert Kathmandu",
    "SEO specialist Nepal",
    "technical SEO in Nepal",
    "AEO expert in Nepal",
    "GEO expert in Nepal",
    "organic growth specialist Kathmandu",
    "SEO for small business Kathmandu",
  ];

  const businessTypes = [
    {
      title: "Local Businesses",
      description:
        "Improve visibility for service-based and location-based searches in Kathmandu, Lalitpur, Bhaktapur, and other target areas.",
    },
    {
      title: "Startups",
      description:
        "Build a scalable SEO foundation with clean site architecture, keyword mapping, service pages, technical SEO, and growth-focused content.",
    },
    {
      title: "Service Providers",
      description:
        "Rank for high-intent service keywords with optimized landing pages, strong internal links, helpful content, FAQs, and clear calls to action.",
    },
    {
      title: "Ecommerce Websites",
      description:
        "Improve category pages, product pages, technical SEO, structured data, faceted navigation, internal links, and organic product discovery.",
    },
    {
      title: "Education Consultancies",
      description:
        "Target high-intent local and international education-related searches with content strategy, service pages, local SEO, and trust-focused optimization.",
    },
    {
      title: "Real Estate and Finance Brands",
      description:
        "Improve rankings for competitive service keywords with technical SEO, content depth, schema markup, local pages, and conversion-focused landing pages.",
    },
  ];

  const relatedServices = [
    {
      title: "Technical SEO Specialist in Nepal",
      href: "/technical-seo-specialist-nepal",
      description:
        "Fix crawl, index, speed, schema, JavaScript SEO, and technical website issues.",
    },
    {
      title: "SEO Expert in Nepal",
      href: "/seo-expert-nepal",
      description:
        "Complete SEO strategy for technical SEO, on-page SEO, local SEO, AEO, GEO, and organic growth.",
    },
    {
      title: "SEO Audit Nepal",
      href: "/seo-audit-nepal",
      description:
        "Get a detailed technical, content, keyword, competitor, and performance SEO audit.",
    },
    {
      title: "Local SEO Services in Nepal",
      href: "/local-seo-services-nepal",
      description:
        "Improve Google Maps visibility, Google Business Profile performance, local rankings, and local search presence.",
    },
    {
      title: "Core Web Vitals Optimization",
      href: "/core-web-vitals-optimization",
      description:
        "Improve LCP, INP, CLS, page speed, mobile performance, and technical user experience.",
    },
    {
      title: "Next.js SEO Services",
      href: "/nextjs-seo-services",
      description:
        "Optimize Next.js websites for crawlability, rendering, metadata, schema, sitemaps, and Core Web Vitals.",
    },
  ];

  const faqs = [
    {
      question: "Who is an SEO specialist in Kathmandu?",
      answer:
        "An SEO specialist in Kathmandu is a professional who helps businesses improve visibility on Google through technical SEO, local SEO, keyword research, content optimization, SEO audits, and performance tracking. I help Kathmandu-based businesses build search-friendly websites that attract qualified organic traffic and leads.",
    },
    {
      question: "Why should I hire an SEO specialist in Kathmandu?",
      answer:
        "You should hire an SEO specialist in Kathmandu if your business wants to rank for local keywords, improve Google visibility, generate more organic leads, and compete with other businesses in your market. A Kathmandu-focused SEO strategy can help your website target customers who are already searching for your services.",
    },
    {
      question: "What SEO services do you provide in Kathmandu?",
      answer:
        "I provide technical SEO, local SEO, SEO audits, on-page SEO, keyword research, content optimization, Google Search Console analysis, Core Web Vitals optimization, schema markup, AEO, GEO, and organic growth strategy for businesses in Kathmandu and Nepal.",
    },
    {
      question: "Can you help my business rank on Google Maps?",
      answer:
        "Yes. I can help improve your local search visibility through Google Business Profile optimization, local landing pages, business information consistency, category optimization, review strategy, local citations, schema markup, and service area targeting.",
    },
    {
      question: "What is technical SEO?",
      answer:
        "Technical SEO improves the technical foundation of your website so search engines can crawl, render, index, and understand your pages properly. It includes Core Web Vitals, site speed, mobile usability, sitemaps, robots.txt, canonical tags, redirects, schema markup, internal linking, and website architecture.",
    },
    {
      question: "What is local SEO?",
      answer:
        "Local SEO helps your business appear for location-based searches. It is useful for businesses that want to attract customers from Kathmandu, Lalitpur, Bhaktapur, Pokhara, Chitwan, or other service areas in Nepal.",
    },
    {
      question: "How long does SEO take to show results in Kathmandu?",
      answer:
        "SEO results depend on your website condition, competition, keyword difficulty, content quality, backlinks, technical SEO, and local authority. Some technical fixes may show early improvements within weeks, while stronger organic growth usually takes three to six months or more.",
    },
    {
      question: "Do you provide SEO audits for Kathmandu businesses?",
      answer:
        "Yes. I provide SEO audits for businesses in Kathmandu and Nepal. My audit can review technical SEO, indexing issues, Core Web Vitals, metadata, content gaps, internal links, schema markup, keyword targeting, competitors, and ranking barriers.",
    },
    {
      question: "Do you work with small businesses and startups?",
      answer:
        "Yes. I work with startups, small businesses, ecommerce websites, service providers, consultancies, agencies, content websites, and personal brands that want to grow through organic search.",
    },
    {
      question: "Can you optimize my website for AEO and GEO?",
      answer:
        "Yes. I can optimize your content for AEO and GEO by adding clear answers, FAQs, structured sections, entity-rich content, schema-ready formatting, topical depth, and content that supports AI Overviews, answer engines, and generative search visibility.",
    },
  ];

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rejish Khanal - SEO Specialist in Kathmandu",
    description:
      "SEO specialist in Kathmandu providing technical SEO, local SEO, SEO audits, content optimization, AEO, GEO, Core Web Vitals optimization, and organic growth strategy.",
    url: "https://rejishkhanal.com.np/seo-specialist-kathmandu",
    image: "https://rejishkhanal.com.np/og-image.jpg",
    areaServed: [
      {
        "@type": "City",
        name: "Kathmandu",
      },
      {
        "@type": "City",
        name: "Lalitpur",
      },
      {
        "@type": "City",
        name: "Bhaktapur",
      },
      {
        "@type": "Country",
        name: "Nepal",
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
      jobTitle: "SEO Specialist and Technical SEO Expert",
      sameAs: [
        "https://linkedin.com/in/rejish-khanal",
        "https://github.com/rejish7",
      ],
    },
    serviceType: [
      "SEO Specialist in Kathmandu",
      "Technical SEO",
      "Local SEO",
      "SEO Audit",
      "Content SEO",
      "AEO",
      "GEO",
      "Core Web Vitals Optimization",
      "Organic Growth Strategy",
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
    jobTitle: "SEO Specialist in Kathmandu",
    description:
      "Rejish Khanal is an SEO specialist in Kathmandu, Nepal specializing in technical SEO, local SEO, SEO audits, AEO, GEO, content optimization, and organic growth.",
    knowsAbout: [
      "SEO",
      "Technical SEO",
      "Local SEO",
      "SEO Audit",
      "AEO",
      "GEO",
      "Content SEO",
      "Google Search Console",
      "Core Web Vitals",
      "Schema Markup",
      "Organic Growth",
      "Next.js SEO",
    ],
    sameAs: [
      "https://linkedin.com/in/rejish-khanal",
      "https://github.com/rejish7",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Specialist in Kathmandu",
    description:
      "Technical SEO, local SEO, SEO audits, AEO, GEO, content optimization, and organic growth services for businesses in Kathmandu and Nepal.",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Kathmandu",
      },
      {
        "@type": "Country",
        name: "Nepal",
      },
    ],
    serviceType: "Search Engine Optimization",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SEO Specialist in Kathmandu",
    url: "https://rejishkhanal.com.np/seo-specialist-kathmandu",
    description:
      "SEO specialist in Kathmandu for technical SEO, local SEO, SEO audits, AEO, GEO, content SEO, and organic growth.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "SEO Specialist in Kathmandu",
      "SEO Expert in Kathmandu",
      "Technical SEO Specialist in Kathmandu",
      "Local SEO Expert Kathmandu",
      "SEO Services in Kathmandu",
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
        name: "Services",
        item: "https://rejishkhanal.com.np/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SEO Specialist in Kathmandu",
        item: "https://rejishkhanal.com.np/seo-specialist-kathmandu",
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
            SEO Specialist in Kathmandu | Technical SEO | Local SEO | AEO | GEO
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            SEO Specialist in Kathmandu Helping Businesses Rank Higher, Get More
            Traffic, and Generate Better Leads
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, an SEO specialist in Kathmandu, Nepal. I help
            local businesses, startups, service providers, ecommerce brands,
            agencies, consultancies, and personal websites improve Google
            visibility through technical SEO, local SEO, on-page SEO, SEO
            audits, AEO, GEO, and organic growth strategy.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            If you are looking for an SEO expert in Kathmandu, SEO consultant in
            Kathmandu, freelance SEO specialist in Kathmandu, technical SEO
            specialist, or local SEO expert for your business, I can help you
            build a practical, measurable, and long-term search strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Hire Me as Your SEO Specialist
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
            SEO Services in Kathmandu for Local Rankings and Organic Growth
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Kathmandu is one of the most competitive digital markets in Nepal.
              Customers now search online before choosing a consultant, agency,
              clinic, education consultancy, real estate company, finance
              provider, ecommerce store, restaurant, IT company, or professional
              service business.
            </p>

            <p>
              A strong SEO strategy helps your website appear when people search
              for your services on Google. Instead of depending only on paid ads,
              SEO builds long-term organic visibility that can continue bringing
              targeted traffic, inquiries, and leads over time.
            </p>

            <p>
              My SEO services in Kathmandu focus on improving your website from
              the inside out. I work on technical SEO, content optimization,
              local SEO, keyword mapping, website structure, internal linking,
              schema markup, performance, and search intent so your website can
              compete with other ranking pages.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My SEO Expertise for Kathmandu Businesses
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
            Why Work With Me as Your SEO Specialist in Kathmandu?
          </h2>

          <div className="space-y-4">
            {[
              "I combine technical SEO knowledge with full stack development skills, which helps me identify problems and understand how to fix them.",
              "I optimize websites for Google Search, local search, AI Overviews, featured snippets, answer engines, and generative search experiences.",
              "I focus on search intent, not only keyword placement, so your pages attract visitors who are more likely to convert.",
              "I understand Kathmandu and Nepal-based search behavior, local competition, and service-based keyword opportunities.",
              "I use Google Search Console, analytics data, competitor research, and technical audits to make practical SEO decisions.",
              "I avoid keyword stuffing, spammy link-building tactics, and short-term SEO tricks that can damage your website.",
              "I build SEO systems that include technical SEO, local SEO, content SEO, AEO, GEO, performance optimization, and conversion-focused improvements.",
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
            Technical SEO Specialist in Kathmandu for Better Crawling, Indexing,
            and Website Performance
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Technical SEO is one of the most important parts of modern SEO.
              Even strong content can struggle to rank if search engines cannot
              crawl, render, index, or understand your website properly.
            </p>

            <p>
              As a technical SEO specialist in Kathmandu, I review the technical
              foundation of your website and identify issues that may be stopping
              your pages from ranking. This includes site speed, Core Web Vitals,
              sitemaps, robots.txt, canonical tags, redirects, duplicate
              content, schema markup, broken links, mobile usability, internal
              linking, and website architecture.
            </p>

            <p>
              Technical SEO improves both search engine understanding and user
              experience. A faster, cleaner, and more crawlable website gives
              your business a stronger foundation for local SEO, content SEO,
              AEO, and GEO.
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
            Local SEO Expert in Kathmandu for Google Maps and Local Search
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Local SEO helps your business appear when customers search for
              services in Kathmandu or nearby areas. This is important for
              businesses that depend on calls, bookings, inquiries, visits,
              directions, and service requests.
            </p>

            <p>
              I help Kathmandu businesses improve local search visibility through
              location-focused landing pages, local keyword targeting, Google
              Business Profile optimization, local content, business schema,
              citations, review signals, service area targeting, and internal
              linking.
            </p>

            <p>
              Whether you want to target Kathmandu, Lalitpur, Bhaktapur, or
              customers across Nepal, local SEO can help your business become
              more visible when people are actively looking for your services.
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
            AEO and GEO Optimization for Modern Search Visibility
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Search is changing. People now use Google AI Overviews, featured
              snippets, People Also Ask, voice assistants, ChatGPT-style search,
              and generative AI tools to find answers. Your content needs to be
              clear, structured, helpful, and easy for both search engines and AI
              systems to understand.
            </p>

            <p>
              AEO, or Answer Engine Optimization, helps your content appear in
              direct answers, featured snippets, People Also Ask results, and
              voice search. GEO, or Generative Engine Optimization, helps improve
              your visibility in AI-powered search experiences where platforms
              summarize information from multiple sources.
            </p>

            <p>
              I optimize pages with direct answers, FAQ sections, concise
              definitions, entity-rich language, structured content, schema-ready
              formatting, topical depth, and internal links to support both SEO
              and AI search visibility.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My SEO Process for Kathmandu Businesses
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
            This page is structured to target high-intent keywords related to SEO
            services, technical SEO, local SEO, AEO, GEO, and organic growth in
            Kathmandu and Nepal.
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
            Who Can Benefit From My SEO Services in Kathmandu?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {businessTypes.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {index % 2 === 0 ? (
                        <Building2 className="h-5 w-5 text-primary" />
                      ) : (
                        <Target className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </div>
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
                  improving your website, content, technical health, local
                  relevance, authority signals, search intent coverage, and user
                  experience.
                </p>

                <p>
                  I do not promise overnight rankings or guaranteed first-page
                  results because real SEO depends on competition, website
                  quality, content depth, technical condition, backlinks, local
                  authority, and ongoing optimization. My focus is to build a
                  sustainable SEO system that improves your chances of long-term
                  organic growth.
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
            Ready to Improve Your Google Rankings in Kathmandu?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Work with an SEO specialist in Kathmandu who understands technical
            SEO, local SEO, content strategy, AEO, GEO, and search-focused
            website optimization.
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
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors"
              >
                <p className="font-semibold hover:text-primary transition-colors">
                  {service.title}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}