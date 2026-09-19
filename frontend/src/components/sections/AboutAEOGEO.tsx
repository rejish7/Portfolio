"use client";

import { motion } from "framer-motion";

const aeoGeoItems = [
  "Clearly identifying the person, business, service, and location",
  "Maintaining consistent entity information across the website",
  "Writing direct answers to important user questions",
  "Organizing pages with descriptive headings",
  "Using semantic and accessible HTML",
  "Improving internal links and content relationships",
  "Implementing accurate Schema.org structured data",
  "Keeping important information available in rendered HTML",
  "Supporting professional claims with relevant evidence",
  "Publishing original case studies and technical observations",
];

export function AboutAEOGEO() {
  return (
    <section className="w-full py-16 lg:py-24" aria-labelledby="aeo-geo-specialist-nepal">
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
              AI Search Readiness
            </span>
            <h2 id="aeo-geo-specialist-nepal" className="text-3xl sm:text-4xl font-bold tracking-tight">
              Answer Engine Optimization and Generative Engine Optimization
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
              Search discovery now extends beyond conventional search results. People
              can encounter information through featured snippets, Google AI Overviews,
              ChatGPT Search, Perplexity, voice assistants, and other answer-oriented
              systems.
            </p>
            <p>
              I approach <strong className="text-foreground font-semibold">Answer Engine Optimization</strong> and{" "}
              <strong className="text-foreground font-semibold">Generative Engine Optimization</strong> as extensions of
              established SEO. AEO and GEO do not replace crawlability, indexation,
              useful content, authority, accessibility, or accurate information.
            </p>
            <p>My work in this area focuses on:</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {aeoGeoItems.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-5 rounded-xl bg-muted border border-border"
          >
            <p className="text-muted-foreground leading-relaxed text-sm">
              No SEO, AEO, or GEO specialist can guarantee that a website will receive
              a specific ranking, AI citation, or search feature. My role is to improve
              the technical accessibility, factual clarity, content quality, and entity
              consistency that can support eligibility and discoverability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
