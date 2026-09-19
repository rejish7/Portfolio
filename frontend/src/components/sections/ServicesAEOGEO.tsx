"use client";

import { motion } from "framer-motion";
import { Brain, FileJson2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const schemaCode = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nepal Digital Agency",
  "url": "https://example.com",
  "sameAs": [
    "https://en.wikipedia.org/wiki/...",
    "https://www.wikidata.org/wiki/..."
  ],
  "founder": {
    "@type": "Person",
    "name": "Founder Name",
    "jobTitle": "CEO & Lead Engineer"
  },
  "knowsAbout": [
    "AEO", "GEO", "SEO",
    "Semantic Engineering"
  ]
}`;

const graphBenefits = [
  "Eliminates schema duplication across pages",
  "Ensures strict Rich Results compliance",
  "Connects entities into a verifiable knowledge graph",
  "Maximizes LLM citation accuracy",
];

export default function ServicesAEOGEO() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono tracking-widest text-foreground/70 uppercase">
              Category 02 // Semantic Intelligence
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            AI Search Visibility &amp; Semantic Engineering (AEO &amp; GEO)
          </h2>

          <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed mb-4">
            Modern retrieval engines (Perplexity, ChatGPT, Gemini, Google AI
            Overviews) synthesize facts rather than just matching keywords. We
            structure your site to be cleanly quoted and cited.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Side — 7 Columns */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-8">
            {/* Card A: GEO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Generative Engine Optimization
                </span>
                <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  LLM Citation Ready
                </span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                Entity Clarity &amp; Generative Engine Optimization (GEO)
              </h3>

              <p className="text-foreground/70 leading-relaxed mb-6">
                We structure content hierarchy so large language models can
                extract crisp declarative answers, verified entity definitions,
                and proprietary insights without confusion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl border border-border bg-background p-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-primary">
                    Fact Isolation
                  </span>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-primary">
                    Corpus Auditing
                  </span>
                </div>
              </div>

              <Link
                href="/aeo-expert-nepal"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Prepare for Generative Search →
              </Link>
            </motion.div>

            {/* Card B: Schema Architecture */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Structured Data
                </span>
                <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  JSON-LD Graph
                </span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                Advanced Schema Architecture &amp; Knowledge Graph
                Reconciliation
              </h3>

              <p className="text-foreground/70 leading-relaxed mb-6">
                Beyond basic plugin snippets. We handcraft interconnected
                JSON-LD schema graphs connecting your Organization, founder
                entities (sameAs Wikipedia/Wikidata), products, authors, and
                technical publications.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/70">
                    Custom multi-entity @graph nesting eliminating schema
                    duplication
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/70">
                    Strict validation against Google Rich Results &amp;
                    Schema.org protocols
                  </span>
                </li>
              </ul>

              <Link
                href="/geo-expert-nepal"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Engineer Custom Schema Graph →
              </Link>
            </motion.div>

            {/* Ethical Engineering Note */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl border border-dashed border-border bg-card/50 p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-foreground/70">
                  Ethical Engineering Note
                </span>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed italic">
                No practitioner can guarantee inclusion in ChatGPT answers or
                Google AI Overviews. I offer rigorous semantic markup, crawl
                reliability, and content entity clarity that maximizes model
                ingestion probability.
              </p>
            </motion.div>
          </div>

          {/* Right Side — 5 Columns */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="sticky top-24 p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-sm"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <FileJson2 className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-foreground/70">
                  Interactive Schema Graph Viewport
                </span>
              </div>

              {/* Code Block */}
              <div className="rounded-xl bg-background border border-border p-4 mb-6 overflow-x-auto">
                <pre className="text-[11px] leading-relaxed font-mono text-foreground/70 whitespace-pre">
                  {schemaCode}
                </pre>
              </div>

              {/* Semantic Graph Benefits */}
              <div>
                <h4 className="text-sm font-bold mb-4">
                  Semantic Graph Benefits
                </h4>
                <ul className="space-y-3">
                  {graphBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary font-mono text-xs mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-foreground/70 leading-snug">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
