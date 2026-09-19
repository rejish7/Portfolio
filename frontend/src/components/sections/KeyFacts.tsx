"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const keyFacts = [
  "Based in Kathmandu, Nepal. Serving clients in the US, UK, Australia, and worldwide.",
  "2+ years of experience in technical SEO and full-stack web development.",
  "Achieved 40-60% organic traffic growth for clients at E-Prabidhi Pvt. Ltd.",
  "Specializes in Next.js, Django, and Laravel with direct code implementation.",
  "Expert in Core Web Vitals (LCP, INP, CLS) optimization and JavaScript SEO.",
  "AEO and GEO specialist for ChatGPT Search, Perplexity, and Google AI Overviews.",
  "Former SEO Specialist at Gripas Marketing and E-Prabidhi Pvt. Ltd.",
  "Provides technical SEO audits with implemented fixes, not just PDF reports.",
];

export function KeyFacts() {
  return (
    <section className="py-16 md:py-20 bg-accent/20" aria-labelledby="key-facts-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono mb-3 block">
            Key Facts
          </span>
          <h2 id="key-facts-heading" className="text-2xl sm:text-3xl font-bold">
            Rejish Khanal at a Glance
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {keyFacts.map((fact, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
            >
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground leading-relaxed">{fact}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
