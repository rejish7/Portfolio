"use client";

import { motion } from "framer-motion";

export function AboutProfessionalProfile() {
  return (
    <section className="w-full py-16 lg:py-24" aria-labelledby="who-is-rejish-khanal">
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
              Professional Profile
            </span>
            <h2 id="who-is-rejish-khanal" className="text-3xl sm:text-4xl font-bold tracking-tight">
              Who Is Rejish Khanal?
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
              <strong className="text-foreground">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
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
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-foreground font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
