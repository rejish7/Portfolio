"use client";

import { motion } from "framer-motion";
import { Search, Wrench, Bot, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const expertiseCards = [
  {
    icon: Search,
    title: "SEO",
    description:
      "Complete SEO strategy, keyword research, on-page optimization, and link building for businesses in Nepal and worldwide.",
  },
  {
    icon: Wrench,
    title: "Technical SEO Expert",
    description:
      "Site audits, Core Web Vitals fixes, crawl error resolution, structured data implementation, and indexation management.",
  },
  {
    icon: Bot,
    title: "AEO Expert in Nepal",
    description:
      "Answer Engine Optimization for ChatGPT Search, Perplexity, and AI Overviews. Structured data, entity optimization, and direct answers.",
  },
  {
    icon: Globe,
    title: "GEO Expert in Nepal",
    description:
      "Generative Engine Optimization to make your content visible and citeable in AI-generated search results.",
  },
];

export function KeyExpertise() {
  return (
    <section
      className="py-20 md:py-24 bg-background"
      aria-labelledby="key-expertise-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary mb-3">
            KEY EXPERTISE
          </span>
          <h2
            id="key-expertise-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Services from an SEO Expert in Nepal
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
Rejish Khanal provides end-to-end technical SEO services, from
              audit to implementation, for businesses in Nepal and worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {expertiseCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
