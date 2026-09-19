"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", label: "REVIEW", title: "Inspect", description: "Server logs, GSC coverage, bot rendering, codebase." },
  { number: "02", label: "MATRIX", title: "Prioritize", description: "Effort/impact matrix. Critical blockers first." },
  { number: "03", label: "CODE", title: "Implement", description: "Fixes applied directly in your repository." },
  { number: "04", label: "TEST", title: "Validate", description: "Crawl response, schema verification, CWV telemetry.", accent: true },
  { number: "05", label: "GROW", title: "Improve", description: "Track metrics. Guide the next opportunity." },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-24 bg-accent/20" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3 max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono">
              Disciplined Process
            </span>
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold">
              From Problem to Implemented Fix
            </h2>
            <p className="text-lg text-muted-foreground">
              No 80-page PDFs with no next step. Direct implementation with verified outcomes.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-5 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div className={`text-xs font-bold font-mono ${step.accent ? "text-green-600" : "text-primary"}`}>
                  {step.number} / {step.label}
                </div>
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
