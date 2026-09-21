"use client";

import { motion } from "framer-motion";
import { Search, Code2, FileText, CheckCircle, BarChart3 } from "lucide-react";

const advantages = [
  {
    icon: Search,
    title: "Problems Are Investigated at the Source",
    description:
      "I examine source HTML, rendered content, browser behavior, network requests, route output, server responses, and relevant application logic instead of relying only on automated crawler labels.",
  },
  {
    icon: Code2,
    title: "Recommendations Consider the Framework",
    description:
      "A fix suitable for a WordPress website may not be suitable for a Next.js, Django, or Laravel application. Recommendations are adapted to the technology and constraints of the website.",
  },
  {
    icon: FileText,
    title: "Developers Receive Actionable Requirements",
    description:
      "Technical issues can be documented with affected URLs, evidence, expected behavior, acceptance criteria, priority, and validation steps.",
  },
  {
    icon: CheckCircle,
    title: "Changes Can Be Validated",
    description:
      "After implementation, I can verify whether the intended output appears in the server response, source HTML, rendered DOM, structured data, or performance results.",
  },
  {
    icon: BarChart3,
    title: "Work Is Prioritized by Business Impact",
    description:
      "Not every technical warning deserves immediate development time. I prioritize issues affecting important pages, user experience, organic opportunities, conversion paths, or site-wide templates.",
  },
];

export function AboutAdvantage() {
  return (
    <section className="w-full py-16 lg:py-24" aria-labelledby="technical-seo-specialist-who-codes">
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
              Combined Expertise
            </span>
            <h2 id="technical-seo-specialist-who-codes" className="text-3xl sm:text-4xl font-bold tracking-tight">
              Why Work With a Technical SEO Expert Who Understands Code?
            </h2>
            <p className="text-muted-foreground text-lg">
              SEO audits and development work are often handled by separate teams. This
              can create implementation delays, unclear requirements, and
              recommendations that do not fit the existing technology.
            </p>
            <p className="text-muted-foreground">
              My combined SEO and development background helps reduce that gap.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((item, index) => {
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
