"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const timeline = [
  {
    period: "Current",
    role: "Independent Technical SEO Specialist and Full-Stack Developer",
    company: "Self-Employed",
    location: "Kathmandu, Nepal",
    description:
      "I work independently with businesses and website owners that need technical SEO analysis, AEO and GEO readiness, Core Web Vitals improvement, structured data, JavaScript SEO, and code-level implementation. My work focuses on observable technical conditions, including crawler access, indexation signals, rendered content, website performance, entity consistency, accessibility, and implementation quality.",
  },
  {
    period: "March 2026 – September 2026",
    role: "SEO Specialist",
    company: "Gripas Marketing",
    location: "Remote",
    description:
      "Managed SEO work for client websites serving markets in Nepal and Australia. Responsibilities included technical SEO analysis, content planning, entity optimization, structured data, Google Search Console, Google Analytics 4, Core Web Vitals, and preparation for AI-powered search experiences.",
  },
  {
    period: "May 2025 – February 2026",
    role: "SEO Specialist and Web Developer",
    company: "E-Prabidhi Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    description:
      "Combined SEO work with practical website development. Responsibilities included technical improvements, on-page optimization, website performance, backend refinement, database query optimization, and search-friendly implementation using Django, Laravel, PHP, and related technologies.",
  },
  {
    period: "September 2024 – March 2025",
    role: "Backend Developer Intern",
    company: "E-Prabidhi Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    description:
      "Worked on backend development, APIs, databases, URL structures, technical documentation, and website functionality. This role strengthened my understanding of how backend architecture affects page delivery, performance, crawlability, and technical SEO implementation.",
  },
  {
    period: "February 2022 – July 2024",
    role: "Junior Quality Assurance Officer",
    company: "Florid Laboratories Pvt. Ltd.",
    location: "Lalitpur, Nepal",
    description:
      "Worked in a regulated pharmaceutical environment involving documentation, quality standards, process control, audits, and corrective actions. This experience developed the methodical investigation and documentation practices I now apply to SEO and software projects.",
  },
];

export function AboutTimeline() {
  return (
    <section className="w-full py-16 lg:py-24" aria-labelledby="professional-experience">
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
              Professional Journey
            </span>
            <h2 id="professional-experience" className="text-3xl sm:text-4xl font-bold tracking-tight">
              Professional Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              My experience spans quality assurance, backend development, web
              development, and technical SEO. Each role has contributed to the
              analytical and implementation-focused approach I use today.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                    {item.period}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">{item.location}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{item.role}</h3>
                  <p className="text-sm text-primary font-semibold">{item.company}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-muted flex flex-col gap-2">
            <span className="font-mono text-sm text-foreground font-semibold flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
              Zero Subcontracting
            </span>
            <p className="text-sm text-muted-foreground">
              100% transparent track record. When you engage Rejish Khanal, you collaborate directly
              with an experienced engineer and SEO specialist — not junior account managers or
              delegated offshore pools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
