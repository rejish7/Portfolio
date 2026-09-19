"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, GitBranch, Search, Code2, Brain } from "lucide-react";

const pillars = [
  {
    icon: Search,
    number: "01",
    title: "Technical SEO Diagnostics",
    description:
      "Forensic analysis of Googlebot access logs, headless render queues, hydration execution cost, and complex Schema.org multi-type entity graphs. I identify crawl budget waste, indexation gaps, and rendering failures using verified network and DOM data.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Brain,
    number: "02",
    title: "AEO & GEO Specialization",
    description:
      "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) for AI-powered search. I structure content and technical infrastructure so AI agents like Google AI Overviews, ChatGPT Search, and Perplexity accurately extract and cite your entity facts from JSON-LD schemas.",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-900/20",
  },
  {
    icon: Code2,
    number: "03",
    title: "Full-Stack Engineering",
    description:
      "Native familiarity with Next.js App Router, Django middleware, Laravel pipelines, PostgreSQL indexing, Redis caching, Cloudflare Workers edge routing, and Vercel Edge Runtime. I write production-ready code that passes CI/CD and respects your repository standards.",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-100 dark:bg-orange-900/20",
  },
];

export function DualDiscipline() {
  return (
    <section className="w-full py-16 lg:py-24" aria-label="Why Rejish Khanal combines SEO and development">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div className="max-w-3xl flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-wider font-semibold">
              The Triple-Discipline Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Technical SEO, AEO/GEO, and Full-Stack Development — Under One Roof.
            </h2>
            <p className="text-muted-foreground text-lg">
              Traditional SEO consultants hand off 80-page PDFs that engineers cannot execute. I combine
              search architecture expertise with AEO/GEO specialization and hands-on code delivery — so
              your technical fixes actually ship.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 p-3 rounded-xl bg-card border border-border shadow-sm font-mono text-sm text-foreground">
            <GitBranch className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span>From Log Analysis → AEO/GEO → Git Commit</span>
          </div>
        </motion.div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* The Traditional Disconnect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-mono text-xs w-fit">
                <AlertTriangle className="h-4 w-4" />
                THE TRADITIONAL DISCONNECT
              </div>
              <h3 className="text-xl font-bold">
                The PDF Hand-off Problem
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Standard SEO consultants audit web properties by running canned crawlers and generating
                80-page PDFs. They demand engineers &quot;optimize hydration&quot;, &quot;fix canonical
                loops&quot;, or &quot;refactor CSS bundles&quot; without understanding Next.js runtime
                pipelines, database models, or release deployment schedules.
              </p>
              <p className="text-sm text-muted-foreground">
                Meanwhile, AI search engines (Google AI Overviews, ChatGPT Search, Perplexity) are
                reshaping how users find information — and most SEO consultants have no strategy for
                AEO or GEO optimization.
              </p>
            </div>
            <div className="mt-6 pt-4 bg-muted p-4 rounded-xl font-mono text-sm text-muted-foreground">
              <span className="text-red-600 dark:text-red-400 font-semibold">&times; Result:</span> Stalled
              tickets, zero organic growth, invisible in AI search, frustrated engineers.
            </div>
          </motion.div>

          {/* The Engineer-First SEO Solution - uses card style for visibility */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border-2 border-primary shadow-lg flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs w-fit">
                <CheckCircle className="h-4 w-4" />
                THE ENGINEER-FIRST REALITY
              </div>
              <h3 className="text-xl font-bold">
                Diagnose. Optimize for AI. Ship the Code.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I profile hydration bottlenecks in Chrome DevTools, inspect edge routing via Vercel
                and Cloudflare Workers, and optimize structured data for AI agent extraction. When
                duplicate facets or crawl bloat appear, I trace the query parameters, isolate the
                issue, and create clean, tested Pull Requests.
              </p>
              <p className="text-sm text-muted-foreground">
                Your site gets production-ready code that passes CI/CD, adheres to repository standards,
                and is optimized for both traditional search and AI-powered answer engines.
              </p>
            </div>
            <div className="mt-6 pt-4 bg-primary/5 border border-primary/20 p-4 rounded-xl font-mono text-sm text-foreground">
              <span className="text-green-600 dark:text-green-400 font-semibold">&check; Result:</span> Velocity preserved,
              AI search visibility, zero translation friction.
            </div>
          </motion.div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border shadow-sm flex flex-col gap-3"
              >
                <div className={`w-12 h-12 rounded-lg ${pillar.bg} flex items-center justify-center ${pillar.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs text-muted-foreground uppercase">
                  Pillar {pillar.number}
                </span>
                <h4 className="text-lg font-bold">{pillar.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
