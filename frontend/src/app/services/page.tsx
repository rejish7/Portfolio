import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQSection } from "@/components/FAQSection";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  Code2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Search,
  FileSearch,
  Gauge,
  Globe2,
  Server,
  Layers,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SEO Services in Nepal | Technical SEO & Web Development",
  description:
    "SEO services in Nepal by Rejish Khanal. Technical SEO, SEO audits, local SEO, Core Web Vitals, AEO, GEO, and SEO-friendly web development for organic growth.",
  keywords: [
    "SEO services in Nepal",
    "SEO services Nepal",
    "SEO expert in Nepal",
    "SEO expert Nepal",
    "technical SEO services Nepal",
    "technical SEO specialist Nepal",
    "SEO audit Nepal",
    "local SEO services Nepal",
    "Core Web Vitals optimization Nepal",
    "web development Nepal",
    "SEO friendly web development",
    "Next.js SEO services",
    "Django developer Nepal",
    "Laravel developer Nepal",
    "AEO expert Nepal",
    "GEO expert Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/services",
  },
  openGraph: {
    title: "SEO Services in Nepal | Technical SEO, Local SEO & Web Development",
    description:
      "Technical SEO, SEO audits, local SEO, Core Web Vitals optimization, AEO, GEO, and SEO-friendly web development services by Rejish Khanal.",
    url: "https://rejishkhanal.com.np/services",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services in Nepal | Rejish Khanal",
    description:
      "SEO services in Nepal for technical SEO, local SEO, SEO audits, Core Web Vitals, AEO, GEO, and SEO-friendly web development.",
  },
};

const detailedServices = [
  {
    icon: BarChart3,
    title: "Technical SEO Services in Nepal",
    description:
      "Improve crawlability, indexing, Core Web Vitals, schema markup, redirects, canonical tags, JavaScript SEO, and technical website performance.",
    href: "/technical-seo-specialist-nepal",
    cta: "Explore Technical SEO Services",
  },
  {
    icon: Search,
    title: "SEO Expert Services in Nepal",
    description:
      "Complete SEO strategy covering keyword research, on-page SEO, content optimization, local SEO, AEO, GEO, and organic growth planning.",
    href: "/seo-expert-nepal",
    cta: "Hire an SEO Expert in Nepal",
  },
  {
    icon: FileSearch,
    title: "SEO Audit Services in Nepal",
    description:
      "Find technical SEO errors, indexing problems, content gaps, Core Web Vitals issues, internal linking problems, and ranking barriers.",
    href: "/seo-audit-nepal",
    cta: "Request an SEO Audit",
  },
  {
    icon: MapPin,
    title: "Local SEO Services in Nepal",
    description:
      "Improve local search visibility for Kathmandu and Nepal-based businesses with Google Business Profile, local pages, citations, and map ranking strategy.",
    href: "/local-seo-services-nepal",
    cta: "Improve Local SEO Rankings",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals Optimization",
    description:
      "Optimize LCP, INP, CLS, mobile performance, page speed, JavaScript execution, image loading, and user experience for stronger SEO performance.",
    href: "/core-web-vitals-optimization",
    cta: "Optimize Core Web Vitals",
  },
  {
    icon: Code2,
    title: "SEO-Friendly Web Development in Nepal",
    description:
      "Build fast, responsive, crawlable, and conversion-focused websites with clean code, structured data, strong architecture, and SEO-ready foundations.",
    href: "/web-development-nepal",
    cta: "Build an SEO-Friendly Website",
  },
];

const frameworkServices = [
  {
    icon: Globe2,
    title: "Next.js SEO Services",
    description:
      "Optimize Next.js websites for App Router, metadata, server-side rendering, static generation, structured data, crawlability, and Core Web Vitals.",
    href: "/nextjs-seo-services",
    cta: "Optimize a Next.js Website",
  },
  {
    icon: Server,
    title: "Django Developer in Nepal",
    description:
      "Build secure, scalable, and SEO-friendly Django websites with clean URL structure, performance optimization, structured content, and strong backend architecture.",
    href: "/django-developer-nepal",
    cta: "Hire a Django Developer",
  },
  {
    icon: Layers,
    title: "Laravel Developer in Nepal",
    description:
      "Create fast, structured, and SEO-ready Laravel websites with clean backend logic, optimized performance, secure architecture, and search-friendly pages.",
    href: "/laravel-developer-nepal",
    cta: "Hire a Laravel Developer",
  },
];

const coreServices = [
  {
    icon: BarChart3,
    title: "Technical SEO",
    description:
      "Comprehensive technical SEO audits and implementation to improve crawling, indexing, speed, structured data, and organic visibility.",
    features: [
      "Crawl audit and technical issue fixing",
      "Core Web Vitals optimization for LCP, CLS, and INP",
      "JavaScript SEO for rendering and hydration issues",
      "Schema markup implementation",
      "Google Search Console monitoring",
      "Robots.txt and XML sitemap optimization",
      "Canonical tag and redirect cleanup",
      "Internal linking and site architecture improvements",
    ],
    forWho:
      "Best for SaaS platforms, ecommerce websites, service websites, blogs, and businesses with technical ranking issues.",
  },
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description:
      "Custom websites and web applications built with performance, SEO, scalability, and conversion-focused architecture from the beginning.",
    features: [
      "Next.js, Vue.js, Django, Laravel, and PHP development",
      "PostgreSQL, MySQL, and modern database architecture",
      "Custom websites and web applications",
      "Performance-first frontend and backend structure",
      "SEO-ready URLs, metadata, and page structure",
      "Responsive and mobile-friendly design",
      "Secure backend development",
      "Analytics and conversion tracking setup",
    ],
    forWho:
      "Best for startups, service businesses, personal brands, and companies that need a custom website or web application with SEO built in.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Local SEO services to help businesses appear in Google Maps, local search results, location-based service searches, and nearby customer queries.",
    features: [
      "Google Business Profile optimization",
      "Local landing page strategy",
      "Local citation and NAP consistency",
      "LocalBusiness schema markup",
      "Review strategy and reputation signals",
      "Location keyword optimization",
      "Google Maps ranking improvements",
      "Local content and internal linking",
    ],
    forWho:
      "Best for restaurants, clinics, consultants, agencies, local service providers, ecommerce businesses, and Nepal-based businesses targeting local customers.",
  },
];

const process = [
  {
    step: "1",
    title: "SEO and Business Discovery",
    description:
      "I understand your business, target audience, services, current website, competitors, search goals, and the keywords you want to rank for.",
  },
  {
    step: "2",
    title: "Website Audit and Strategy",
    description:
      "I review your technical SEO, content, page structure, indexing status, Core Web Vitals, user experience, internal links, and search performance.",
  },
  {
    step: "3",
    title: "SEO and Development Implementation",
    description:
      "I implement technical fixes, optimize important pages, improve site structure, add schema markup, enhance content, and build SEO-friendly features.",
  },
  {
    step: "4",
    title: "Tracking and Ongoing Optimization",
    description:
      "I monitor rankings, impressions, clicks, traffic, Core Web Vitals, conversions, and technical health to improve performance over time.",
  },
];

const industries = [
  "SaaS and Technology",
  "Ecommerce",
  "Restaurants and Hospitality",
  "Local Businesses",
  "Marketing Agencies",
  "Startups",
  "Digital Products",
  "Professional Services",
  "Education Consultancies",
  "Finance and Loan Websites",
  "Real Estate Businesses",
  "Personal Brands",
];

const faqs = [
  {
    question: "What SEO services do you provide in Nepal?",
    answer:
      "I provide SEO services in Nepal including technical SEO, SEO audits, local SEO, on-page SEO, keyword research, content optimization, Core Web Vitals optimization, JavaScript SEO, schema markup, AEO, GEO, and SEO-friendly web development.",
  },
  {
    question: "Why should I hire an SEO expert in Nepal?",
    answer:
      "Hiring an SEO expert in Nepal helps your business improve Google visibility, attract qualified organic traffic, and compete for local and national search terms. I combine technical SEO, content strategy, local SEO, and development knowledge to build practical SEO systems.",
  },
  {
    question: "What is technical SEO and why is it important?",
    answer:
      "Technical SEO improves your website structure so search engines can crawl, render, index, and understand your content properly. It includes Core Web Vitals, JavaScript SEO, sitemap optimization, robots.txt, schema markup, canonical tags, redirects, mobile usability, and internal linking.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO usually takes time because Google needs to crawl, process, and evaluate changes. Some technical improvements may show results within a few weeks, while stronger ranking and traffic growth usually takes three to six months depending on competition, website condition, and content quality.",
  },
  {
    question: "Do you provide SEO audits in Nepal?",
    answer:
      "Yes, I provide SEO audits in Nepal for service websites, ecommerce websites, blogs, SaaS websites, and custom web applications. My audits review technical SEO, indexing, Core Web Vitals, content gaps, page structure, schema markup, internal linking, and search performance.",
  },
  {
    question: "Can you help with local SEO in Kathmandu and Nepal?",
    answer:
      "Yes, I help businesses improve local SEO in Kathmandu and across Nepal. This includes local landing pages, Google Business Profile optimization, LocalBusiness schema, location-based keywords, local citations, reviews, and Google Maps visibility.",
  },
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer:
      "SEO focuses on improving search engine rankings and organic traffic. AEO, or Answer Engine Optimization, focuses on making content suitable for direct answers, featured snippets, People Also Ask, and voice search. GEO, or Generative Engine Optimization, focuses on improving visibility in AI-powered and generative search experiences.",
  },
  {
    question: "Can you build SEO-friendly websites?",
    answer:
      "Yes, I build SEO-friendly websites using modern frameworks such as Next.js, Django, Laravel, Vue.js, and PHP. I focus on clean code, fast loading speed, mobile responsiveness, structured data, crawlable pages, clean URLs, and conversion-focused architecture.",
  },
  {
    question: "Do you optimize Core Web Vitals?",
    answer:
      "Yes, I optimize Core Web Vitals including LCP, INP, and CLS. I improve page speed, image delivery, JavaScript execution, server response time, caching, layout stability, and mobile performance.",
  },
  {
    question: "Who can benefit from your SEO and web development services?",
    answer:
      "My services are suitable for startups, local businesses, ecommerce websites, agencies, consultants, SaaS companies, service providers, personal brands, and international businesses that want better rankings, faster websites, and long-term organic growth.",
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO and Web Development Services in Nepal",
    description:
      "SEO services in Nepal including technical SEO, SEO audits, local SEO, Core Web Vitals optimization, AEO, GEO, and SEO-friendly web development.",
    serviceType: [
      "Technical SEO",
      "SEO Audit",
      "Local SEO",
      "Core Web Vitals Optimization",
      "Web Development",
      "AEO",
      "GEO",
    ],
    url: "https://rejishkhanal.com.np/services",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      jobTitle: "SEO Expert in Nepal and Full Stack Developer",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NP",
        addressLocality: "Kathmandu",
      },
      sameAs: [
        "https://github.com/rejish7",
        "https://linkedin.com/in/rejish-khanal-259395402",
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
      name: "SEO and Web Development Services",
      itemListElement: [...detailedServices, ...frameworkServices].map(
        (service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: `https://rejishkhanal.com.np${service.href}`,
          },
        })
      ),
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SEO and Web Development Services in Nepal",
    url: "https://rejishkhanal.com.np/services",
    description:
      "SEO services in Nepal for technical SEO, local SEO, SEO audits, Core Web Vitals, AEO, GEO, and SEO-friendly web development.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "SEO Services in Nepal",
      "Technical SEO Services",
      "SEO Audit Nepal",
      "Local SEO Services Nepal",
      "Web Development Nepal",
      "Core Web Vitals Optimization",
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
    <main className="min-h-screen">
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 via-background to-background">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />

          <p className="text-sm font-semibold text-primary mb-4">
            SEO Services in Nepal | Technical SEO | Local SEO | Web Development
          </p>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            SEO and Web Development Services in Nepal for Organic Growth
          </h1>

          <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
            I am Rejish Khanal, an SEO expert in Nepal and full stack developer
            based in Kathmandu. I help businesses improve search visibility,
            technical SEO, Core Web Vitals, local SEO, AEO, GEO, and website
            performance.
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Whether you need an SEO audit, technical SEO specialist, local SEO
            strategy, Next.js SEO support, or a fast SEO-friendly website, I can
            help you build a stronger foundation for long-term organic traffic
            and lead generation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Book an SEO Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request an SEO Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Service Pages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              SEO Services Designed to Improve Rankings, Traffic, and Conversions
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore my main SEO and web development services. Each service is
              built to solve a specific business problem, from technical SEO
              errors and slow page speed to local rankings, content visibility,
              and conversion-focused website development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {detailedServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  aria-label={service.cta}
                >
                  <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                    <CardHeader>
                      <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <CardTitle>{service.title}</CardTitle>

                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center text-primary font-semibold text-sm">
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Framework-Specific SEO and Development Services
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern frameworks need clean technical implementation to perform
              well in search. I help optimize Next.js, Django, and Laravel
              websites for speed, crawlability, structured data, and SEO-ready
              architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {frameworkServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  aria-label={service.cta}
                >
                  <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                    <CardHeader>
                      <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <CardTitle>{service.title}</CardTitle>

                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center text-primary font-semibold text-sm">
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Complete SEO and Web Development Support
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My services combine strategy, technical implementation, and
              performance-focused development so your website can rank better,
              load faster, and convert more visitors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {coreServices.map((service) => {
              const Icon = service.icon;

              return (
                <Card key={service.title} className="h-full">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <CardTitle>{service.title}</CardTitle>

                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <p className="text-sm text-muted-foreground">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-lg bg-accent/40 border">
                      <p className="text-sm font-semibold mb-1">Best for:</p>
                      <p className="text-sm text-muted-foreground">
                        {service.forWho}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AEO and GEO Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Bot className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                AEO and GEO Services for AI Search Visibility
              </h2>

              <div className="space-y-5 text-lg text-muted-foreground">
                <p>
                  Search is changing. People now use AI Overviews, featured
                  snippets, People Also Ask, voice search, and generative AI
                  platforms to find direct answers. That means your website
                  should not only rank in traditional search results. It should
                  also be structured to become a clear and trusted answer.
                </p>

                <p>
                  I optimize content for AEO, or Answer Engine Optimization,
                  by creating direct answers, FAQ sections, structured headings,
                  schema-ready content, and clear definitions. I also support
                  GEO, or Generative Engine Optimization, by improving topical
                  depth, entity clarity, internal links, and technical
                  accessibility for AI-powered search experiences.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/seo-expert-nepal">
                  <Button size="lg" variant="outline">
                    Learn About SEO, AEO, and GEO
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">
            How I Work With SEO and Web Development Clients
          </h2>

          <div className="space-y-8">
            {process.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {item.step}
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-6 text-center">
            Industries I Help With SEO and Website Growth
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            I work with businesses that need stronger organic visibility, faster
            websites, better search performance, and higher-quality leads from
            Google and other discovery platforms.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry}
                className="p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <p className="font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-8 text-center">
            Why Work With Rejish Khanal?
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "I combine SEO strategy with developer-level technical implementation.",
              "I understand technical SEO, full stack development, Core Web Vitals, JavaScript SEO, and structured data.",
              "I build websites with SEO-ready architecture instead of treating SEO as an afterthought.",
              "I help Nepal-based and international businesses improve organic visibility.",
              "I focus on search intent, technical clarity, content structure, and conversion-focused pages.",
              "I support traditional SEO, AEO, GEO, and AI search readiness.",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 p-5 rounded-lg border bg-background">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                <p className="text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Ready to Improve Your Rankings, Traffic, and Website Performance?
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how technical SEO, local SEO, content
            optimization, and SEO-friendly web development can help your
            business grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Schedule an SEO Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request an SEO Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions About SEO and Web Development Services"
        items={faqs}
      />
    </main>
  );
}