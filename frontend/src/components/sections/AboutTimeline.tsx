"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { fadeInUp, spring, stagger } from "@/lib/apple-motion";

const timeline = [
  {
    period: "October 2026 – Present",
    role: "SEO Strategist",
    company: "ARKSH Group",
    location: "Kathmandu, Nepal",
    description:
      "Lead SEO strategy focused on increasing organic visibility, attracting qualified audiences, and supporting business growth. Work spans technical SEO, content planning, keyword research, competitor analysis, website architecture, product page optimization, local SEO, and performance reporting — combining search data with user intent and commercial objectives to turn websites into stronger organic acquisition and conversion channels.",
  },
  {
    period: "March 2026 – September 2026",
    role: "SEO Specialist",
    company: "Gripas Marketing",
    location: "Kathmandu, Nepal",
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
    <section className="w-full py-20 lg:py-28" aria-labelledby="professional-experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <motion.div {...fadeInUp} className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.12em] font-semibold">
              Professional Journey
            </span>
            <h2
              id="professional-experience"
              className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.1]"
            >
              Professional Experience
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My experience spans quality assurance, backend development, web
              development, technical SEO, and SEO strategy. Each role has
              contributed to the analytical and implementation-focused approach
              I use today.
            </p>
          </motion.div>

          <div className="flex flex-col gap-5">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={stagger(index, 0.06)}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm shadow-black/[0.03] flex flex-col gap-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold tracking-wide">
                    {item.period}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">{item.location}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{item.role}</h3>
                  <p className="text-sm text-primary font-semibold">{item.company}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="p-5 rounded-2xl bg-muted border border-border/50 flex flex-col gap-2"
          >
            <span className="font-mono text-sm text-foreground font-semibold flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
              Zero Subcontracting
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              100% transparent track record. When you engage Rejish Khanal, you collaborate directly
              with an experienced engineer and SEO expert, not junior account managers or
              delegated offshore pools.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
