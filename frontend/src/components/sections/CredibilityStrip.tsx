"use client";

import { motion } from "framer-motion";

const items = [
  "Technical SEO Expert in Nepal",
  "Next.js, Django & Laravel Developer",
  "Core Web Vitals & JavaScript SEO",
  "AEO & GEO Expert Nepal",
  "Kathmandu - US, UK, AU & Worldwide",
];

export function CredibilityStrip() {
  return (
    <section className="w-full bg-accent/50 py-4 border-y border-border" aria-label="Key capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center lg:justify-between gap-4"
        >
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs font-semibold font-mono text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
