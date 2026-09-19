"use client";

import { motion } from "framer-motion";
import { Search, Ban, FileText, Code2, Database, Users } from "lucide-react";

const principles = [
  {
    icon: Search,
    title: "Evidence Before Assumptions",
    description:
      "I verify problems using available technical evidence. Crawler output, source HTML, rendered content, server responses, Search Console data, and performance measurements are considered together.",
  },
  {
    icon: Ban,
    title: "No Guaranteed Rankings or AI Citations",
    description:
      "I do not promise a number-one Google ranking or guaranteed citation in ChatGPT, Google AI Overviews, Perplexity, or another answer system. These results are controlled by external platforms. My responsibility is to improve the technical, content, performance, accessibility, and entity signals that can support search visibility.",
  },
  {
    icon: FileText,
    title: "Clear Findings and Recommendations",
    description:
      "Verified findings are separated from assumptions, opportunities, and experimental ideas. This helps clients understand what is broken, what could be improved, and what still requires testing.",
  },
  {
    icon: Code2,
    title: "Developer-Friendly Documentation",
    description:
      "Recommendations can be prepared as implementation tickets containing affected templates, expected behavior, priority, acceptance criteria, and validation steps.",
  },
  {
    icon: Database,
    title: "Responsible Structured Data",
    description:
      "I use structured data to describe visible and accurate information. I do not add fabricated credentials, unsupported reviews, misleading ratings, or schema that does not represent the page.",
  },
  {
    icon: Users,
    title: "Direct Collaboration",
    description:
      "Clients communicate directly with me about project scope, findings, deliverables, implementation requirements, limitations, and next steps.",
  },
];

export function AboutStandards() {
  return (
    <section className="w-full bg-muted/30 py-16 lg:py-24" aria-labelledby="professional-standards">
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
              Professional Standards
            </span>
            <h2 id="professional-standards" className="text-3xl sm:text-4xl font-bold tracking-tight">
              Principles Behind My Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
