"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Globe, Code2, Gauge, Database, Brain, Layout } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Technical SEO Audits",
    description:
      "I investigate technical barriers affecting crawling, rendering, indexation, website performance, and organic visibility. Findings are organized by impact, affected templates, implementation effort, and business relevance.",
    link: "/services",
    linkText: "Technical SEO Audit Services",
  },
  {
    icon: Globe,
    title: "Crawlability and Indexation",
    description:
      "I review robots directives, XML sitemaps, canonicals, redirects, internal links, duplicate URLs, thin page variations, crawl paths, and index coverage to determine why important pages are not being discovered or retained.",
  },
  {
    icon: Code2,
    title: "JavaScript and Next.js SEO",
    description:
      "I evaluate how JavaScript websites deliver content, metadata, internal links, canonical tags, structured data, and HTTP responses. This can include server-side rendering, static generation, client components, hydration, route handling, and caching.",
    link: "/nextjs-seo-services",
    linkText: "Next.js SEO Services",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals Optimization",
    description:
      "I investigate the templates, images, fonts, scripts, requests, and rendering behavior contributing to poor Largest Contentful Paint, Interaction to Next Paint, or Cumulative Layout Shift results.",
    link: "/core-web-vitals-optimization",
    linkText: "Core Web Vitals Optimization",
  },
  {
    icon: Database,
    title: "Structured Data and Entity Optimization",
    description:
      "I implement and validate relevant Schema.org markup where it accurately represents visible page content. This may include Person, ProfilePage, WebSite, WebPage, BreadcrumbList, Article, Service, or other relevant schema types.",
  },
  {
    icon: Brain,
    title: "AEO and GEO Readiness",
    description:
      "I improve the organization, accessibility, consistency, and factual clarity of website content so search and answer systems can interpret important information with less ambiguity.",
  },
  {
    icon: Layout,
    title: "SEO-Friendly Web Development",
    description:
      "I build and improve websites with search requirements included in the architecture. This covers crawlable navigation, semantic HTML, metadata systems, structured data, clean URLs, redirects, accessibility, performance, and content rendering.",
    link: "/services",
    linkText: "Web Development in Nepal",
  },
];

export function AboutServices() {
  return (
    <section className="w-full bg-muted/30 py-16 lg:py-24" aria-labelledby="services-rejish-offers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <span className="font-mono text-xs text-primary uppercase tracking-wider font-semibold">
              Areas of Expertise
            </span>
            <h2 id="services-rejish-offers" className="text-3xl sm:text-4xl font-bold tracking-tight">
              Technical SEO and Development Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  {service.link && (
                    <Link href={service.link} className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline mt-auto">
                      {service.linkText}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
