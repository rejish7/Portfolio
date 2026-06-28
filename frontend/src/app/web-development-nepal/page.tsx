import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SchemaScript } from "@/components/SchemaScript";
import {
  ArrowRight,
  Code2,
  CheckCircle2,
  Gauge,
  Search,
  Server,
  Database,
  Smartphone,
  ShieldCheck,
  Layers,
  FileCode2,
  Globe2,
  BarChart3,
  MonitorCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Nepal | SEO-Friendly Website Developer",
  description:
    "SEO-friendly web development services in Nepal by Rejish Khanal. Build fast, crawlable, mobile-friendly, and rankable websites with Next.js, React, Django, Laravel, and SEO-first architecture.",
  keywords: [
    "web development Nepal",
    "web development services Nepal",
    "web developer Nepal",
    "website developer Nepal",
    "SEO-friendly web development",
    "SEO friendly website development Nepal",
    "full stack developer Nepal",
    "Next.js developer Nepal",
    "React developer Nepal",
    "Django developer Nepal",
    "Laravel developer Nepal",
    "website design Nepal",
    "technical SEO web development",
    "Core Web Vitals optimization Nepal",
    "SEO friendly website design",
    "custom web development Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/web-development-nepal",
  },
  openGraph: {
    title: "Web Development Nepal | SEO-Friendly Website Developer",
    description:
      "Build fast, scalable, crawlable, and SEO-ready websites with Rejish Khanal. Next.js, React, Django, Laravel, technical SEO, and Core Web Vitals optimization.",
    url: "https://rejishkhanal.com.np/web-development-nepal",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Nepal | Rejish Khanal",
    description:
      "SEO-friendly web development in Nepal using Next.js, React, Django, Laravel, clean architecture, Core Web Vitals, and technical SEO best practices.",
  },
};

export default function WebDevelopmentPage() {
  const techStack = [
    {
      icon: FileCode2,
      category: "Frontend Development",
      tech: "Next.js, React, Vue.js, TypeScript, Tailwind CSS",
      description:
        "Modern frontend development focused on fast loading, responsive layouts, clean components, accessibility, and SEO-friendly rendering.",
    },
    {
      icon: Server,
      category: "Backend Development",
      tech: "Node.js, Django, FastAPI, Laravel, PHP",
      description:
        "Secure and scalable backend systems for business websites, dashboards, APIs, booking systems, ecommerce features, and custom web applications.",
    },
    {
      icon: Database,
      category: "Database and Architecture",
      tech: "PostgreSQL, MySQL, MongoDB, Redis",
      description:
        "Database design, query optimization, caching, structured data storage, and scalable architecture for performance-focused websites.",
    },
    {
      icon: Globe2,
      category: "Deployment and DevOps",
      tech: "Vercel, AWS, DigitalOcean, Docker, GitHub Actions",
      description:
        "Reliable deployment, CI/CD, hosting setup, server configuration, caching, HTTPS, redirects, and production-ready performance optimization.",
    },
  ];

  const services = [
    {
      icon: Search,
      title: "SEO-Friendly Website Development",
      description:
        "I build websites with SEO-ready URLs, clean heading structure, metadata, internal links, schema markup, crawlable pages, and strong information architecture.",
    },
    {
      icon: Gauge,
      title: "Core Web Vitals Optimization",
      description:
        "I develop websites with performance in mind from day one by optimizing LCP, INP, CLS, image loading, JavaScript execution, caching, and mobile speed.",
    },
    {
      icon: Smartphone,
      title: "Responsive Website Development",
      description:
        "I create mobile-friendly websites that work smoothly across desktops, tablets, and phones with clean layouts, readable typography, and user-friendly navigation.",
    },
    {
      icon: Layers,
      title: "Custom Web Application Development",
      description:
        "I build custom web applications, dashboards, portals, CMS features, booking systems, lead generation tools, and business platforms based on your requirements.",
    },
    {
      icon: ShieldCheck,
      title: "Secure and Scalable Development",
      description:
        "I follow clean coding practices, secure backend logic, structured database design, authentication best practices, and scalable application architecture.",
    },
    {
      icon: BarChart3,
      title: "Analytics and Conversion Setup",
      description:
        "I can set up Google Analytics, Google Search Console, conversion tracking, contact forms, lead tracking, and performance monitoring for your website.",
    },
  ];

  const seoFeatures = [
    "SEO-friendly URL structure",
    "Server-rendered or statically generated pages where needed",
    "Optimized title tags and meta descriptions",
    "Clean H1, H2, and H3 heading hierarchy",
    "Schema markup and structured data support",
    "XML sitemap and robots.txt setup",
    "Canonical tag implementation",
    "Mobile-first responsive design",
    "Core Web Vitals optimization",
    "Fast image loading with WebP or AVIF support",
    "Internal linking structure",
    "Clean navigation and crawl depth planning",
    "Accessible HTML and semantic components",
    "Google Search Console and analytics setup",
    "Conversion-focused landing page structure",
  ];

  const websiteTypes = [
    "Business websites",
    "Portfolio websites",
    "SEO landing pages",
    "Service websites",
    "Agency websites",
    "Ecommerce websites",
    "Blog and content websites",
    "SaaS websites",
    "Booking websites",
    "Real estate websites",
    "Education consultancy websites",
    "Finance and loan websites",
    "Dashboards and admin panels",
    "Custom web applications",
    "Lead generation websites",
  ];

  const process = [
    {
      step: 1,
      title: "Discovery and Planning",
      description:
        "I understand your business, target audience, competitors, website goals, required pages, SEO targets, and technical requirements.",
    },
    {
      step: 2,
      title: "SEO-Friendly Architecture",
      description:
        "I plan the website structure, URL paths, page hierarchy, internal links, technical SEO setup, content sections, and conversion flow.",
    },
    {
      step: 3,
      title: "Design and Development",
      description:
        "I build a fast, responsive, clean, and scalable website using the right frontend, backend, database, and deployment stack for your project.",
    },
    {
      step: 4,
      title: "Technical SEO and Performance Setup",
      description:
        "I optimize metadata, schema, sitemap, robots.txt, Core Web Vitals, images, mobile usability, redirects, canonicals, and page speed.",
    },
    {
      step: 5,
      title: "Testing and Launch",
      description:
        "I test responsiveness, forms, links, speed, crawlability, indexing readiness, browser compatibility, and basic conversion tracking before launch.",
    },
    {
      step: 6,
      title: "Post-Launch Support",
      description:
        "After launch, I can help monitor performance, fix issues, improve SEO, add new features, and optimize based on real user behavior.",
    },
  ];

  const commonProblems = [
    "Website looks good but does not rank on Google",
    "Pages are not properly crawlable or indexable",
    "Website is slow on mobile devices",
    "Core Web Vitals are failing",
    "No proper title tags, meta descriptions, or heading structure",
    "No schema markup or structured data",
    "Poor internal linking and confusing navigation",
    "Generic template design that does not convert",
    "Heavy JavaScript affecting SEO and performance",
    "Images are too large and slow down the website",
    "No sitemap, robots.txt, or canonical setup",
    "Website is difficult to update or scale",
  ];

  const faqs = [
    {
      question: "What is SEO-friendly web development?",
      answer:
        "SEO-friendly web development means building a website in a way that search engines can crawl, index, understand, and rank properly. It includes clean code, fast loading speed, mobile-friendly design, semantic HTML, structured data, optimized URLs, metadata, internal linking, and Core Web Vitals optimization.",
    },
    {
      question: "Why should SEO be included during website development?",
      answer:
        "SEO should be included during development because fixing technical SEO after launch can be more expensive and time-consuming. When SEO is planned from the beginning, your website has a better structure, faster performance, cleaner URLs, stronger metadata, and better indexing readiness.",
    },
    {
      question: "Do you provide web development services in Nepal?",
      answer:
        "Yes, I provide web development services in Nepal for businesses, startups, agencies, service providers, ecommerce brands, personal websites, and international clients. I build SEO-friendly websites using modern frameworks such as Next.js, React, Django, Laravel, Vue.js, and PHP.",
    },
    {
      question: "Can you build a website that ranks on Google?",
      answer:
        "I can build a website with strong SEO foundations, clean technical structure, fast loading speed, crawlable pages, metadata, schema, internal links, and mobile-friendly design. Rankings also depend on content quality, competition, backlinks, topical authority, and ongoing SEO work.",
    },
    {
      question: "Which technologies do you use for web development?",
      answer:
        "I work with Next.js, React, Vue.js, TypeScript, Tailwind CSS, Django, FastAPI, Laravel, PHP, Node.js, PostgreSQL, MySQL, MongoDB, Redis, Vercel, DigitalOcean, AWS, Docker, and GitHub Actions.",
    },
    {
      question: "Can you optimize Core Web Vitals during development?",
      answer:
        "Yes, I build websites with Core Web Vitals in mind. I optimize LCP, INP, and CLS by improving image loading, JavaScript execution, caching, font loading, server response time, layout stability, and mobile performance.",
    },
    {
      question: "Do you build websites with Next.js?",
      answer:
        "Yes, I build Next.js websites using SEO-friendly architecture, metadata setup, server-side rendering or static generation where needed, structured data, optimized images, internal links, and performance-focused deployment.",
    },
    {
      question: "Do you build Django and Laravel websites?",
      answer:
        "Yes, I build Django and Laravel websites with secure backend logic, clean URL structure, database optimization, performance improvements, SEO-ready templates, and scalable architecture.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Yes, I can redesign an existing website and improve its structure, speed, user experience, content layout, SEO setup, technical performance, and conversion flow without losing important search visibility.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the number of pages, design complexity, features, content readiness, backend requirements, and SEO setup. A simple business website may take a few weeks, while custom web applications or ecommerce websites may take longer.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO-Friendly Web Development Services in Nepal",
    description:
      "SEO-friendly web development services in Nepal for fast, crawlable, mobile-friendly, and rankable websites using Next.js, React, Django, Laravel, and modern web technologies.",
    serviceType: "Web Development",
    url: "https://rejishkhanal.com.np/web-development-nepal",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      jobTitle: "Full Stack Developer and SEO Expert in Nepal",
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
      name: "Web Development Services",
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SEO-Friendly Web Development Services in Nepal",
    url: "https://rejishkhanal.com.np/web-development-nepal",
    description:
      "Web development services in Nepal for SEO-friendly, fast, crawlable, mobile-friendly, and conversion-focused websites.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "Web Development Nepal",
      "SEO-Friendly Web Development",
      "Full Stack Developer Nepal",
      "Next.js Developer Nepal",
      "Django Developer Nepal",
      "Laravel Developer Nepal",
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
        name: "Web Development Nepal",
        item: "https://rejishkhanal.com.np/web-development-nepal",
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
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={webPageSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <p className="text-sm font-semibold text-primary mb-4">
            Web Development Nepal | SEO-Friendly Websites | Full Stack Developer
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            SEO-Friendly Web Development Services in Nepal for Fast, Crawlable, and Rankable Websites
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, a full stack developer and SEO expert in
            Kathmandu, Nepal. I build fast, mobile-friendly, crawlable, and
            SEO-ready websites using modern technologies such as Next.js, React,
            Django, Laravel, Vue.js, PHP, and TypeScript.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            Most websites are designed first and optimized for SEO later. I take
            a different approach. I build websites with technical SEO, Core Web
            Vitals, clean architecture, structured data, performance, and
            conversion strategy from the beginning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Build Your SEO-Friendly Website
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request a Website SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        {/* SEO-Friendly Web Development */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Web Development Services Built With SEO From Day One
          </h2>

          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              A website should not only look good. It should load fast, work on
              mobile, be easy for users to navigate, and be simple for search
              engines to crawl and understand. SEO-friendly web development
              combines clean code, technical SEO, performance optimization, and
              content structure.
            </p>

            <p>
              I build websites that support organic growth by using proper page
              architecture, semantic HTML, structured data, optimized metadata,
              internal links, sitemap setup, robots.txt configuration, and fast
              loading performance.
            </p>

            <p>
              Whether you need a business website, portfolio website, service
              landing page, blog, ecommerce website, or custom web application,
              I can help you create a website that is built for both users and
              search engines.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Web Development Services I Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card key={service.title} className="h-full">
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

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Technology Stack I Use
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {techStack.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.category} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {item.category}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="font-semibold mb-3">{item.tech}</p>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Why SEO Must Be Built In */}
        <section className="mb-20 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-3xl font-bold mb-6">
            Why SEO Must Be Built Into Your Website
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            When SEO is ignored during development, websites often launch with
            problems that limit ranking potential. Fixing these issues later can
            take more time and money than planning them correctly from the start.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {seoFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Problems */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Common Website Problems I Help Fix
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Many websites fail to generate traffic because they were built
            without technical SEO and performance in mind. These are some of the
            most common issues I see in websites that need redesign or technical
            improvement.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {commonProblems.map((problem) => (
              <div
                key={problem}
                className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg border"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Website Types */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Types of Websites I Build
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            I build websites and web applications for businesses that need clean
            design, strong technical foundations, SEO-ready structure, and
            scalable functionality.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {websiteTypes.map((type) => (
              <div key={type} className="p-4 rounded-lg border bg-background">
                <p className="font-medium">{type}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My Web Development Process
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {process.map((item) => (
              <Card key={item.step}>
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-3">
                    {item.step}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nepal Section */}
        <section className="mb-20 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-start gap-4">
            <MonitorCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Web Development Services for Businesses in Nepal
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Businesses in Nepal need websites that do more than display
                  information. A strong website should attract users from search,
                  explain services clearly, load fast on mobile, generate leads,
                  and support long-term digital growth.
                </p>

                <p>
                  I help businesses in Kathmandu and across Nepal build
                  SEO-friendly websites that are fast, secure, scalable,
                  crawlable, and easy to maintain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO + Development Section */}
        <section className="mb-20 p-8 rounded-lg border bg-background">
          <div className="flex items-start gap-4">
            <Code2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Why Work With a Developer Who Understands SEO?
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Many developers can build websites, and many SEO specialists
                  can audit websites. But SEO-friendly development requires both
                  skills together. A developer who understands SEO can prevent
                  technical problems before they happen.
                </p>

                <p>
                  I combine full stack development with technical SEO knowledge
                  so your website can have clean code, strong performance,
                  structured content, crawlable pages, and a foundation that
                  supports ranking growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions About Web Development in Nepal
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-10 sm:p-12 text-center border border-primary/20">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Ready to Build a Website That Loads Fast, Ranks Better, and Converts?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s build an SEO-friendly website with clean architecture,
            fast performance, strong technical SEO, and a user experience that
            supports your business goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Start Your Website Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Audit My Current Website
              </Button>
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">
            Framework-Specific Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/nextjs-seo-services">
              <p className="font-semibold hover:text-primary transition-colors">
                Next.js SEO Services
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Optimize Next.js websites for metadata, rendering, structured
                data, Core Web Vitals, and crawlability.
              </p>
            </Link>

            <Link href="/django-developer-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                Django Developer in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Build secure, scalable, and SEO-friendly Django websites and
                backend applications.
              </p>
            </Link>

            <Link href="/laravel-developer-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                Laravel Developer in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Create fast, structured, and SEO-ready Laravel websites with
                clean backend architecture.
              </p>
            </Link>
          </div>
        </section>

        {/* Additional Related SEO Links */}
        <section className="mt-10">
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/technical-seo-specialist-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                Technical SEO Specialist in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Improve crawlability, indexing, schema, website architecture,
                and technical SEO performance.
              </p>
            </Link>

            <Link href="/core-web-vitals-optimization">
              <p className="font-semibold hover:text-primary transition-colors">
                Core Web Vitals Optimization
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Improve LCP, INP, CLS, mobile speed, page experience, and
                website performance.
              </p>
            </Link>

            <Link href="/seo-expert-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Get SEO strategy for rankings, traffic, content, local search,
                AEO, GEO, and organic growth.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}