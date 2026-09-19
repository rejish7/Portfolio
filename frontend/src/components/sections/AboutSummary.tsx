"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutSummary() {
  return (
    <section className="py-20 md:py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono">
            About Rejish
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Technical SEO Expert in Nepal
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 space-y-6 max-w-3xl"
        >
          <p className="text-lg text-muted-foreground">
            Rejish Khanal is a technical SEO specialist and full-stack developer
            based in Kathmandu, Nepal. He combines deep SEO knowledge with
            hands-on development skills to deliver measurable results.
          </p>
          <p className="text-lg text-muted-foreground">
            He has worked with businesses across e-commerce, SaaS, hospitality,
            and education sectors. His approach is implementation-first, he
            fixes websites, not just identifies problems.
          </p>
          <p className="text-lg text-muted-foreground">
            Rejish specializes in technical SEO, AEO, and GEO, helping
            businesses rank on both traditional search engines and AI-powered
            search platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <Button asChild size="lg">
            <Link href="/about">Read Full Biography</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/case-studies">View Case Studies</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
