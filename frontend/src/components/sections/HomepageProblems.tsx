"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Gauge, Bug, Brain, Code, FileJson } from "lucide-react";

const problems = [
  {
    icon: Search,
    title: "Low Google Rankings",
    description:
      "Your website is not appearing on the first page of Google for important keywords.",
    link: "/contact",
  },
  {
    icon: Gauge,
    title: "Poor Core Web Vitals",
    description:
      "Slow loading, poor LCP, high CLS, and bad INP scores hurting your rankings.",
    link: "/contact",
  },
  {
    icon: Bug,
    title: "Crawl Errors",
    description:
      "Google Search Console shows crawl errors, 404s, and indexing issues.",
    link: "/contact",
  },
  {
    icon: Brain,
    title: "Not Ready for AI Search",
    description:
      "Your website is not optimized for ChatGPT Search, Perplexity, or Google AI Overviews.",
    link: "/contact",
  },
  {
    icon: Code,
    title: "JavaScript SEO Issues",
    description:
      "Your Next.js or React website is not being properly crawled or indexed by Google.",
    link: "/contact",
  },
  {
    icon: FileJson,
    title: "No Structured Data",
    description:
      "Missing schema markup means missing rich snippets and entity recognition.",
    link: "/contact",
  },
];

export function HomepageProblems() {
  return (
    <section className="py-20 md:py-24 bg-background" aria-labelledby="homepage-problems-heading">
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
              Common Problems
            </span>
            <h2 id="homepage-problems-heading" className="text-3xl sm:text-4xl font-bold">
              Are You Facing These Technical SEO Problems?
            </h2>
            <p className="text-lg text-muted-foreground">
              These are the most common technical SEO issues businesses in Nepal
              face. Rejish Khanal fixes all of them.
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
                    Get in touch <span className="font-mono" aria-hidden="true">→</span>
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
