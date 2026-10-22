"use client";

import { motion } from "framer-motion";
import { fadeInUp, spring, stagger } from "@/lib/apple-motion";

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
    <section className="w-full py-20 lg:py-28" aria-labelledby="current-research">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <motion.div {...fadeInUp} className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.12em] font-semibold">
              Current Focus
            </span>
            <h2
              id="current-research"
              className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.1]"
            >
              Exploring the Future of Search, AEO and GEO
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
              My current research focuses on how conventional search systems and
              AI-powered answer interfaces discover, interpret, retrieve, and reference
              information from websites.
            </p>
            <p>Areas I continue to explore include:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {focusAreas.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={stagger(i, 0.03)}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/50 border border-border/30"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
