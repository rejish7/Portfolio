"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand the Website and Business",
    description:
      "I identify the website&apos;s purpose, priority services, important pages, target market, technology, current performance, and primary search challenges.",
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
    <section className="w-full py-16 lg:py-24" aria-labelledby="how-i-work">
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
              Working Process
            </span>
            <h2 id="how-i-work" className="text-3xl sm:text-4xl font-bold tracking-tight">
              How I Approach SEO and Development Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-3"
              >
                <span className="font-mono text-2xl font-bold text-primary">{step.number}</span>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
