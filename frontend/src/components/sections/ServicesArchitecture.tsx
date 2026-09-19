"use client";

import { motion } from "framer-motion";
import { Network, Globe, CheckCircle2, Code2 } from "lucide-react";
import Link from "next/link";

const hreflangCode = `<!-- Multi-Region Hreflang Architecture -->
<link rel="alternate" hreflang="en-np"
  href="https://example.com/seo-expert-nepal" />
<link rel="alternate" hreflang="en-us"
  href="https://us.example.com/seo-expert-nepal" />
<link rel="alternate" hreflang="en-gb"
  href="https://uk.example.com/seo-expert-nepal" />
<link rel="alternate" hreflang="en-au"
  href="https://au.example.com/seo-expert-nepal" />
<link rel="alternate" hreflang="x-default"
  href="https://example.com/seo-expert-nepal" />`;

const checks1 = [
  "BreadcrumbList microdata integration with physical URL mirroring",
  "Automated faceted navigation indexation controls",
];

const checks2 = [
  "Google Business Profile technical hygiene & citation consistency",
  "Zero hreflang return-tag errors or redirect loops in multi-country setups",
];

export default function ServicesArchitecture() {
  return (
    <section className="bg-accent/20 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Network className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono tracking-widest text-foreground/70 uppercase">
              Category 03 // Hierarchy &amp; Authority
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Search Architecture &amp; International Strategy
          </h2>

          <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed mb-4">
            Internal link equity distribution, pillar-cluster topic modeling,
            and multi-market search localization from Kathmandu to the US, UK,
            and Australia.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Card 1: Information Architecture */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-6 p-8 rounded-2xl bg-card border border-border shadow-sm flex flex-col"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Internal PageRank
              </span>
              <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Topical Clusters
              </span>
            </div>

            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              Information Architecture &amp; Topic Clustering
            </h3>

            <p className="text-foreground/70 leading-relaxed mb-6">
              Eliminate keyword self-cannibalization and ensure your
              high-margin conversion pages inherit authority. We map complete
              parent-child topic taxonomy and implement automated dynamic
              related-linking components.
            </p>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-foreground/70">
                  Pillar Topic Authority Depth
                </span>
                <span className="text-primary font-bold">100% Coverage</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="h-full rounded-full bg-secondary"
                />
              </div>
            </div>

            {/* Checklist */}
            <ul className="space-y-3 mb-8 flex-1">
              {checks1.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/seo-expert-nepal"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Review Your Site Hierarchy &rarr;
            </Link>
          </motion.div>

          {/* Card 2: Multi-Region Global SEO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-12 lg:col-span-6 p-8 rounded-2xl bg-card border border-border shadow-sm flex flex-col"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Geo-Targeting
              </span>
              <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Multi-Region Hreflang
              </span>
            </div>

            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              Kathmandu Local Presence &amp; Multi-Region Global SEO
            </h3>

            <p className="text-foreground/70 leading-relaxed mb-6">
              Whether dominating local Kathmandu, Pokhara, and Nepal enterprise
              search queries or expanding into the UK, Australia, and North
              America via clean hreflang headers and localized landing
              structures.
            </p>

            {/* Code Block */}
            <div className="rounded-xl bg-background border border-border p-4 mb-6 overflow-x-auto">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-foreground/70">
                  HREFLANG Architecture
                </span>
              </div>
              <pre className="text-[11px] leading-relaxed font-mono text-foreground/70 whitespace-pre">
                {hreflangCode}
              </pre>
            </div>

            {/* Checklist */}
            <ul className="space-y-3 mb-8 flex-1">
              {checks2.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/local-seo-services-nepal"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Audit International Structure &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
