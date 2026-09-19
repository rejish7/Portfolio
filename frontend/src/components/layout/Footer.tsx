"use client";

import Link from "next/link";
import {
  Github,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { SchemaScript } from "@/components/SchemaScript";

const socialLinks = [
  {
    name: "Rejish Khanal on LinkedIn",
    url: "https://www.linkedin.com/in/rejishkhanalseo/",
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Rejish Khanal GitHub Profile",
    url: "https://github.com/rejish7",
    icon: Github,
  },
  {
    name: "Rejish Khanal on X",
    url: "https://x.com/KhanalRejish",
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
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
      "Rejish Khanal is an independent technical SEO specialist and full-stack developer based in Kathmandu, Nepal. He helps businesses improve crawlability, indexing, Core Web Vitals, structured data, and organic search visibility.",
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
      "@id": "https://rejishkhanal.com.np/#person",
      name: "Rejish Khanal",
    },
    serviceType: [
      "Technical SEO",
      "SEO Audit",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
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
              Independent technical SEO specialist and full-stack developer
              based in Kathmandu, Nepal. I help businesses improve search
              visibility through technical SEO audits, AEO, GEO, Core Web
              Vitals optimization, and SEO-friendly web development.
            </p>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Kathmandu, Nepal
              </p>

              <p>
                Specializing in technical SEO, AEO, GEO, Core Web Vitals,
                JavaScript SEO, Next.js, Django, and Laravel.
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
              © {currentYear} Rejish Khanal. Independent Technical SEO
              Specialist and Full-Stack Developer. All rights reserved.
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