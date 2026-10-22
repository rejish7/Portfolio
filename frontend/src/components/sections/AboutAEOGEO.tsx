"use client";

import { motion } from "framer-motion";
import { fadeInUp, spring, stagger } from "@/lib/apple-motion";

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
    <section className="w-full py-20 lg:py-28" aria-labelledby="aeo-geo-expert-nepal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <motion.div {...fadeInUp} className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.12em] font-semibold">
              AI Search Readiness
            </span>
            <h2
              id="aeo-geo-expert-nepal"
              className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.1]"
            >
              Answer Engine Optimization and Generative Engine Optimization
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {aeoGeoItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={stagger(i, 0.03)}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/50 border border-border/30"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer — subtle callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="p-5 rounded-2xl bg-muted border border-border/50"
          >
            <p className="text-muted-foreground leading-relaxed text-sm">
              No SEO, AEO, or GEO expert can guarantee that a website will receive
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
