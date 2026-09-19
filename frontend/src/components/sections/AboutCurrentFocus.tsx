"use client";

import { motion } from "framer-motion";

const focusAreas = [
  "Entity identification and disambiguation",
  "Search retrieval and query expansion",
  "AI crawler accessibility",
  "Structured data accuracy",
  "JavaScript rendering",
  "Server-side rendering and edge delivery",
  "Core Web Vitals",
  "Accessible web architecture",
  "Citation-ready source content",
  "Monitoring visibility in AI-generated search experiences",
];

export function AboutCurrentFocus() {
  return (
    <section className="w-full py-16 lg:py-24" aria-labelledby="current-research">
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
              Current Focus
            </span>
            <h2 id="current-research" className="text-3xl sm:text-4xl font-bold tracking-tight">
              Exploring the Future of Search, AEO and GEO
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
              My current research focuses on how conventional search systems and
              AI-powered answer interfaces discover, interpret, retrieve, and reference
              information from websites.
            </p>
            <p>Areas I continue to explore include:</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {focusAreas.map((item) => (
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
              The purpose is not to chase every new search label. It is to understand
              which technical and editorial practices help search systems retrieve
              accurate information while also providing a useful experience for the
              person visiting the website.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
