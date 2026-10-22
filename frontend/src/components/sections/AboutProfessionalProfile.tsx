"use client";

import { motion } from "framer-motion";
import { fadeInUp, spring, stagger } from "@/lib/apple-motion";

export function AboutProfessionalProfile() {
  return (
    <section className="w-full py-20 lg:py-28" aria-labelledby="who-is-rejish-khanal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <motion.div {...fadeInUp} className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.12em] font-semibold">
              Professional Profile
            </span>
            <h2
              id="who-is-rejish-khanal"
              className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.1]"
            >
              Who Is Rejish Khanal?
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
              <strong className="text-foreground font-semibold">
                Rejish Khanal is a technical SEO expert and full-stack
                developer based in Kathmandu, Nepal.
              </strong>{" "}
              He helps businesses improve crawling, indexation, website performance,
              structured data, search visibility, and the technical accessibility of
              their content.
            </p>
            <p>
              Rejish works across SEO and web development, allowing him to investigate
              how a website is built, how its pages are rendered, how search crawlers
              access it, and how its information is presented to users and search
              systems.
            </p>
            <p>His main areas of specialization include:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Technical SEO audits",
              "Crawlability and indexation analysis",
              "Answer Engine Optimization (AEO)",
              "Generative Engine Optimization (GEO)",
              "Core Web Vitals optimization",
              "JavaScript and Next.js SEO",
              "Schema.org and JSON-LD implementation",
              "Website architecture and internal linking",
              "Google Search Console analysis",
              "SEO-friendly web development",
              "Django and Laravel development",
              "Code-level SEO implementation",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={stagger(i, 0.03)}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/50 border border-border/30"
              >
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
