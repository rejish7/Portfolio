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
  TrendingUp,
  Bot,
  Globe2,
  BarChart3,
  Lightbulb,
  ShieldCheck,
  Users,
  Code2,
  MapPin,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Consultant in Nepal | Strategy & Technical Advice",
  description:
    "Work with an SEO consultant in Nepal for audits, strategy, technical advice, website migrations, second opinions, and practical SEO roadmaps.",
  keywords: [
    "SEO consultant in Nepal",
    "SEO consultancy in Nepal",
    "SEO consulting services Nepal",
    "freelance SEO consultant Nepal",
    "technical SEO consultant Nepal",
    "SEO strategy consultant Nepal",
    "website SEO consultant Nepal",
    "SEO advisor in Nepal",
    "SEO audit consultant Nepal",
    "SEO consultant Kathmandu",
    "independent SEO consultant Nepal",
    "hire SEO consultant in Nepal",
    "SEO consultation Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/seo-consultant-nepal",
  },
  openGraph: {
    title: "SEO Consultant in Nepal | Strategy & Technical Advice",
    description:
      "Work with an SEO consultant in Nepal for audits, strategy, technical advice, website migrations, second opinions, and practical SEO roadmaps.",
    url: "https://rejishkhanal.com.np/seo-consultant-nepal",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://rejishkhanal.com.np/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rejish Khanal - SEO Consultant in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Consultant in Nepal | Strategy & Technical Advice",
    description:
      "SEO consulting for audits, strategy, technical advice, website migrations, second opinions, and practical roadmaps.",
    images: ["https://rejishkhanal.com.np/og-image.jpg"],
  },
};

export default function SEOConsultantPage() {
  const consultingServices = [
    {
      icon: FileSearch,
      title: "Website SEO Assessments",
      description:
        "Comprehensive review of your website's search performance, technical health, content quality, and competitive position.",
    },
    {
      icon: Code2,
      title: "Technical SEO Audits",
      description:
        "Deep-dive into crawlability, indexing, Core Web Vitals, schema markup, JavaScript SEO, redirects, canonicals, and site architecture.",
    },
    {
      icon: Lightbulb,
      title: "SEO Strategy Development",
      description:
        "Custom SEO roadmaps based on your business goals, target audience, resources, website platform, and competitive landscape.",
    },
    {
      icon: Search,
      title: "Keyword & Search-Intent Mapping",
      description:
        "Map keywords by intent, commercial value, competition, and topical relevance to guide content and page creation.",
    },
    {
      icon: BookOpen,
      title: "Content-Gap Analysis",
      description:
        "Identify missing topics, underperforming pages, and content opportunities your competitors are capturing.",
    },
    {
      icon: Globe2,
      title: "Website Architecture Planning",
      description:
        "Design URL structure, navigation, internal linking, topic hierarchy, and service page organization for SEO scalability.",
    },
    {
      icon: ShieldCheck,
      title: "SEO Migration Consulting",
      description:
        "Pre-migration audits, redirect mapping, risk assessment, and post-migration validation for domain, platform, or redesign changes.",
    },
    {
      icon: BarChart3,
      title: "Core Web Vitals Recommendations",
      description:
        "Actionable guidance for LCP, INP, and CLS improvements that developers can implement without guesswork.",
    },
    {
      icon: Bot,
      title: "JavaScript SEO Consulting",
      description:
        "Diagnose rendering, hydration, metadata, and indexing issues in Next.js, React, and JavaScript-heavy websites.",
    },
    {
      icon: MapPin,
      title: "Local SEO Strategy",
      description:
        "Plan location-based landing pages, Google Business Profile optimization, local citations, and service-area targeting for Nepal.",
    },
    {
      icon: TrendingUp,
      title: "AEO & GEO Readiness",
      description:
        "Prepare content for AI Overviews, answer engines, featured snippets, and generative search with structured data and entity signals.",
    },
    {
      icon: Users,
      title: "Competitor Analysis",
      description:
        "Understand competitor keyword strategies, content depth, technical advantages, and backlink profiles to inform your roadmap.",
    },
    {
      icon: Search,
      title: "Measurement Frameworks",
      description:
        "Define KPIs, tracking setup, Search Console configuration, GA4 events, and reporting cadence for ongoing accountability.",
    },
    {
      icon: Lightbulb,
      title: "Internal Team Guidance",
      description:
        "Workshops, documentation, and ongoing advisory for your developers, writers, and marketers to execute SEO correctly.",
    },
    {
      icon: FileSearch,
      title: "Agency & Proposal Reviews",
      description:
        "Independent assessment of SEO proposals, deliverables, technical recommendations, implementation plans, and pricing.",
    },
    {
      icon: CheckCircle2,
      title: "Post-Implementation QA",
      description:
        "Validate completed SEO work, confirm fixes are deployed correctly, and identify any remaining issues or regressions.",
    },
  ];

  const whoNeedsConsultant = [
    "Website owners who do not know why visibility has declined",
    "Businesses planning a redesign or migration",
    "Companies with an internal marketing or development team",
    "Businesses that received conflicting SEO recommendations",
    "Website owners considering an agency proposal",
    "Companies that need a second opinion",
    "Startups planning their website architecture",
    "Ecommerce websites facing indexing or duplication problems",
    "Agencies requiring technical SEO support",
    "International companies seeking a Nepal-based consultant",
  ];

  const process = [
    {
      step: 1,
      title: "Business & Website Discovery",
      description:
        "Understand the website, target audience, commercial priorities, technology stack, and current concerns.",
    },
    {
      step: 2,
      title: "Data & Website Review",
      description:
        "Examine Search Console data, analytics, landing pages, technical conditions, content, competition, and conversion paths.",
    },
    {
      step: 3,
      title: "Problem Diagnosis",
      description:
        "Separate critical issues from low-priority warnings and identify root causes behind indexing, traffic, ranking, or conversion problems.",
    },
    {
      step: 4,
      title: "Prioritized Roadmap",
      description:
        "Organize recommendations by expected impact, implementation effort, dependencies, and risk.",
    },
    {
      step: 5,
      title: "Team Consultation",
      description:
        "Explain recommendations to the website owner, marketing team, developer, or agency.",
    },
    {
      step: 6,
      title: "Implementation Review",
      description:
        "Validate completed work and identify any remaining issues or unintended consequences.",
    },
  ];

  const deliverables = [
    "Consultation call",
    "Website assessment",
    "Prioritized SEO roadmap",
    "Technical recommendations",
    "Important URL list",
    "Search-intent & keyword observations",
    "Content recommendations",
    "Implementation notes",
    "Risk & dependency notes",
    "Q&A with owner or team",
    "Follow-up implementation review (where included)",
  ];

  const whyWorkWithMe = [
    "Direct consultation without account managers or unnecessary communication layers",
    "Advice adapted to your business, target market, website platform, and internal resources",
    "Experience with Next.js, React, WordPress, Django, Laravel, Shopify, and custom websites",
    "Technical recommendations that developers can understand and implement",
    "Prioritized actions instead of an unfiltered list of automated warnings",
    "Support across technical SEO, content, local search, AEO, GEO, and website performance",
    "Independent second opinions on audits, proposals, migrations, and SEO strategies",
  ];

  const faqs = [
    {
      question: "What does an SEO consultant in Nepal do?",
      answer:
        "An SEO consultant reviews a website's search performance, identifies problems and opportunities, and recommends the actions that should be prioritized. Consulting may cover technical SEO, content strategy, website architecture, local SEO, AEO, GEO, migrations, and performance measurement.",
    },
    {
      question: "When should I hire an SEO consultant?",
      answer:
        "Hire an SEO consultant when you need an independent website review, a strategic roadmap, a second opinion, or guidance for an internal team. Consulting is also useful before a website redesign, domain migration, platform change, or long-term SEO investment.",
    },
    {
      question: "What is included in an SEO consultation?",
      answer:
        "An SEO consultation may include business discovery, website analysis, Search Console review, technical observations, content recommendations, competitor research, and a prioritized action plan. The exact deliverables depend on the website, problem, available data, and scope of the engagement.",
    },
    {
      question: "Can you work with my developer or marketing team?",
      answer:
        "Yes. I can explain recommendations to developers, marketers, writers, website owners, and agency teams. I can also review completed work to confirm whether the recommendations were implemented correctly.",
    },
    {
      question: "Do you only provide advice, or can you implement the recommendations?",
      answer:
        "I can provide consultation-only support or combine strategic advice with implementation. Technical implementation is particularly useful when the project involves JavaScript SEO, metadata, structured data, redirects, Core Web Vitals, canonical tags, internal linking, or website architecture.",
    },
    {
      question: "Can you review an SEO proposal from another provider?",
      answer:
        "Yes. I can independently assess the proposed deliverables, priorities, technical recommendations, implementation responsibilities, reporting plan, and possible risks. This can help you make a more informed decision before signing a long-term agreement.",
    },
  ];

  const consultantSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rejish Khanal - SEO Consultant in Nepal",
    description:
      "SEO consultant in Nepal providing strategic advice, technical audits, SEO roadmaps, migration consulting, second opinions, and implementation guidance for businesses in Nepal and international markets.",
    url: "https://rejishkhanal.com.np/seo-consultant-nepal",
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
      jobTitle: "SEO Consultant in Nepal",
      sameAs: [
        "https://github.com/rejish7",
        "https://x.com/KhanalRejish",
      ],
    },
    serviceType: [
      "SEO Consulting",
      "Technical SEO Audit",
      "SEO Strategy",
      "Website Migration Consulting",
      "SEO Second Opinion",
      "Content Strategy",
      "Local SEO Strategy",
      "AEO Consulting",
      "GEO Consulting",
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://rejishkhanal.com.np/#person",
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
    jobTitle: "SEO Consultant in Nepal",
    description:
      "Rejish Khanal is an SEO consultant in Nepal helping businesses with strategic SEO advice, technical audits, roadmaps, migrations, second opinions, and implementation guidance.",
    knowsAbout: [
      "SEO Consulting",
      "Technical SEO",
      "SEO Strategy",
      "Website Migration SEO",
      "Core Web Vitals",
      "JavaScript SEO",
      "Schema Markup",
      "Google Search Console",
      "Content Strategy",
      "Local SEO",
      "AEO",
      "GEO",
    ],
    sameAs: [
      "https://www.linkedin.com/in/rejishkhanalseo/",
      "https://github.com/rejish7",
      "https://x.com/KhanalRejish",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Consulting Services in Nepal",
    description:
      "Strategic SEO consulting, technical audits, roadmaps, migration planning, second opinions, and team guidance for businesses in Nepal and internationally.",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    serviceType: "Search Engine Optimization Consulting",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SEO Consultant in Nepal",
    url: "https://rejishkhanal.com.np/seo-consultant-nepal",
    description:
      "SEO consultant in Nepal for practical strategy, technical advice, audits, migrations, second opinions, and actionable SEO roadmaps.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "SEO Consultant in Nepal",
      "SEO Consultancy in Nepal",
      "SEO Consulting Services Nepal",
      "Technical SEO Consultant Nepal",
      "SEO Strategy Consultant Nepal",
      "SEO Audit Consultant Nepal",
      "SEO Migration Consulting Nepal",
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
        name: "SEO Consultant in Nepal",
        item: "https://rejishkhanal.com.np/seo-consultant-nepal",
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
          __html: JSON.stringify(consultantSchema),
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
            SEO Consultant in Nepal | Strategy | Technical Advice | Second Opinions
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            SEO Consultant in Nepal for Practical Strategy and Advice
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, an SEO consultant in Nepal helping website owners,
            businesses, internal marketing teams, developers, and agencies make
            better decisions about organic search.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            My SEO consulting services are designed for businesses that need an
            experienced review, a clear strategy, or an independent second opinion
            before committing time and budget to SEO work. I can assess your
            website, identify the problems limiting its search visibility, explain
            which issues deserve priority, and create a practical roadmap for your
            team.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            Unlike a generic automated audit, my consulting approach considers
            your website technology, target customers, important services,
            existing search performance, available resources, and business
            objectives. I provide advice across technical SEO, content strategy,
            local SEO, website architecture, Core Web Vitals, JavaScript SEO,
            AEO, GEO, website migrations, and organic growth planning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Book an SEO Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/free-seo-review">
              <Button size="lg" variant="outline">
                Request a Website Review
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            SEO Consulting Services in Nepal
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg mb-8">
            <p>
              SEO consulting is about strategic direction before implementation
              begins. I help you understand what is holding your website back,
              which actions will move the needle, and how to sequence the work
              for maximum impact with your available resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
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
            Who Needs an SEO Consultant?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {whoNeedsConsultant.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            What Is the Difference Between an SEO Consultant and an SEO Expert?
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              An SEO consultant primarily evaluates your current situation,
              identifies opportunities and risks, and recommends the actions your
              business should prioritize. Consulting is suitable when you already
              have developers, writers, marketers, or an agency available to
              implement the work.
            </p>

            <p>
              An SEO expert may provide both strategic direction and direct
              implementation. This can include optimizing pages, fixing technical
              issues, improving internal links, implementing structured data, and
              monitoring performance.
            </p>

            <p>
              I can work in either capacity. You can hire me for independent SEO
              advice and a strategic roadmap, or for a broader project that
              includes technical implementation and ongoing optimization.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My SEO Consulting Process
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
            Consulting Deliverables
          </h2>

          <p className="text-lg text-muted-foreground mb-6">
            Deliverables vary based on scope. A focused consultation may include
            a subset of these; a full engagement typically includes more.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item) => (
              <div key={item} className="p-4 rounded-lg border bg-background flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Not every consultation includes every deliverable. The final scope
            depends on the engagement, website size, problem complexity, and
            available data.
          </p>
        </section>

        <section className="mb-20 p-8 rounded-lg border bg-background">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Why Work With Me as Your SEO Consultant in Nepal?
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  I combine SEO strategy with web development knowledge, allowing
                  me to examine both search-performance problems and the technical
                  systems behind them.
                </p>

                <ul className="space-y-3 list-none">
                  {whyWorkWithMe.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground">{reason}</p>
                    </li>
                  ))}
                </ul>
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
            Ready for Independent SEO Advice and a Practical Roadmap?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get an SEO consultation, technical review, strategic roadmap, or
            second opinion before investing in implementation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Book an SEO Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/free-seo-review">
              <Button size="lg" variant="outline">
                Request a Website Review
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
                Technical SEO, local SEO, AEO, GEO, and organic growth implementation.
              </p>
            </Link>

            <Link href="/technical-seo-expert-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                Technical SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Fix crawl, index, speed, schema, and JavaScript SEO issues.
              </p>
            </Link>

            <Link href="/seo-audit-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Audit Services in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Get a complete technical, content, and performance SEO audit.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}