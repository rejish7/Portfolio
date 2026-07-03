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
  FileSearch,
  TrendingUp,
  Network,
  BrainCircuit,
  Search,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GEO Expert in Nepal | Generative Engine Optimization Specialist",
  description:
    "Hire Rejish Khanal, a GEO expert in Nepal helping businesses optimize content for AI search, generative engines, AI Overviews, ChatGPT Search, and organic visibility.",
  keywords: [
    "GEO expert in Nepal",
    "Generative Engine Optimization Nepal",
    "GEO services in Nepal",
    "AI search optimization Nepal",
    "AI Overview optimization Nepal",
    "SEO for AI search Nepal",
    "generative AI SEO specialist Nepal",
    "ChatGPT SEO optimization Nepal",
    "AEO expert in Nepal",
    "SEO expert in Nepal",
    "technical SEO specialist Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/geo-expert-nepal",
  },
  openGraph: {
    title: "GEO Expert in Nepal | Generative Engine Optimization Specialist",
    description:
      "Improve your website visibility in AI-powered search experiences with GEO, entity SEO, structured content, topical authority, and AI search optimization.",
    url: "https://rejishkhanal.com.np/geo-expert-nepal",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Expert in Nepal | AI Search Optimization Specialist",
    description:
      "GEO services in Nepal for AI search, generative engines, AI Overviews, entity SEO, and topical authority building.",
  },
};

export default function GEOExpertNepalPage() {
  const services = [
    {
      icon: BrainCircuit,
      title: "Generative Engine Optimization",
      description:
        "Optimize your website content so generative AI systems can better understand, summarize, and associate your brand with relevant topics.",
    },
    {
      icon: Network,
      title: "Entity-Based SEO",
      description:
        "Improve entity clarity by connecting your brand, services, expertise, location, topics, and supporting content across your website.",
    },
    {
      icon: FileSearch,
      title: "AI Search Content Structure",
      description:
        "Create structured, complete, and helpful content that supports visibility in AI-powered recommendations, AI Overviews, and generative search.",
    },
    {
      icon: Bot,
      title: "AI Overview Optimization",
      description:
        "Improve content depth, answer clarity, topical relevance, and trust signals to support visibility in AI-assisted search results.",
    },
    {
      icon: Search,
      title: "Topic Cluster Development",
      description:
        "Build topic clusters around SEO, technical SEO, AEO, GEO, local SEO, and your main service areas to strengthen topical authority.",
    },
    {
      icon: BarChart3,
      title: "AI Search Visibility Tracking",
      description:
        "Monitor organic queries, brand visibility, topic coverage, content performance, and search improvements over time.",
    },
  ];

  const faqs = [
    {
      question: "What is GEO?",
      answer:
        "GEO means Generative Engine Optimization. It focuses on improving how your website, brand, and content are understood by AI-powered search platforms and generative engines.",
    },
    {
      question: "How is GEO different from SEO?",
      answer:
        "SEO focuses on traditional search rankings, while GEO focuses on visibility in AI-powered search experiences where platforms summarize information, recommend sources, and generate direct answers.",
    },
    {
      question: "Why do businesses in Nepal need GEO?",
      answer:
        "Businesses in Nepal need GEO because search behavior is shifting toward AI-powered answers, AI summaries, and conversational search. GEO helps your content become clearer, more authoritative, and easier for AI systems to understand.",
    },
    {
      question: "Can GEO guarantee visibility in AI search?",
      answer:
        "No one can guarantee visibility in AI search results. However, GEO improves your chances by strengthening content structure, topical authority, entity signals, trust indicators, and answer quality.",
    },
    {
      question: "Do you provide GEO services in Nepal?",
      answer:
        "Yes. I provide GEO services in Nepal, including AI search optimization, entity SEO, topic cluster planning, content restructuring, AEO support, and AI Overview-focused content improvements.",
    },
  ];

  const process = [
    "Audit your current content and topic coverage",
    "Identify entity gaps and AI search opportunities",
    "Build topic clusters around your services",
    "Optimize content for clarity, depth, and answer quality",
    "Improve internal linking and schema-ready structure",
    "Track search performance and improve over time",
  ];

  const targetKeywords = [
    "GEO expert in Nepal",
    "Generative Engine Optimization Nepal",
    "GEO services in Nepal",
    "AI search optimization Nepal",
    "AI Overview optimization Nepal",
    "SEO for AI search Nepal",
    "generative AI SEO specialist Nepal",
    "ChatGPT SEO optimization Nepal",
    "AEO and GEO expert Nepal",
  ];

  const pageUrl = "https://rejishkhanal.com.np/geo-expert-nepal";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GEO Expert in Nepal",
    description:
      "Generative Engine Optimization services in Nepal for AI search visibility, AI Overviews, entity SEO, topic clusters, and generative search optimization.",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    serviceType: "Generative Engine Optimization",
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
        name: "GEO Expert in Nepal",
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="mb-20">
          <p className="text-sm font-semibold text-primary mb-4">
            GEO Expert in Nepal | Generative Engine Optimization | AI Search SEO
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            GEO Expert in Nepal Helping Brands Become Visible in AI Search
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, a GEO expert in Nepal helping businesses prepare
            their websites for AI-powered search, generative search engines, AI
            Overviews, and modern answer-based discovery.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            Generative Engine Optimization helps your content become clearer,
            more authoritative, and easier for AI systems to understand. It
            works together with SEO and AEO to improve your visibility across
            traditional search and AI-driven search experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Start GEO Optimization
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/aeo-expert-nepal">
              <Button size="lg" variant="outline">
                Explore AEO Services
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Generative Engine Optimization Services in Nepal
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Search is moving from only keyword-based results to AI-generated
              answers, summaries, recommendations, and conversational discovery.
              GEO helps your brand become more understandable and relevant in
              this new search environment.
            </p>

            <p>
              My GEO services focus on content structure, topic depth, entity
              clarity, internal linking, expert signals, schema-ready sections,
              direct answers, and helpful page experience.
            </p>

            <p>
              If your business wants to stay visible as users shift toward AI
              search tools and generative engines, GEO should become part of your
              SEO strategy.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My GEO Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((item, index) => {
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
            How I Improve AI Search Visibility
          </h2>

          <div className="space-y-4">
            {process.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Keywords This Page Targets
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetKeywords.map((keyword) => (
              <div key={keyword} className="p-4 rounded-lg border bg-background">
                <p className="font-medium">{keyword}</p>
              </div>
            ))}
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
          <Globe2 className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Prepare Your Website for the Future of Search
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Work with a GEO expert in Nepal to improve your website structure,
            content clarity, topical authority, and AI search visibility.
          </p>

          <Link href="/contact">
            <Button size="lg" className="group">
              Book a GEO Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">
            Related SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/aeo-expert-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                AEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Optimize your content for answer engines and direct answers.
              </p>
            </Link>

            <Link href="/seo-expert-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Complete SEO strategy for long-term organic growth.
              </p>
            </Link>

            <Link href="/technical-seo-specialist-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                Technical SEO Specialist in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Improve crawling, indexing, speed, schema, and technical health.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}