"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/apple-motion";

const steps = [
  {
    number: "01",
    title: "Understand the Website and Business",
    description:
      "I identify the website's purpose, priority services, important pages, target market, technology, current performance, and primary search challenges.",
  },
  {
    number: "02",
    title: "Collect Technical Evidence",
    description:
      "I review available data from crawling tools, Search Console, analytics, performance testing, server responses, source HTML, rendered pages, and network requests.",
  },
  {
    number: "03",
    title: "Identify the Actual Constraint",
    description:
      "I separate minor tool warnings from issues that may affect discovery, crawling, rendering, indexation, performance, interpretation, or conversion.",
  },
  {
    number: "04",
    title: "Prioritize the Work",
    description:
      "Recommendations are organized by impact, urgency, affected templates, implementation effort, dependency, and business value.",
  },
  {
    number: "05",
    title: "Support Implementation",
    description:
      "Depending on the project, I provide technical requirements, code recommendations, validation criteria, or direct development support.",
  },
  {
    number: "06",
    title: "Validate the Result",
    description:
      "After deployment, I verify the technical output and monitor the relevant search, indexation, or performance signals.",
  },
];

export function AboutWorkProcess() {
  return (
    <section className="w-full py-20 lg:py-28" aria-labelledby="how-i-work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <motion.div {...fadeInUp} className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.12em] font-semibold">
              Working Process
            </span>
            <h2
              id="how-i-work"
              className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.1]"
            >
              How I Approach SEO and Development Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={stagger(index, 0.05)}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm shadow-black/[0.03] flex flex-col gap-3"
              >
                <span className="font-mono text-2xl font-bold text-primary tracking-tight">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold tracking-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
