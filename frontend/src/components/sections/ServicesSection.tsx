"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, Network, Bot, Code2 } from "lucide-react";

const services = [
  {
    number: "01",
    label: "AUDIT & INFRASTRUCTURE",
    icon: Terminal,
    title: "Technical SEO",
    description: "Crawl diagnostics, indexation fixes, canonical conflicts, Search Console validation, and Core Web Vitals optimization.",
    tags: ["Crawl Audits", "JS SEO", "GSC", "Schema"],
    link: "/technical-seo-specialist-nepal",
    linkText: "Explore Technical SEO",
  },
  {
    number: "02",
    label: "ARCHITECTURE & TAXONOMY",
    icon: Network,
    title: "Search Strategy",
    description: "Keyword architectures, internal linking silos, and topical authority that guides search engines to your most valuable pages.",
    tags: ["Topical Clusters", "Link Silos", "Local SEO", "Taxonomies"],
    link: "/seo-expert-nepal",
    linkText: "Explore Search Strategy",
  },
  {
    number: "03",
    label: "LLM & ENTITY MODELING",
    icon: Bot,
    title: "AEO & GEO",
    description: "Answer Engine Optimization and Generative Engine Optimization. Entity structure, citation formatting, and AI search readiness.",
    tags: ["Entity Graphs", "Answer Engines", "JSON-LD", "Citations"],
    link: "/aeo-expert-nepal",
    linkText: "Explore AEO & GEO",
    accent: true,
  },
  {
    number: "04",
    label: "DIRECT ENGINEERING",
    icon: Code2,
    title: "SEO Development",
    description: "Full-stack development and direct code fixes in Next.js, Django, Laravel. Fast, accessible, and structured correctly.",
    tags: ["Next.js", "Django", "Laravel", "Direct Code"],
    link: "/web-development-nepal",
    linkText: "Explore Development",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-background" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3 max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono">
              Specialized Disciplines
            </span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold">
              Technical SEO &amp; Web Development Services in Nepal
            </h2>
            <p className="text-lg text-muted-foreground">
              Each service solves a specific technical barrier to search visibility. Choose what your website needs. Rejish Khanal provides direct implementation, not just recommendations.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between gap-5 hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold font-mono ${service.accent ? "text-green-600" : "text-primary"}`}>
                        {service.number} / {service.label}
                      </span>
                      <Icon className={`h-5 w-5 ${service.accent ? "text-green-600" : "text-primary"}`} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded bg-accent text-[11px] font-medium text-foreground">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={service.link}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors pt-1 ${service.accent ? "text-green-600 hover:text-green-700" : "text-primary hover:text-primary/80"}`}
                  >
                    {service.linkText} <span className="font-mono" aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
