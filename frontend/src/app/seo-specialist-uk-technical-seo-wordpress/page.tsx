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
  Code2,
  FileSearch,
  Gauge,
  Globe2,
  MessageSquare,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  UserCheck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "SEO Specialist for UK Businesses | Technical SEO, WordPress & AEO Expert",
  description:
    "Looking for a remote SEO specialist for your UK business? Rejish Khanal helps UK companies fix technical SEO issues, optimise WordPress sites, and improve Google and AI search visibility.",
  keywords: [
    "SEO Specialist UK",
    "SEO Expert UK",
    "WordPress SEO UK",
    "Technical SEO UK",
    "Remote SEO Specialist",
    "AEO GEO UK",
    "Ecommerce SEO UK",
    "Hire SEO Specialist UK",
    "UK SEO services",
    "WordPress technical SEO UK",
    "Core Web Vitals UK",
    "SEO for UK businesses",
  ],
  alternates: {
    canonical:
      "https://rejishkhanal.com.np/seo-specialist-uk-technical-seo-wordpress",
  },
  openGraph: {
    title:
      "SEO Specialist for UK Businesses | Technical SEO, WordPress & AEO Expert",
    description:
      "Remote SEO specialist helping UK businesses fix technical SEO, optimise WordPress sites, and improve Google and AI search visibility.",
    url: "https://rejishkhanal.com.np/seo-specialist-uk-technical-seo-wordpress",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Specialist for UK Businesses | Technical SEO & WordPress Expert",
    description:
      "Technical SEO, WordPress optimisation, Core Web Vitals, ecommerce SEO, and AEO/GEO support for UK businesses.",
  },
};

export default function SEOSpecialistUKPage() {
  const services = [
    {
      icon: Wrench,
      title: "WordPress Technical SEO",
      description:
        "Fix render-blocking scripts added by page builders, plugin conflicts creating duplicate or broken schema, unoptimised image libraries, and hosting environments never configured for speed. I fix these at the code and configuration level, not just inside a plugin settings panel.",
    },
    {
      icon: Gauge,
      title: "Core Web Vitals and Page Speed",
      description:
        "LCP, INP, and CLS issues are common on WordPress sites built with heavy page builders like Elementor or Divi. I address these through image optimisation, script deferral, hosting-level caching configuration, and rebuilding specific templates for performance where needed.",
    },
    {
      icon: FileSearch,
      title: "Technical SEO Audits",
      description:
        "Crawlability, indexing, canonical tags, XML sitemap accuracy, internal linking structure, and structured data implementation across your site, with a prioritised list of fixes ranked by actual ranking impact rather than a generic checklist.",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce SEO",
      description:
        "For UK online stores: product schema, category and filter URL management, variant canonicalisation, and Core Web Vitals work specific to product pages, where most WooCommerce and Shopify sites lose both rankings and conversion rate.",
    },
    {
      icon: MessageSquare,
      title: "AEO and GEO",
      description:
        "AI Overviews and AI-powered search assistants are already changing how UK customers find businesses. I structure content, FAQ schema, and entity signals so your site has a real chance of being cited as a source rather than losing that traffic entirely.",
    },
    {
      icon: Code2,
      title: "Full-Stack Implementation",
      description:
        "Most SEO consultants stop at a recommendations document. I implement fixes directly, which matters most on WordPress sites where a schema fix, a Core Web Vitals fix, or a redirect cleanup often needs someone comfortable in the code, not just the SEO plugin settings.",
    },
  ];

  const whyWorkWithMe = [
    {
      icon: UserCheck,
      title: "Direct Access, No Account Manager",
      description:
        "Agencies route your questions through an account manager who relays them to whoever is doing the work. Working directly with me means you talk to the person doing the audit, writing the fix, and implementing the code.",
    },
    {
      icon: ShieldCheck,
      title: "Lower Overhead, Same Technical Depth",
      description:
        "UK agency retainers carry the cost of office space, account management, and layered staffing. As an independent specialist, that overhead does not exist, so your budget goes toward the actual technical work rather than the agency structure around it.",
    },
    {
      icon: Globe2,
      title: "Remote, Working Across UK Hours",
      description:
        "SEO work is entirely screen-based: audits, code, and reporting, none of which require physical presence. Remote specialists working across UK hours are now a standard part of how UK companies get technical work done.",
    },
  ];

  const whoFor = [
    {
      title: "UK Small and Mid-Size Businesses",
      description:
        "Running on WordPress with no in-house developer and ranking problems that need technical fixes, not just more content.",
    },
    {
      title: "UK Ecommerce Stores",
      description:
        "On WooCommerce or Shopify wanting technical SEO handled properly, from product schema to Core Web Vitals on product pages.",
    },
    {
      title: "UK Service Businesses",
      description:
        "Clinics, law firms, trades, and agencies whose site has never had a real technical audit and is underperforming in local and organic search.",
    },
    {
      title: "UK SaaS and Software Companies",
      description:
        "Needing technical SEO alongside development-level implementation rather than a separate recommendations document.",
    },
    {
      title: "UK Agencies",
      description:
        "Wanting reliable white-label technical SEO support for client work without hiring a full-time technical SEO hire.",
    },
  ];

  const faqs = [
    {
      question: "Can a remote SEO specialist actually work well with a UK business?",
      answer:
        "Yes. SEO work is audit, strategy, code, and reporting, none of which requires physical presence. Communication happens over email, calls, and shared reporting, the same way it would with an in-house hire or a local agency account manager.",
    },
    {
      question: "Why choose a specialist over a UK SEO agency?",
      answer:
        "Direct access to the person doing the work, lower overhead than an agency retainer, and technical implementation handled by the same person who did the audit, rather than passed to a separate development team.",
    },
    {
      question: "Do you work specifically with WordPress sites?",
      answer:
        "Yes. WordPress technical SEO, including page builder performance issues, plugin conflicts, schema implementation, and Core Web Vitals, is a core part of the work I do.",
    },
    {
      question: "How do you measure results?",
      answer:
        "Through Google Search Console and GA4 data: indexing coverage, keyword position changes, Core Web Vitals scores, and organic traffic and conversion trends, reported against a clear baseline set at the start of the engagement.",
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
      title: "WordPress SEO Expert in Nepal",
      href: "/wordpress-seo-expert-nepal",
      description:
        "WordPress speed, Core Web Vitals, schema, plugin conflicts, and technical SEO.",
    },
    {
      title: "SEO Audit Nepal",
      href: "/seo-audit-nepal",
      description:
        "Get a detailed technical, content, keyword, competitor, and performance SEO audit.",
    },
    {
      title: "Core Web Vitals Optimization",
      href: "/core-web-vitals-optimization",
      description:
        "Improve LCP, INP, CLS, page speed, mobile performance, and technical user experience.",
    },
    {
      title: "SEO Expert in Nepal",
      href: "/seo-expert-nepal",
      description:
        "Complete SEO strategy for technical SEO, on-page SEO, local SEO, AEO, GEO, and organic growth.",
    },
    {
      title: "AEO and GEO Expert in Nepal",
      href: "/aeo-expert-nepal",
      description:
        "Structure content for AI Overviews, answer engines, and generative search visibility.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Specialist for UK Businesses",
    description:
      "Remote SEO specialist for UK businesses providing technical SEO, WordPress SEO, Core Web Vitals optimization, ecommerce SEO, SEO audits, and AEO/GEO optimization.",
    url: "https://rejishkhanal.com.np/seo-specialist-uk-technical-seo-wordpress",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      jobTitle: "Technical SEO Specialist and Full Stack Developer",
      sameAs: [
        "https://linkedin.com/in/rejish-khanal-259395402",
        "https://github.com/rejish7",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceType: [
      "Technical SEO",
      "WordPress SEO",
      "Core Web Vitals Optimization",
      "Ecommerce SEO",
      "SEO Audit",
      "AEO",
      "GEO",
    ],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rejish Khanal - SEO Specialist for UK Businesses",
    description:
      "Remote SEO specialist for UK businesses providing technical SEO, WordPress SEO, Core Web Vitals optimization, ecommerce SEO, SEO audits, and AEO/GEO optimization.",
    url: "https://rejishkhanal.com.np/seo-specialist-uk-technical-seo-wordpress",
    image: "https://rejishkhanal.com.np/og-image.jpg",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      jobTitle: "Technical SEO Specialist and Full Stack Developer",
      sameAs: [
        "https://linkedin.com/in/rejish-khanal-259395402",
        "https://github.com/rejish7",
      ],
    },
    serviceType: [
      "Technical SEO",
      "WordPress SEO",
      "Core Web Vitals Optimization",
      "Ecommerce SEO",
      "SEO Audit",
      "AEO",
      "GEO",
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
    jobTitle: "SEO Specialist and Technical SEO Expert",
    description:
      "Rejish Khanal is a technical SEO specialist and full stack developer working remotely with UK businesses on technical SEO, WordPress optimization, Core Web Vitals, ecommerce SEO, SEO audits, and AEO/GEO.",
    knowsAbout: [
      "Technical SEO",
      "WordPress SEO",
      "Core Web Vitals",
      "Ecommerce SEO",
      "SEO Audit",
      "AEO",
      "GEO",
      "Google Search Console",
      "Schema Markup",
      "Full Stack Development",
    ],
    sameAs: [
      "https://linkedin.com/in/rejish-khanal-259395402",
      "https://github.com/rejish7",
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SEO Specialist for UK Businesses",
    url: "https://rejishkhanal.com.np/seo-specialist-uk-technical-seo-wordpress",
    description:
      "Remote SEO specialist for UK businesses providing technical SEO, WordPress SEO, Core Web Vitals optimization, ecommerce SEO, SEO audits, and AEO/GEO optimization.",
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "SEO Specialist UK",
      "Technical SEO UK",
      "WordPress SEO UK",
      "Remote SEO Specialist",
      "Ecommerce SEO UK",
      "AEO GEO UK",
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
        name: "SEO Specialist for UK Businesses",
        item: "https://rejishkhanal.com.np/seo-specialist-uk-technical-seo-wordpress",
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
            SEO Specialist for UK Businesses | Technical SEO | WordPress | AEO |
            GEO
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            SEO Specialist for UK Businesses: Technical SEO and WordPress,
            Handled Directly
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            If you run a business in the UK and your website is not showing up
            where it should on Google, the problem is rarely a lack of content.
            It is usually a technical issue sitting underneath the content: a
            WordPress site slowed down by page builders and unoptimised plugins,
            missing or broken structured data, poor Core Web Vitals scores, or a
            site architecture that makes it hard for Google to find and index
            your most important pages.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            I am Rejish Khanal, a technical SEO specialist and full-stack
            developer working remotely with UK businesses. I combine SEO strategy
            with hands-on development, so when an audit finds a fix, I implement
            it directly in code rather than handing a list of recommendations to
            a developer and waiting weeks for it to happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request a Technical SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Why UK Businesses Work With a Remote SEO Specialist
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg">
            <p>
              Many UK businesses default to hiring a local agency because it
              feels safer. In practice, remote specialists working across UK
              hours are now a standard part of how UK companies get technical
              work done, and for SEO specifically, the work is entirely
              screen-based: audits, code, and reporting, none of which require
              physical presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {whyWorkWithMe.map((item, index) => {
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
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            What I Actually Do for UK Businesses
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
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-20 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-3xl font-bold mb-6">
            Why Work With Me as Your UK SEO Specialist?
          </h2>

          <div className="space-y-4">
            {[
              "I combine SEO strategy with developer-level technical implementation, so fixes happen in code, not in a recommendations document.",
              "I work directly with you. No account manager, no layered staffing, no relayed questions.",
              "I understand WordPress deeply: page builder performance issues, plugin conflicts, schema markup, and Core Web Vitals.",
              "I optimise for both Google and AI search: AI Overviews, answer engines, and generative search assistants.",
              "I report against a clear baseline using Google Search Console and GA4 data: indexing coverage, rankings, Core Web Vitals, and organic conversions.",
              "Lower overhead than a UK agency retainer, so your budget goes toward the actual technical work.",
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
            Who This Is For
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            I work with UK businesses that need technical SEO handled properly,
            not just another checklist from a generic SEO tool.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {whoFor.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
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
          <TrendingUp className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Work With an SEO Specialist for Your UK Business
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If your WordPress site is not ranking the way it should, or you want
            a technical SEO audit that comes with an actual implementation plan
            instead of a slide deck, get in touch.
          </p>

          <Link href="/contact">
            <Button size="lg" className="group">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">More SEO Services</h2>

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
