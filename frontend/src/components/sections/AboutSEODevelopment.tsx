"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fadeInUp, spring, stagger } from "@/lib/apple-motion";

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
    <section className="w-full bg-muted/30 py-20 lg:py-28" aria-labelledby="seo-development-support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <motion.div {...fadeInUp} className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.12em] font-semibold">
              SEO With Development Support
            </span>
            <h2
              id="seo-development-support"
              className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.1]"
            >
              Resolving SEO Problems at the Code Level
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {performanceCauses.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={stagger(i, 0.03)}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border/50 shadow-sm shadow-black/[0.03]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
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

          <motion.div {...fadeInUp}>
            <Link href="/web-development-nepal">
              <Button variant="outline" className="gap-2 transition-transform duration-100 active:scale-[0.97]">
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
