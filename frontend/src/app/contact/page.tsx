import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Search,
  Code2,
  FileSearch,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/sections/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SchemaScript } from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Contact SEO Expert Nepal | Hire Rejish Khanal",
  description:
    "Contact an SEO expert in Kathmandu for SEO audits, technical SEO, local SEO, AEO, and web development.",
  keywords: [
    "contact SEO expert in Nepal",
    "hire SEO expert Nepal",
    "hire technical SEO expert Nepal",
    "SEO consultation Nepal",
    "technical SEO audit Nepal",
    "local SEO Kathmandu",
    "SEO expert Kathmandu contact",
    "web development Nepal contact",
    "hire Rejish Khanal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/contact",
  },
  openGraph: {
    title: "Contact Rejish Khanal | SEO Expert in Nepal",
    description:
      "Get in touch with Rejish Khanal for technical SEO audits, local SEO, Core Web Vitals optimization, AEO, GEO, and SEO-friendly web development.",
    url: "https://rejishkhanal.com.np/contact",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://rejishkhanal.com.np/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Rejish Khanal - SEO Expert in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SEO Expert in Nepal | Rejish Khanal",
    description:
      "Contact Rejish Khanal for SEO audits, technical SEO, local SEO, Core Web Vitals, AEO, GEO, and web development services.",
    images: ["https://rejishkhanal.com.np/og-image.jpg"],
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@rejishkhanal.com.np",
    href: "mailto:contact@rejishkhanal.com.np",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "9862766994",
    href: "tel:+9779862766994",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: "https://wa.me/9779862766994?text=Hi%20Rejish%2C%20I%20need%20help%20with%20SEO%20or%20web%20development.",
  },
];

const services = [
  {
    icon: FileSearch,
    title: "SEO Audit",
    description:
      "Get a detailed SEO audit for technical issues, indexing problems, Core Web Vitals, content gaps, and ranking barriers.",
    href: "/seo-audit-nepal",
  },
  {
    icon: Search,
    title: "Technical SEO",
    description:
      "Fix crawlability, indexing, JavaScript SEO, schema markup, internal links, redirects, and technical ranking issues.",
    href: "/technical-seo-expert-nepal",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Improve Google Maps ranking, Google Business Profile visibility, local citations, reviews, and Kathmandu search visibility.",
    href: "/local-seo-services-nepal",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Build fast, crawlable, mobile-friendly, and SEO-ready websites using Next.js, React, Django, Laravel, and modern tools.",
    href: "/web-development-nepal",
  },
];

const reasons = [
  "Work directly with an SEO expert and full stack developer.",
  "Get support for technical SEO, local SEO, AEO, GEO, and web development.",
  "Receive practical recommendations based on your website, goals, and competition.",
  "Improve crawlability, indexing, Core Web Vitals, content structure, and organic visibility.",
  "Available for businesses worldwide on remote projects.",
];

const faqs = [
  {
    question: "How can I contact Rejish Khanal for SEO services?",
    answer:
      "You can contact Rejish Khanal through the contact form, email at contact@rejishkhanal.com.np, or phone at 9862766994. You can ask about SEO audits, technical SEO, local SEO, AEO, GEO, Core Web Vitals, and web development projects.",
  },
  {
    question: "Do you provide SEO consultation in Nepal?",
    answer:
      "Yes, I provide SEO consultation in Nepal for businesses, startups, agencies, service providers, ecommerce websites, and personal brands. I help with technical SEO, local SEO, SEO audits, content optimization, and organic growth strategy.",
  },
  {
    question: "Can I hire you for a technical SEO audit?",
    answer:
      "Yes, you can hire me for a technical SEO audit. I review crawlability, indexing, Core Web Vitals, JavaScript SEO, schema markup, redirects, canonical tags, internal linking, and Google Search Console issues.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with international clients remotely. I can support SEO audits, technical SEO, Core Web Vitals optimization, local SEO, and SEO-friendly web development for businesses outside Nepal.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "Please include your website URL, target services, main SEO problem, target location, and business goals. This helps me understand your project faster and give a better response.",
  },
];

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Rejish Khanal",
    url: "https://rejishkhanal.com.np/contact",
    description:
      "Contact Rejish Khanal for SEO audits, technical SEO, local SEO, AEO, GEO, Core Web Vitals optimization, and SEO-friendly web development services in Nepal.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "SEO Consultation Nepal",
      "Technical SEO Audit Nepal",
      "Local SEO Kathmandu",
      "SEO Expert in Nepal",
      "Web Development Nepal",
    ],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://rejishkhanal.com.np/#professionalservice",
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
    description:
      "Rejish Khanal is a technical SEO expert and full-stack developer based in Kathmandu, Nepal.",
    email: "contact@rejishkhanal.com.np",
    telephone: "9862766994",
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
    founder: {
      "@type": "Person",
      "@id": "https://rejishkhanal.com.np/#person",
      name: "Rejish Khanal",
    },
    serviceType: [
      "SEO Audit",
      "Technical SEO",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "Core Web Vitals Optimization",
      "Web Development",
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://rejishkhanal.com.np/#person",
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
    email: "contact@rejishkhanal.com.np",
    telephone: "9862766994",
    jobTitle: ["Technical SEO Expert", "Full-Stack Developer"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressLocality: "Kathmandu",
    },
    knowsAbout: [
      "Technical SEO",
      "SEO Audit",
      "Core Web Vitals",
      "JavaScript SEO",
      "Schema Markup",
      "AEO",
      "GEO",
      "Web Development",
      "Next.js",
      "Django",
      "Laravel",
    ],
    sameAs: [
      "https://www.linkedin.com/in/rejishkhanalseo/",
      "https://github.com/rejish7",
      "https://x.com/KhanalRejish",
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
        name: "Contact",
        item: "https://rejishkhanal.com.np/contact",
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
    <main className="pt-24 pb-24">
      <SchemaScript schema={contactPageSchema} />
      <SchemaScript schema={professionalServiceSchema} />
      <SchemaScript schema={personSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        <section className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-4">
            Contact SEO Expert in Nepal | Technical SEO | Local SEO | Web Development
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Hire Rejish Khanal for SEO, Technical SEO, and Web Development
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Get in touch to discuss SEO audits, technical SEO, local SEO, Core
            Web Vitals optimization, AEO, GEO, or SEO-friendly web development.
            I work with clients worldwide on remote projects.
          </p>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Share your website URL, business goals, target keywords, and the
            main problem you want to solve. I will review your request and reply
            with the next best step.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Contact Information
              </h2>

              <p className="text-sm text-muted-foreground">
                Use the form or contact me directly for SEO consultation,
                technical SEO audits, local SEO, and web development projects.
              </p>
            </div>

            {contactInfo.map((info) => {
              const Icon = info.icon;

              const content = (
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              );

              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className="block"
                  aria-label={`${info.label}: ${info.value}`}
                >
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Response Time
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  I usually respond within 24 to 48 hours. For faster review,
                  include your website URL, target service, and main SEO or
                  development challenge.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-3">
                Send a Message
              </h2>

              <p className="text-muted-foreground mb-6">
                Tell me about your project, website, SEO issue, or development
                requirement. I will reply with a clear next step.
              </p>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              What You Can Contact Me For
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I help businesses improve organic visibility, technical website
              performance, local search rankings, and SEO-friendly website
              architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link key={service.href} href={service.href}>
                  <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                    <CardHeader>
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <CardTitle className="text-lg">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>

                      <div className="flex items-center text-primary text-sm font-semibold">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Why Contact Me */}
        <section className="mb-20 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-3xl font-bold mb-6">
            Why Contact Me for SEO and Web Development?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
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
          <Globe2 className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Ready to Improve Your SEO, Rankings, and Website Performance?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact me today for SEO audits, technical SEO, local SEO, Core Web
            Vitals optimization, AEO, GEO, or SEO-friendly web development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/9779862766994?text=Hi%20Rejish%2C%20I%20need%20help%20with%20SEO%20or%20web%20development."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="group bg-[#25D366] hover:bg-[#1da851] text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request an SEO Audit
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}