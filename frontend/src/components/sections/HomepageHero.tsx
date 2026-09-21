"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function HomepageHero() {
  return (
    <section className="relative overflow-hidden bg-accent/30" aria-labelledby="hero-heading" role="banner">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-5"
          >
            {/* Status Badge */}
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background w-fit shadow-sm border border-border text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse" aria-hidden="true" />
                Available for technical audits &amp; direct implementation • Kathmandu &amp; Remote (US/UK/AU)
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-xs font-semibold uppercase tracking-wider text-primary font-mono"
            >
              Technical SEO Expert &amp; Full-Stack Developer, Kathmandu, Nepal
            </motion.p>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              custom={2}
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
            >
              Technical SEO Expert in Nepal, I Fix What&apos;s Preventing Your Website from Ranking on Google
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              I help businesses improve crawlability, indexing, Core Web Vitals, organic visibility, and
              AI search readiness. I can audit the problem, explain what matters in clear terms, and
              implement the technical fixes directly in your codebase.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap items-center gap-4 pt-2"
              role="group"
              aria-label="Primary actions"
            >
              <Button asChild size="lg">
                <Link href="/contact">Request a Website Review</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors px-2 py-3"
              >
                Explore My Services <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="flex items-start gap-2 text-sm text-muted-foreground pt-2 max-w-xl"
            >
              <Globe className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>
                Based in Kathmandu, Nepal • Supporting founders, agencies, SaaS, and e-commerce across
                Australia, UK, US &amp; worldwide.
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column – Diagnostic Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-5"
            role="complementary"
            aria-label="Sample technical SEO diagnostic showing passing Core Web Vitals metrics"
          >
            <div className="rounded-2xl bg-card p-6 shadow-xl border border-border">
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/70" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-green-400/70" aria-hidden="true" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground">telemetry_inspector.ts</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-accent text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Diagnostic Mode
                </span>
              </div>

              {/* Crawlability & Bot Access */}
              <div className="p-4 rounded-xl bg-accent/50 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-foreground font-mono">Crawlability &amp; Bot Access</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">200 OK</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-muted-foreground">
                  <div>Robots.txt: <span className="text-foreground font-medium">Strict Dynamic</span></div>
                  <div>Canonical Logic: <span className="text-foreground font-medium">Self-Ref 100%</span></div>
                  <div>Index Coverage: <span className="text-foreground font-medium">Zero-Waste URL</span></div>
                  <div>Budget Waste: <span className="text-green-600 font-medium">0.0% Low-Value</span></div>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-foreground font-mono">Google Core Web Vitals (Field Real-User P75)</span>
                  <span className="text-[10px] font-bold text-green-600">Passing All Signals</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 rounded-xl bg-accent/50 flex flex-col items-center text-center">
                    <span className="text-[10px] text-muted-foreground uppercase">LCP Mobile</span>
                    <span className="text-xl font-bold text-foreground mt-1">1.4s</span>
                    <span className="text-[10px] text-green-600 font-semibold mt-0.5">Good (&lt; 2.5s)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-accent/50 flex flex-col items-center text-center">
                    <span className="text-[10px] text-muted-foreground uppercase">INP Speed</span>
                    <span className="text-xl font-bold text-foreground mt-1">82ms</span>
                    <span className="text-[10px] text-green-600 font-semibold mt-0.5">Good (&lt; 200ms)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-accent/50 flex flex-col items-center text-center">
                    <span className="text-[10px] text-muted-foreground uppercase">CLS Shift</span>
                    <span className="text-xl font-bold text-foreground mt-1">0.02</span>
                    <span className="text-[10px] text-green-600 font-semibold mt-0.5">Good (&lt; 0.10)</span>
                  </div>
                </div>
              </div>

              {/* Schema & AEO Readiness */}
              <div className="p-4 rounded-xl bg-accent/50 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-foreground font-mono">Schema &amp; AEO Readiness</span>
                  <span className="text-[10px] font-bold text-primary">Entity Verified</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-background text-[11px] font-mono text-foreground">Organization • Valid</span>
                  <span className="px-2 py-0.5 rounded bg-background text-[11px] font-mono text-foreground">Person • Valid</span>
                  <span className="px-2 py-0.5 rounded bg-background text-[11px] font-mono text-foreground">Service • Graph Linked</span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                <span>Live diagnostic sample • No automated generic report bloat.</span>
                <span className="text-green-600" aria-label="Verified">✓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
