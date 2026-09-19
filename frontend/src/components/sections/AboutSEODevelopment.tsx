"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const performanceCauses = [
  "Excessive client-side JavaScript",
  "Render-blocking scripts or stylesheets",
  "Incorrect image loading and sizing",
  "Slow database queries",
  "Inefficient API requests",
  "Poor server or browser caching",
  "Third-party scripts",
  "Hydration overhead",
  "Incorrect server-side rendering",
  "Unexpected layout movement",
];

export function AboutSEODevelopment() {
  return (
    <section className="w-full bg-muted/30 py-16 lg:py-24" aria-labelledby="seo-development-support">
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
              SEO With Development Support
            </span>
            <h2 id="seo-development-support" className="text-3xl sm:text-4xl font-bold tracking-tight">
              Resolving SEO Problems at the Code Level
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
              Many search and performance problems cannot be fixed through content
              editing alone. The visible symptom may be a slow page, an indexing gap,
              or missing metadata, while the actual cause exists in the application
              architecture, database, rendering process, caching configuration, or
              deployment environment.
            </p>
            <p>A performance problem, for example, may involve:</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {performanceCauses.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
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
              My development experience helps me trace these symptoms back to their
              technical causes. I work with technologies including Next.js, React,
              TypeScript, Django, Laravel, PHP, PostgreSQL, MySQL, Redis, Cloudflare,
              and Vercel.
            </p>
            <p>
              The goal is not to rebuild a website unnecessarily. It is to identify the
              smallest reliable change that removes the search, rendering, or
              performance barrier.
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
                Explore Web Development Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
