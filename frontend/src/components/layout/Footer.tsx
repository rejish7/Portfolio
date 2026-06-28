"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { SchemaScript } from "@/components/SchemaScript";

const socialLinks = [
  {
    name: "Rejish Khanal GitHub Profile",
    url: "https://github.com/rejish7",
    icon: Github,
  },
  {
    name: "Rejish Khanal LinkedIn Profile",
    url: "https://linkedin.com/in/rejish-khanal-259395402",
    icon: Linkedin,
  },
  {
    name: "Email Rejish Khanal",
    url: "mailto:contact@rejishkhanal.com.np",
    icon: Mail,
  },
];

const mainLinks = [
  {
    label: "About Rejish Khanal",
    href: "/about",
  },
  {
    label: "SEO and Web Development Services",
    href: "/services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "SEO Case Studies",
    href: "/case-studies",
  },
  {
    label: "Tech Stack",
    href: "/tech-stack",
  },
  {
    label: "SEO Blog",
    href: "/blog",
  },
  {
    label: "Contact SEO Specialist in Nepal",
    href: "/contact",
  },
];

const seoServiceLinks = [
  {
    label: "SEO Expert in Nepal",
    href: "/seo-expert-nepal",
  },
  {
    label: "Technical SEO Specialist in Nepal",
    href: "/technical-seo-specialist-nepal",
  },
  {
    label: "SEO Audit Services in Nepal",
    href: "/seo-audit-nepal",
  },
  {
    label: "Local SEO Services in Nepal",
    href: "/local-seo-services-nepal",
  },
  {
    label: "Core Web Vitals Optimization",
    href: "/core-web-vitals-optimization",
  },
  {
    label: "Next.js SEO Services",
    href: "/nextjs-seo-services",
  },
];

const developmentLinks = [
  {
    label: "Web Development in Nepal",
    href: "/web-development-nepal",
  },
  {
    label: "Django Developer in Nepal",
    href: "/django-developer-nepal",
  },
  {
    label: "Laravel Developer in Nepal",
    href: "/laravel-developer-nepal",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://rejishkhanal.com.np/#professionalservice",
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
    description:
      "Rejish Khanal is an SEO expert in Nepal, technical SEO specialist, and full stack developer based in Kathmandu, helping businesses improve Google rankings, Core Web Vitals, local SEO, AEO, GEO, and organic growth.",
    email: "contact@rejishkhanal.com.np",
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
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      jobTitle: "SEO Expert in Nepal and Technical SEO Specialist",
      sameAs: [
        "https://github.com/rejish7",
        "https://linkedin.com/in/rejish-khanal-259395402",
      ],
    },
    sameAs: [
      "https://github.com/rejish7",
      "https://linkedin.com/in/rejish-khanal-259395402",
    ],
    knowsAbout: [
      "SEO Expert in Nepal",
      "Technical SEO",
      "Local SEO",
      "Core Web Vitals",
      "JavaScript SEO",
      "Schema Markup",
      "AEO",
      "GEO",
      "Full Stack Web Development",
      "Next.js SEO",
      "Django Development",
      "Laravel Development",
    ],
    serviceType: [
      "SEO Services",
      "Technical SEO",
      "SEO Audit",
      "Local SEO",
      "Core Web Vitals Optimization",
      "Web Development",
    ],
  };

  return (
    <footer className="border-t border-border bg-background">
      <SchemaScript schema={organizationSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center text-lg font-semibold text-foreground hover:text-primary transition-colors">
              Rejish Khanal
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              SEO expert in Nepal, technical SEO specialist, and full stack
              developer based in Kathmandu. I help businesses improve Google
              rankings, fix technical SEO issues, optimize Core Web Vitals, and
              build fast, SEO-friendly websites.
            </p>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Kathmandu, Nepal
              </p>

              <p>
                Specializing in technical SEO, local SEO, SEO audits, AEO, GEO,
                JavaScript SEO, schema markup, Django, Laravel, and Next.js.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/seo-audit-nepal"
                className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                Request an SEO Audit
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                Contact Me
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Main Links */}
          <nav aria-label="Footer main navigation" className="space-y-4">
            <h2 className="text-sm font-semibold text-foreground">
              Quick Links
            </h2>

            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* SEO Services */}
          <nav aria-label="Footer SEO services navigation" className="space-y-4">
            <h2 className="text-sm font-semibold text-foreground">
              SEO Services
            </h2>

            <ul className="space-y-2">
              {seoServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Development and Connect */}
          <div className="space-y-8">
            <nav
              aria-label="Footer web development services navigation"
              className="space-y-4"
            >
              <h2 className="text-sm font-semibold text-foreground">
                Web Development
              </h2>

              <ul className="space-y-2">
                {developmentLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-foreground">
                Connect
              </h2>

              <div className="flex space-x-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                      rel={
                        link.url.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                      aria-label={link.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Rejish Khanal. SEO Expert in Nepal and Technical
              SEO Specialist. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/sitemap.xml"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                XML Sitemap
              </Link>

              <Link
                href="/robots.txt"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Robots.txt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}