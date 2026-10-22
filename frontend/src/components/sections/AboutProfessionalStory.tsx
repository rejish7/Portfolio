"use client";

import { motion } from "framer-motion";
import { fadeInUp, spring } from "@/lib/apple-motion";

export function AboutProfessionalStory() {
  return (
    <section className="w-full bg-muted/30 py-20 lg:py-28" aria-labelledby="professional-story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <motion.div {...fadeInUp} className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.12em] font-semibold">
              My Professional Story
            </span>
            <h2
              id="professional-story"
              className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.1]"
            >
              From Quality Assurance and Development to Technical SEO
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="flex flex-col gap-5 text-muted-foreground leading-relaxed"
          >
            <p>
              My path into technical SEO began with quality assurance and backend
              development. These roles taught me how to investigate problems
              systematically, document findings accurately, understand technical
              dependencies, and verify whether a proposed solution works as expected.
            </p>
            <p>
              As I moved into web development and SEO, I saw a recurring problem. Many
              websites received long audit reports, but their developers were left
              without clear implementation requirements. Recommendations such as
              &ldquo;improve page speed,&rdquo; &ldquo;fix rendering,&rdquo; or &ldquo;optimize crawlability&rdquo; rarely
              explained where the problem existed or how the website architecture
              contributed to it.
            </p>
            <p>
              That gap shaped the way I work today. I do not examine SEO as an isolated
              marketing activity. I review how the website generates pages, handles
              routes, loads resources, connects internal pages, responds to crawlers,
              and communicates important information through HTML and structured data.
            </p>
            <p>
              My objective is to turn technical findings into clear, prioritized, and
              implementable improvements. When the project scope permits, I can also
              support the development and validation of those changes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
