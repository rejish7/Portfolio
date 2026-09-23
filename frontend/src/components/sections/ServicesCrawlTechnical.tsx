"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Network } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    tag: "AUDIT & LOG ANALYSIS",
    title: "Comprehensive Technical Audit & Codebase Review",
    description:
      "Deep-dive algorithmic & structural analysis. We uncover canonical mismatch chains, pagination traps, non-rendering JS components, orphan URLs, crawl budget waste, and raw server access logs to observe bot behavior directly.",
    checklist: [
      "Server log analysis (Googlebot vs desktop user behavior)",
      "Crawl budget allocation & parameter facet cleanup",
      "Prioritized GitHub / Jira issues formatted for your engineering team",
    ],
    deliverable: { label: "Repo Audit", value: "Actionable PRs" },
    cta: "Request Technical Audit →",
    href: "/technical-seo-expert-nepal",
  },
  {
    tag: "JAVASCRIPT SEO",
    title: "JavaScript & Headless Framework Diagnostics",
    description:
      "Specialized for Next.js, React, Nuxt, and Vue architectures. We resolve rendering queue timeouts, hydration mismatches that strip critical semantic DOM tags, and edge rendering flaws that cause Googlebot to see empty shells.",
    checklist: [
      "DOM snapshot vs initial HTML payload diff inspection",
      "SSR, SSG, and ISR routing & dynamic metadata tuning",
      "Hydration error isolation & client-side link resolution",
    ],
    frameworks: "Next.js • React • Vue",
    cta: "Fix JavaScript Rendering →",
    href: "/technical-seo-expert-nepal",
  },
  {
    tag: "CWV & CRUX PASSING",
    tagColor: "bg-primary/10 text-primary border-primary/20",
    title: "Core Web Vitals & Real-User Performance",
    description:
      "Targeted code refactoring to pass Google's 75th-percentile real-user metrics (CrUX). We resolve Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) right in the templates.",
    checklist: [
      "Main-thread task profiling & INP event handler unblocking",
      "LCP priority hints, CDN edge cache & critical CSS extraction",
      "Font subsetting, zero layout shifts, image decoding pipelines",
    ],
    targets: "LCP < 2.0s • INP < 150ms",
    cta: "Optimize Web Vitals →",
    href: "/technical-seo-expert-nepal",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ServicesCrawlTechnical() {
  return (
    <section className="bg-accent/20 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground/70 mb-4">
            <Network className="w-4 h-4" />
            Category 01 // Root Architecture
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            Diagnose &amp; Fix Technical SEO Barriers
          </h2>
          <p className="text-foreground/70 text-base lg:text-lg leading-relaxed mb-6">
            Search engines cannot rank what they cannot efficiently crawl, render, and index. We resolve
            deep infrastructure debt rather than patching symptoms.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <span
                className={`inline-block self-start text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-border mb-4 ${
                  card.tagColor ?? "bg-muted/50 text-muted-foreground"
                }`}
              >
                {card.tag}
              </span>

              <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                {card.title}
              </h3>

              <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                {card.description}
              </p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {card.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Deliverable / Frameworks / Targets */}
              <div className="mb-6">
                {card.deliverable && (
                  <div className="flex items-center gap-2 text-xs font-mono text-foreground/70">
                    <span className="text-foreground font-semibold">{card.deliverable.label}:</span>
                    <span>{card.deliverable.value}</span>
                  </div>
                )}
                {card.frameworks && (
                  <div className="text-xs font-mono text-muted-foreground">
                    <span className="text-foreground font-semibold">Frameworks:</span>{" "}
                    {card.frameworks}
                  </div>
                )}
                {card.targets && (
                  <div className="text-xs font-mono text-muted-foreground">
                    <span className="text-foreground font-semibold">Targets:</span>{" "}
                    {card.targets}
                  </div>
                )}
              </div>

              <Link
                href={card.href}
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto"
              >
                {card.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
