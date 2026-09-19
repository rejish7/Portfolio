"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Search,
  Cpu,
  ArrowRight,
  Activity,
  FileSearch,
  Gauge,
  Globe,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const quickJumpItems = [
  { label: "All Services (9)", href: "#all-services", active: true },
  { label: "Crawl & Technical SEO", href: "#crawl-technical-seo", active: false },
  { label: "AI Search (AEO & GEO)", href: "#ai-search", active: false },
  { label: "Information Architecture & Local", href: "#info-arch-local", active: false },
  { label: "SEO-First Engineering", href: "#seo-engineering", active: false },
  { label: "Engagement Models", href: "#engagement", active: false },
];

const diagnosticProblems = [
  {
    id: "not-indexed",
    label: "Key pages discovered, not indexed",
    icon: FileSearch,
    recommendation:
      "Index bloat, noindex misuse, canonical drift, or thin-content filtering. I will audit your index coverage, correct directives, and resolve duplication at the template level.",
    service: "Index Coverage Audit & Fix",
    href: "#index-coverage",
  },
  {
    id: "crux-failing",
    label: "CrUX / CWV failing in GSC",
    icon: Gauge,
    recommendation:
      "LCP, INP, or CLS regressions caused by render-blocking assets, oversized images, layout instability, or server TTFB. I profile field data and patch the root cause in your stack.",
    service: "Core Web Vitals Remediation",
    href: "#cwv-remediation",
  },
  {
    id: "csr-gaps",
    label: "Client-side rendering gaps",
    icon: RefreshCw,
    recommendation:
      "JavaScript-heavy SPAs where content is invisible to crawlers or AI scrapers. I implement SSR, ISR, or pre-rendering with Next.js or Django templates to guarantee server-rendered HTML.",
    service: "JavaScript SEO & SSR Implementation",
    href: "#js-seo",
  },
  {
    id: "aeo-invisible",
    label: "Invisible to Perplexity & AEO",
    icon: Sparkles,
    recommendation:
      "Missing structured data, weak entity signals, or absent FAQ/HowTo schema. I build JSON-LD graphs, optimize for AI citation, and verify visibility across Perplexity, ChatGPT, and Gemini.",
    service: "AEO & GEO Structured Data Build",
    href: "#aeo-geo",
  },
  {
    id: "migration",
    label: "Redesign / New build migration",
    icon: Globe,
    recommendation:
      "URL structure changes, missing 301 redirects, lost internal links, or broken canonicals during migration. I plan and execute full migration SEO with zero ranking loss.",
    service: "Migration SEO & Redirect Engineering",
    href: "#migration-seo",
  },
];

export function ServicesHero() {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

  const activeProblem = diagnosticProblems.find((p) => p.id === selectedProblem);

  return (
    <section className="py-8" aria-labelledby="services-hero-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          aria-label="Breadcrumb"
          className="mb-8"
        >
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            <li className="flex items-center gap-2">
              <Link href="/" className="text-primary hover:underline">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
            </li>
            <li>
              <span className="text-muted-foreground">Services Hub</span>
            </li>
          </ol>
        </motion.nav>

        <div className="flex flex-col gap-10">
          {/* Status Badge */}
          <motion.div variants={fadeUp} custom={1} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background w-fit shadow-sm border border-border text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse" aria-hidden="true" />
              Practical Search Strategy &amp; Direct Implementation
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            id="services-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl"
          >
            Technical SEO &amp; Engineering Services Organized Around Problems
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="text-lg text-foreground/70 max-w-3xl leading-relaxed"
          >
            Rather than selling generic monthly retainers or churning automated PDF checklists, I
            diagnose what is actively preventing your site from crawling, indexing, ranking, or
            converting, and engineer the exact solution directly into your codebase.
          </motion.p>

          {/* Scope Pills */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3"
          >
            {[
              "Dual Discipline: Screaming Frog / CrUX + TypeScript / Next.js / Django",
              "Zero Outsourcing: Direct dev-ticket & PR-level delivery",
            ].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground"
              >
                <Search className="h-3.5 w-3.5 text-primary flex-shrink-0" aria-hidden="true" />
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Quick Jump Navigation */}
          <motion.div
            variants={fadeUp}
            custom={5}
            initial="hidden"
            animate="visible"
            className="overflow-x-auto -mx-6 px-6 lg:-mx-12 lg:px-12"
          >
            <div className="flex gap-2 min-w-max pb-2">
              {quickJumpItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    item.active
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Interactive Diagnostic Matcher */}
          <motion.div
            variants={fadeUp}
            custom={6}
            initial="hidden"
            animate="visible"
            className="rounded-2xl bg-card p-6 shadow-xl border border-border"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/70" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-green-400/70" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <Activity className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-sm font-semibold text-foreground">
                    Interactive Diagnostic Matcher
                  </span>
                </div>
              </div>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/10 text-[11px] font-mono font-bold text-primary uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                CRAWL_STATUS: READY
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-6">
              What symptom is actively degrading your organic search performance right now?
            </p>

            {/* Problem Selector Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {diagnosticProblems.map((problem) => {
                const Icon = problem.icon;
                const isSelected = selectedProblem === problem.id;
                return (
                  <button
                    key={problem.id}
                    onClick={() => setSelectedProblem(isSelected ? null : problem.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-background text-muted-foreground border-border hover:bg-accent hover:text-foreground hover:border-accent-foreground/20"
                    }`}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    {problem.label}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Response Box */}
            {activeProblem && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-accent/50 p-5 border border-border"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cpu className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground leading-relaxed mb-3">
                      {activeProblem.recommendation}
                    </p>
                    <Link
                      href={activeProblem.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Jump to Service: {activeProblem.service}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
