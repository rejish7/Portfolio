"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    label: "E-COMMERCE // 250K SKU",
    title: "Faceted Navigation Crawl Budget Recovery",
    badge: "-88% CRAWL WASTE",
    description:
      "Eliminated 1.2M infinite query string URLs by engineering server-side canonical rules and robots disallow patterns.",
    link: "/case-studies",
  },
  {
    label: "B2B SAAS // NEXT.JS",
    title: "App Router Hydration & Performance Rebuild",
    badge: "1.3S LCP (CRUX PASS)",
    description:
      "Reduced main-thread blocking time by 650ms, resolving INP failures across 40,000 monthly active desktop and mobile users.",
    link: "/case-studies",
  },
  {
    label: "LOCAL ENTERPRISE // NEPAL",
    title: "Multi-Location Schema & Local Entity Alignment",
    badge: "TOP 3 MAP PACK",
    description:
      "Built localized structured schema and synchronized GBP coordinates, increasing organic high-intent local calls by +142%.",
    link: "/case-studies",
  },
];

export default function ServicesCaseStudies() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-5 w-5 text-secondary" />
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">
              Documented Results
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Selected Engineering Case Studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-6">
            See how diagnostic precision translates into real indexation recovery
            and Core Web Vitals passes.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View All Case Studies →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={study.link} className="block h-full">
                <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {study.label}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {study.title}
                  </h3>
                  <span className="inline-block self-start px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-md mb-3">
                    {study.badge}
                  </span>
                  <p className="text-sm text-muted-foreground flex-1">
                    {study.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-primary">
                    Read Architecture Case →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
