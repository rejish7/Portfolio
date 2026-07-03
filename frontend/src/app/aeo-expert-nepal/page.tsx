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
  BarChart3,
  MessageSquareText,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AEO Expert in Nepal | Answer Engine Optimization Specialist",
  description:
    "Hire Rejish Khanal, an AEO expert in Nepal helping businesses optimize content for featured snippets, People Also Ask, AI Overviews, voice search, and answer engines.",
  keywords: [
    "AEO expert in Nepal",
    "Answer Engine Optimization Nepal",
    "AEO services in Nepal",
    "AEO specialist Nepal",
    "featured snippet optimization Nepal",
    "People Also Ask optimization Nepal",
    "voice search SEO Nepal",
    "AI Overview optimization Nepal",
    "SEO for answer engines Nepal",
    "SEO expert in Nepal",
    "SEO specialist in Kathmandu",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/aeo-expert-nepal",
  },
  openGraph: {
    title: "AEO Expert in Nepal | Answer Engine Optimization Specialist",
    description:
      "Work with Rejish Khanal to optimize your website content for featured snippets, People Also Ask, voice search, AI Overviews, and answer engines.",
    url: "https://rejishkhanal.com.np/aeo-expert-nepal",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AEO Expert in Nepal | Answer Engine Optimization Specialist",
    description:
      "AEO services in Nepal for featured snippets, People Also Ask, voice search, AI Overviews, and direct answer visibility.",
  },
};

export default function AEOExpertNepalPage() {
  const services = [
    {
      icon: MessageSquareText,
      title: "Answer-Focused Content Optimization",
      description:
        "Structure website content with direct answers, clear definitions, short explanations, and question-based sections that answer user intent quickly.",
    },
    {
      icon: HelpCircle,
      title: "People Also Ask Optimization",
      description:
        "Find question-based search opportunities and optimize content to target People Also Ask results with concise and helpful answers.",
    },
    {
      icon: Search,
      title: "Featured Snippet Optimization",
      description:
        "Format content using lists, definitions, tables, step-by-step answers, and structured sections to improve featured snippet eligibility.",
    },
    {
      icon: Bot,
      title: "AI Overview Content Structuring",
      description:
        "Improve content clarity, entity signals, topical depth, and factual answer sections to support visibility in AI-powered search experiences.",
    },
    {
      icon: FileSearch,
      title: "FAQ and Schema-Ready Content",
      description:
        "Create FAQ sections, question-answer blocks, and schema-ready content that helps search engines understand your page more clearly.",
    },
    {
      icon: BarChart3,
      title: "AEO Performance Tracking",
      description:
        "Track impressions, queries, featured snippet opportunities, People Also Ask visibility, and content performance using search data.",
    },
  ];

  const process = [
    {
      title: "Query and Question Research",
      description:
        "I find the questions your customers ask on Google, People Also Ask, voice search, and AI-powered search platforms.",
    },
    {
      title: "Search Intent Mapping",
      description:
        "I map each question to the correct answer format based on informational, commercial, local, and comparison intent.",
    },
    {
      title: "Answer Content Structuring",
      description:
        "I rewrite or create content with clear definitions, direct answers, short paragraphs, bullet points, and logical sections.",
    },
    {
      title: "FAQ and Entity Optimization",
      description:
        "I add FAQs, related entities, service signals, author context, and schema-ready formatting to improve content understanding.",
    },
    {
      title: "Internal Linking",
      description:
        "I connect AEO content with your SEO service pages, technical SEO pages, blogs, and case studies to build topical authority.",
    },
    {
      title: "Monitoring and Improvement",
      description:
        "I review search performance, query growth, impressions, rankings, and answer-based visibility to improve content over time.",
    },
  ];

  const targetKeywords = [
    "AEO expert in Nepal",
    "Answer Engine Optimization Nepal",
    "AEO services in Nepal",
    "featured snippet optimization Nepal",
    "People Also Ask optimization Nepal",
    "voice search SEO Nepal",
    "AI Overview optimization Nepal",
    "answer engine SEO Nepal",
    "SEO for AI answers Nepal",
  ];

  const faqs = [
    {
      question: "What is AEO?",
      answer:
        "AEO means Answer Engine Optimization. It is the process of structuring content so search engines, voice assistants, and AI-powered platforms can understand and present your content as a direct answer.",
    },
    {
      question: "Why is AEO important for businesses in Nepal?",
      answer:
        "AEO is important because users are searching with direct questions and expecting quick answers. Businesses in Nepal can use AEO to improve visibility in featured snippets, People Also Ask results, voice search, and AI search experiences.",
    },
    {
      question: "How is AEO different from SEO?",
      answer:
        "SEO focuses on improving search rankings and organic visibility. AEO focuses on making your content suitable for direct answers, featured snippets, People Also Ask results, voice search, and AI-generated answers.",
    },
    {
      question: "Can AEO help my website appear in Google AI Overviews?",
      answer:
        "AEO can improve your content structure, clarity, and answer quality, which may support visibility in AI-powered search experiences. No SEO specialist can guarantee AI Overview placement, but structured and helpful content improves your chances.",
    },
    {
      question: "Do you provide AEO services in Nepal?",
      answer:
        "Yes. I provide AEO services in Nepal, including question research, answer-focused content writing, FAQ optimization, featured snippet formatting, People Also Ask targeting, and schema-ready content structuring.",
    },
  ];

  const pageUrl = "https://rejishkhanal.com.np/aeo-expert-nepal";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AEO Expert in Nepal",
    description:
      "Answer Engine Optimization services in Nepal for featured snippets, People Also Ask, voice search, AI Overviews, and answer-based search visibility.",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    serviceType: "Answer Engine Optimization",
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
        name: "AEO Expert in Nepal",
        item: pageUrl,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="mb-20">
          <p className="text-sm font-semibold text-primary mb-4">
            AEO Expert in Nepal | Answer Engine Optimization | AI Search Visibility
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            AEO Expert in Nepal Helping Businesses Get Found in Answer Engines
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, an AEO expert in Nepal helping businesses
            optimize content for featured snippets, People Also Ask, voice
            search, AI Overviews, and answer-based search experiences.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            If your customers ask questions on Google or AI platforms before
            choosing a service, your content should be structured to answer those
            questions clearly. AEO helps your website become easier for answer
            engines, search engines, and users to understand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Hire Me for AEO Optimization
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request an SEO and AEO Audit
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Answer Engine Optimization Services in Nepal
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Search is becoming more answer-focused. Users now ask direct
              questions and expect quick, helpful, and trustworthy answers from
              Google, AI search tools, voice assistants, and answer engines.
            </p>

            <p>
              AEO helps your website content become easier to extract,
              summarize, and display as a useful answer. This includes clear
              definitions, concise explanations, FAQ sections, entity-rich
              writing, structured headings, and answer-focused formatting.
            </p>

            <p>
              My AEO services help businesses in Nepal improve visibility beyond
              traditional rankings by preparing content for featured snippets,
              People Also Ask, voice search, AI Overviews, and generative search
              experiences.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My AEO Services
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
            Why AEO Matters for Modern SEO
          </h2>

          <div className="space-y-4">
            {[
              "AEO helps your content answer direct customer questions clearly.",
              "It improves your chances of appearing in featured snippets and People Also Ask results.",
              "It supports voice search and conversational search behavior.",
              "It improves content clarity for AI Overviews and answer engines.",
              "It helps service pages, blog posts, FAQs, and landing pages become more useful.",
              "It supports SEO, GEO, and topical authority when combined with strong internal linking.",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My AEO Process
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
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Ready to Optimize Your Website for Answer Engines?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Work with an AEO expert in Nepal to make your website content more
            visible, structured, helpful, and ready for modern search.
          </p>

          <Link href="/contact">
            <Button size="lg" className="group">
              Start AEO Optimization
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">
            Related SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/geo-expert-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                GEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Optimize your content for generative AI search visibility.
              </p>
            </Link>

            <Link href="/seo-expert-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Complete SEO strategy for rankings and organic growth.
              </p>
            </Link>

            <Link href="/technical-seo-specialist-nepal" className="block rounded-lg border bg-background p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold hover:text-primary transition-colors">
                Technical SEO Specialist in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Fix crawlability, indexing, speed, schema, and technical issues.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}