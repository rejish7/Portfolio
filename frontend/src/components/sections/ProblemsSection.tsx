"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, TrendingDown, Zap, Code, Filter, Brain } from "lucide-react";

const problems = [
  {
    icon: Search,
    title: "Pages not getting indexed",
    description: "Crawl loops, noindex errors, and render budget limits block search bots from indexing your important pages.",
    link: "/technical-seo-specialist-nepal",
    linkText: "Fix indexing",
  },
  {
    icon: TrendingDown,
    title: "Organic traffic stopped growing",
    description: "Poor site architecture, cannibalized content, and weak internal linking dilute your domain authority.",
    link: "/seo-expert-nepal",
    linkText: "Diagnose barriers",
  },
  {
    icon: Zap,
    title: "Failing Core Web Vitals",
    description: "Slow load times, layout shifts, and unresponsive interactions hurt rankings and increase bounce rates.",
    link: "/core-web-vitals-optimization",
    linkText: "Optimize CWV",
  },
  {
    icon: Code,
    title: "JavaScript blocking SEO",
    description: "Client-side rendering hides content from search bots. SSR and hydration issues kill crawlability.",
    link: "/nextjs-seo-services",
    linkText: "Fix JS SEO",
  },
  {
    icon: Filter,
    title: "Traffic not converting",
    description: "Wrong keywords, missing schema, and poor landing page experience waste your organic traffic.",
    link: "/seo-audit-nepal",
    linkText: "Improve conversion",
  },
  {
    icon: Brain,
    title: "Invisible in AI answers",
    description: "No entity structure, no JSON-LD graphs, no citation-friendly content for ChatGPT, Perplexity, or Google AI Overviews.",
    link: "/aeo-expert-nepal",
    linkText: "Get AEO & GEO ready",
  },
];

export function ProblemsSection() {
  return (
    <section className="py-20 md:py-24 bg-background" aria-labelledby="problems-heading">
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
              Root Cause Resolution
            </span>
            <h2 id="problems-heading" className="text-3xl sm:text-4xl font-bold">
              What Technical SEO Problems Do I Fix?
            </h2>
            <p className="text-lg text-muted-foreground">
              Most visibility problems are not content problems. They are technical barriers. Rejish Khanal, a technical SEO specialist in Kathmandu, Nepal, identifies the root cause and implements the fix directly in your codebase.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex flex-col justify-between p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all gap-5"
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors" aria-hidden="true">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-bold">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                  <Link
                    href={problem.link}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {problem.linkText} <span className="font-mono" aria-hidden="true">→</span>
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
