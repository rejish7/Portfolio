"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const highlights = [
  {
    icon: Code2,
    title: "Technical Implementation",
    description: "I implement SEO fixes directly in code—no developer handoff delays. Full-stack proficiency in Python, Django, Laravel, and Next.js.",
  },
  {
    icon: Target,
    title: "Proven Results",
    description: "40-60% organic traffic increases across client projects. Data-driven strategies using GA4, GSC, and continuous optimization.",
  },
  {
    icon: Sparkles,
    title: "Core Web Vitals Expertise",
    description: "Specialized in optimizing LCP, CLS, and INP through code-level improvements—reduced load times from 5.2s to 1.9s.",
  },
];

export function AboutTeaser() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left side - Text content + personal touch */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-5"
              >
                <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    I'm an <span className="text-primary font-medium">SEO Specialist </span> managing multi-client campaigns across Nepal and Australia. Unlike most SEO consultants, I implement technical fixes directly eliminating handoff delays through hands-on development in <span className="text-primary font-medium">Next.js, Django, FastAPI, Laravel, and PHP</span>.
                  </p>

                  <p>
                    My proven track record: <span className="text-primary font-medium">40–60% organic traffic increases</span>, consistent first-page rankings, and <span className="text-primary font-medium">Core Web Vitals optimization</span>. I've reduced page load times from 5.2s to 1.9s, implemented schema markup across complex architectures, and executed entity optimization strategies for AI search visibility (Google AI Overviews, ChatGPT Search, Perplexity).
                  </p>
                </div>
    
                <div className="pt-4">
                  <p className="text-muted-foreground italic">
                    Available for Technical SEO audits, full-stack development, and SEO consulting across any industry.
                  </p>
                </div>
                <Button asChild size="lg">
            <Link href="/about">
              Read my full story →
            </Link>
          </Button>
                

              </motion.div>
    
              {/* Right side - Highlights */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
                    >
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
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