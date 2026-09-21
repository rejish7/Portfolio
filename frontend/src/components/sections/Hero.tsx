"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "LCP", value: "1.4s", status: "Good" },
  { label: "INP", value: "82ms", status: "Good" },
  { label: "CLS", value: "0.02", status: "Good" },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "40-60%", label: "Organic Growth Delivered" },
  { value: "100%", label: "CWV Pass Rate" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-accent/30" aria-labelledby="hero-heading" role="banner">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background w-fit shadow-sm border border-border"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              <span className="text-xs font-medium text-muted-foreground">
                Available for technical audits &amp; direct implementation
              </span>
            </motion.div>

            {/* Label + H1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-2"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono">
                Technical SEO Expert &amp; Full-Stack Developer, Kathmandu, Nepal
              </span>
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Technical SEO Expert in Nepal | Rejish Khanal
              </h1>
            </motion.div>

            {/* Core value prop - expanded paragraph with keywords */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              I am Rejish Khanal, a <strong className="text-foreground">technical SEO expert</strong> and <strong className="text-foreground">full-stack developer</strong> based in <strong className="text-foreground">Kathmandu, Nepal</strong>. I audit and fix <strong className="text-foreground">crawlability</strong>, <strong className="text-foreground">indexing</strong>, <strong className="text-foreground">Core Web Vitals</strong>, <strong className="text-foreground">structured data</strong>, and <strong className="text-foreground">JavaScript rendering</strong> issues, then implement the fixes directly in your codebase. No handoff delays. Serving clients in the US, UK, Australia, and worldwide.
            </motion.p>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-6 pt-1"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
              role="group"
              aria-label="Primary actions"
            >
              <Link href="/contact">
                <Button size="lg" className="group">
                  Hire a Technical SEO Expert
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/seo-audit-nepal">
                <Button size="lg" variant="outline">
                  Request an SEO Audit
                </Button>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-semibold text-sm px-2 py-3 transition-colors"
              >
                View Case Studies <span className="font-mono" aria-hidden="true">→</span>
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-green-600" aria-hidden="true" />
                Kathmandu, Nepal
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-green-600" aria-hidden="true" />
                Serving US, UK, AU &amp; worldwide
              </span>
            </motion.div>
          </div>

          {/* Right Column: Diagnostic Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
            role="complementary"
            aria-label="Sample technical SEO diagnostic showing passing Core Web Vitals metrics"
          >
            <div className="relative rounded-2xl bg-card p-6 shadow-xl border border-border">
              {/* Terminal header */}
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

              {/* Crawl status */}
              <div className="p-4 rounded-xl bg-accent/50 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-foreground font-mono">Crawlability &amp; Bot Access</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">200 OK</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-muted-foreground">
                  <div>Robots.txt: <span className="text-foreground font-medium">Valid</span></div>
                  <div>Canonical: <span className="text-foreground font-medium">Self-Ref</span></div>
                  <div>Index Coverage: <span className="text-green-600 font-medium">Clean</span></div>
                  <div>Crawl Budget: <span className="text-green-600 font-medium">Optimized</span></div>
                </div>
              </div>

              {/* CWV metrics */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-foreground font-mono">Core Web Vitals</span>
                  <span className="text-[10px] font-bold text-green-600">Passing</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-accent/50 flex flex-col items-center text-center">
                      <span className="text-[10px] text-muted-foreground uppercase">{m.label}</span>
                      <span className="text-xl font-bold text-foreground mt-1">{m.value}</span>
                      <span className="text-[10px] text-green-600 font-semibold mt-0.5">{m.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schema status */}
              <div className="p-4 rounded-xl bg-accent/50 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-foreground font-mono">Schema &amp; AEO Readiness</span>
                  <span className="text-[10px] font-bold text-primary">Verified</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-background text-[11px] font-mono text-foreground">Organization</span>
                  <span className="px-2 py-0.5 rounded bg-background text-[11px] font-mono text-foreground">Person</span>
                  <span className="px-2 py-0.5 rounded bg-background text-[11px] font-mono text-foreground">Service</span>
                  <span className="px-2 py-0.5 rounded bg-background text-[11px] font-mono text-foreground">FAQPage</span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                <span>Live diagnostic sample</span>
                <CheckCircle2 className="h-4 w-4 text-green-600" aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
