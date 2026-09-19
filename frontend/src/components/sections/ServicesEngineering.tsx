"use client";

import { motion } from "framer-motion";
import { Code2, Settings, Terminal } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    icon: Code2,
    title: "Next.js & React Engineering",
    description:
      "Full-scale Next.js App Router applications built from scratch or refactored for search. Automatic static optimization, edge middleware redirects, dynamic OG image generation, and clean canonical routing.",
    specs: [
      { label: "Rendering Mode", value: "Hybrid SSG/ISR" },
      { label: "Layout Shift Risk", value: "0.00 CLS Baseline" },
    ],
    cta: "Build with Next.js →",
    href: "/nextjs-seo-services",
  },
  {
    icon: Settings,
    title: "WordPress Technical Re-Engineering",
    description:
      "We strip bloated multi-plugin ecosystems that kill performance. Custom lightweight child themes, database query caching, transience optimization, and modern WebP/AVIF media delivery.",
    specs: [
      { label: "Plugin Count Target", value: "< 15 vetted plugins" },
      { label: "TTFB Response", value: "< 200ms at edge" },
    ],
    cta: "Clean Up WordPress →",
    href: "/wordpress-seo-expert-nepal",
  },
  {
    icon: Terminal,
    title: "Python / Django & Laravel Backend SEO",
    description:
      "High-scale architectural fixes for databases with 100k+ dynamic URLs. Automated sitemap chunking, faceted navigation URL normalization, caching layers with Redis, and custom robot middleware.",
    specs: [
      { label: "Database Indexing", value: "Optimized queries" },
      { label: "Large Sitemaps", value: "50k URLs / index chunk" },
    ],
    cta: "Scale Backend SEO →",
    href: "/django-developer-nepal",
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

export default function ServicesEngineering() {
  return (
    <section className="bg-background py-20 lg:py-28">
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
            <Code2 className="w-4 h-4" />
            Category 04 // Codebase Implementation
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            Hands-On Development &amp; Direct CMS Engineering
          </h2>
          <p className="text-foreground/70 text-base lg:text-lg leading-relaxed mb-6">
            The biggest bottleneck in SEO is unimplemented recommendations.
            Because I am a full-stack engineer, I push tested, production-grade
            Pull Requests directly to your repository.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block text-xs font-mono bg-primary/10 text-foreground/70 px-3 py-1 rounded-full border border-border">
              Next.js • WordPress • Django • Laravel
            </span>
          </div>
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
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                {card.title}
              </h3>

              <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                {card.description}
              </p>

              <div className="space-y-2 mb-6 flex-1">
                {card.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center gap-2 text-xs font-mono text-foreground/70"
                  >
                    <span className="text-foreground font-semibold">
                      {spec.label}:
                    </span>
                    <span>{spec.value}</span>
                  </div>
                ))}
              </div>

              <Link
                href={card.href}
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline mt-auto"
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
