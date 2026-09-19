"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    category: "E-Commerce",
    slug: "technical-seo-ecommerce",
    title: "Eliminated 45,000+ Duplicate URLs to Reclaim Indexation",
    problem: "Faceted navigation generating 45,000+ duplicate URLs, consuming crawl budget and trapping product pages in 'Discovered – currently not indexed'.",
    actions: "Audited URL parameters, restructured canonical logic, implemented robots.txt boundaries, and fixed internal linking.",
    result: "-88%",
    resultLabel: "Crawl bloat reduced in 21 days",
    resultDetail: "Full recovery of product indexation. Previously trapped SKU catalogs now indexed in SERP.",
    status: "Resolved",
  },
  {
    category: "SaaS",
    slug: "core-web-vitals-saas",
    title: "Fixed Next.js Core Web Vitals to Pass Mobile Thresholds",
    problem: "Next.js portal failing LCP (4.8s) and INP (340ms) on mobile, causing bounce spikes on paid and organic landing pages.",
    actions: "De-bloated bundles, moved assets to next/image with AVIF, eliminated blocking third-party scripts, optimized SSR caching.",
    result: "1.3s",
    resultLabel: "LCP improved from 4.8s",
    resultDetail: "INP dropped to 68ms. 100% of URLs passed CrUX field thresholds.",
    status: "Passed CrUX",
    resultColor: "text-green-600",
  },
  {
    category: "Hospitality",
    slug: "local-seo-restaurant",
    title: "Built Entity Graphs for Multi-Location Local SEO",
    problem: "Missing localized schema, inconsistent NAP, poor search presence for high-intent Kathmandu queries.",
    actions: "Engineered LocalBusiness & Restaurant Schema JSON-LD with geo-coordinates, built localized content silos, optimized GBP linking.",
    result: "Top 3",
    resultLabel: "Map-pack positioning across Kathmandu",
    resultDetail: "210% increase in reservation clicks and local conversions during peak season.",
    status: "Ongoing",
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="py-20 md:py-24 bg-accent/20" aria-labelledby="cases-heading">
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
              Engineering Impact
            </span>
            <h2 id="cases-heading" className="text-3xl sm:text-4xl font-bold">
              Technical SEO Case Studies with Measured Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Not theory. These are actual technical SEO engagements by Rejish Khanal with measured outcomes across e-commerce, SaaS, and hospitality in Nepal and worldwide.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {caseStudies.map((cs, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row gap-8 items-stretch"
              >
                {/* Left: Details */}
                <div className="lg:w-7/12 flex flex-col justify-between gap-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-accent text-xs font-semibold text-foreground">
                        {cs.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug">{cs.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><strong className="text-foreground">Problem:</strong> {cs.problem}</p>
                      <p><strong className="text-foreground">Fix:</strong> {cs.actions}</p>
                    </div>
                  </div>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-sm font-semibold text-foreground hover:bg-accent/80 transition-colors w-fit"
                  >
                    Read Case Study <span className="font-mono" aria-hidden="true">→</span>
                  </Link>
                </div>

                {/* Right: Result */}
                <div className="lg:w-5/12 p-6 rounded-xl bg-accent/50 flex flex-col justify-center gap-3">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Verified Result</span>
                  <div className={`text-5xl font-bold leading-tight ${cs.resultColor || "text-primary"}`}>{cs.result}</div>
                  <p className="text-sm font-semibold text-foreground">{cs.resultLabel}</p>
                  <p className="text-sm text-muted-foreground">{cs.resultDetail}</p>
                  <div className="mt-2 p-2.5 rounded-lg bg-background text-xs font-mono text-muted-foreground flex items-center justify-between">
                    <span>Status: {cs.status}</span>
                    <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
