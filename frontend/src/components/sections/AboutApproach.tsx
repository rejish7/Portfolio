"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const investigationItems = [
  "Google Search Console performance and indexation data",
  "HTTP status codes and server responses",
  "Robots.txt directives and XML sitemaps",
  "Canonical tags and redirect behavior",
  "Internal links, orphan pages, and crawl depth",
  "JavaScript rendering and hydration behavior",
  "Metadata and canonical generation in page templates",
  "Schema.org and JSON-LD structured data",
  "Core Web Vitals and real-user performance",
  "URL parameters and duplicate page variations",
  "Server log files and crawler access patterns",
  "Deployment, caching, and edge configuration",
];

export function AboutApproach() {
  return (
    <section className="w-full py-16 lg:py-24" aria-labelledby="technical-seo-approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <span className="font-mono text-xs text-primary uppercase tracking-wider font-semibold">
              My Approach
            </span>
            <h2 id="technical-seo-approach" className="text-3xl sm:text-4xl font-bold tracking-tight">
              Technical SEO Based on Evidence, Not Automated Reports
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 text-muted-foreground leading-relaxed"
          >
            <p>
              A useful technical SEO audit should explain what is wrong, why it matters,
              which pages or templates are affected, and what must change. It should
              also separate critical search barriers from minor warnings that may not
              deserve immediate development time.
            </p>
            <p>
              Depending on the website and available access, my investigation may
              include:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {investigationItems.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 text-muted-foreground leading-relaxed"
          >
            <p>
              Findings are prioritized according to technical impact, affected pages,
              implementation effort, business relevance, and dependencies. This gives
              website owners and developers a practical path from diagnosis to
              deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/services">
              <Button variant="outline" className="gap-2">
                Explore Technical SEO Audit Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
