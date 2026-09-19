"use client";

import { motion } from "framer-motion";
import { Code2, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const highlights = [
  {
    icon: Code2,
    title: "Developer-Level SEO",
    description: "I implement fixes directly in Next.js, Django, Laravel, React, and Vue.js. No developer handoff.",
  },
  {
    icon: Target,
    title: "Independent Specialist",
    description: "Direct access to the person diagnosing and implementing. Based in Kathmandu, serving worldwide.",
  },
  {
    icon: Sparkles,
    title: "AEO & GEO Ready",
    description: "Preparing businesses for ChatGPT Search, Perplexity, and Google AI Overviews with entity-based SEO.",
  },
];

export function AboutTeaser() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-background to-muted/30" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <h2 id="about-heading" className="text-2xl sm:text-3xl font-bold">About Rejish Khanal - Technical SEO Specialist in Nepal</h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">Rejish Khanal</strong> is an independent technical SEO specialist and full-stack developer based in <strong className="text-foreground">Kathmandu, Nepal</strong>.
              </p>
              <p>
                He helps businesses fix crawlability, indexing, Core Web Vitals, structured data, and JavaScript SEO problems. Unlike consultants who only provide reports, Rejish implements fixes directly in <span className="text-primary font-medium">Next.js, Django, Laravel, PHP, React, and Vue.js</span>.
              </p>
              <p>
                Experience includes <strong className="text-foreground">SEO Specialist at Gripas Marketing</strong> and <strong className="text-foreground">SEO Specialist & Web Developer at E-Prabidhi Pvt. Ltd</strong>, achieving 40-60% organic traffic growth for clients.
              </p>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Serving clients in the US, UK, Australia, and worldwide from Kathmandu, Nepal.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg">
                <Link href="/about">Read Full Story</Link>
              </Button>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-semibold text-sm px-4 py-3 transition-colors">
                Get in Touch <span className="font-mono" aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10" aria-hidden="true">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">{h.title}</h3>
                    <p className="text-sm text-muted-foreground">{h.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
