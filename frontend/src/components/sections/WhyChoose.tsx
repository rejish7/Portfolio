"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Code2,
  Brain,
  BarChart3,
  Globe,
  MessageSquare,
} from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    title: "Direct Implementation",
    description:
      "I fix your website directly. No PDF-only reports. Every change goes live on your site.",
  },
  {
    icon: Code2,
    title: "Full-Stack Capability",
    description:
      "I can implement technical SEO fixes myself because I also code. Next.js, Django, Laravel.",
  },
  {
    icon: Brain,
    title: "AEO + GEO Expert",
    description:
      "I optimize for AI search engines, ChatGPT Search, Perplexity, Google AI Overviews, not just traditional Google.",
  },
  {
    icon: BarChart3,
    title: "Measured Results",
    description:
      "Every engagement comes with measurable outcomes. Traffic growth, ranking improvements, Core Web Vitals scores.",
  },
  {
    icon: Globe,
    title: "Global Reach, Nepal Based",
    description:
      "Based in Kathmandu, serving clients in the US, UK, Australia, and worldwide. Same quality, competitive rates.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Regular updates, clear reports, and direct access to the person doing the work. No account managers.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono mb-3">
            WHY CHOOSE ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Businesses Choose Rejish Khanal
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here is what sets Rejish apart from other SEO professionals in Nepal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-bold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
