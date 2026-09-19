"use client";

import { motion } from "framer-motion";
import { Brain, Search, BookOpen, Lightbulb } from "lucide-react";

export function PersonalInterests() {
  return (
    <section className="w-full bg-muted/50 py-16 lg:py-24" aria-label="AEO and GEO research interests">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Research Focus Areas */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-card border border-border shadow-sm flex flex-col gap-2">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Brain className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-muted-foreground uppercase">AEO Focus</span>
              <span className="text-sm font-bold">Answer Engine Optimization</span>
              <p className="text-[12px] text-muted-foreground">
                Studying how AI agents extract entity facts from JSON-LD structured data for citation
                in Google AI Overviews and ChatGPT Search.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border shadow-sm flex flex-col gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Search className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-muted-foreground uppercase">GEO Focus</span>
              <span className="text-sm font-bold">Generative Engine Optimization</span>
              <p className="text-[12px] text-muted-foreground">
                Optimizing content architecture for AI-generated search results and LLM citation
                accuracy across Perplexity, ChatGPT, and Google AI.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border shadow-sm flex flex-col gap-2">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-muted-foreground uppercase">Reading</span>
              <span className="text-sm font-bold">Distributed Systems</span>
              <p className="text-[12px] text-muted-foreground">
                Edge cache invalidation patterns, event-driven architectures, and scalable search
                infrastructure.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border shadow-sm flex flex-col gap-2">
              <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                <Lightbulb className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-muted-foreground uppercase">Experimenting</span>
              <span className="text-sm font-bold">Open Source Web Perf</span>
              <p className="text-[12px] text-muted-foreground">
                Benchmarking server-side edge runtimes and sharing findings with developer
                communities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Narrative Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <span className="font-mono text-xs text-primary uppercase tracking-wider font-semibold">
            Beyond The Crawl Logs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Researching the Future of Search: AEO, GEO &amp; AI Agent Optimization.
          </h2>
          <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
            <p>
              When I am not inspecting server response headers or resolving React hydration waterfall
              issues, I am tracking how AI-powered search engines — Google AI Overviews, ChatGPT
              Search, and Perplexity — extract, cite, and reference entity facts from structured
              data. This is the frontier of{" "}
              <strong className="text-foreground font-semibold">Answer Engine Optimization (AEO)</strong>{" "}
              and{" "}
              <strong className="text-foreground font-semibold">Generative Engine Optimization (GEO)</strong>.
            </p>
            <p>
              Living and working in <strong className="text-foreground font-semibold">Kathmandu, Nepal</strong>{" "}
              provides an invaluable perspective. On weekends, you will often find me hiking the
              trailheads of Shivapuri National Park or exploring the historic courtyards of Patan and
              Bhaktapur. The discipline of navigating complex alpine elevation mirrors software
              debugging: prepare thoroughly, understand the terrain, and solve the bottleneck in front of
              you.
            </p>
            <p>
              I actively invest my personal time in open-source web performance experiments, benchmarking
              AEO/GEO schema patterns, and sharing practical findings with local and international
              developer communities.
            </p>
          </div>
          <div className="flex items-center gap-6 pt-2 font-mono text-sm text-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
              <span>AEO / GEO Research</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Open Source Web</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400" />
              <span>Hiking Trails</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
