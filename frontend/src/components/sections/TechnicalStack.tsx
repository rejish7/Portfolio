"use client";

import { motion } from "framer-motion";

const categoryGroups = [
  {
    title: "SEO Tools",
    tags: [
      "Google Search Console",
      "Ahrefs",
      "Screaming Frog",
      "PageSpeed Insights",
      "Schema Markup",
    ],
  },
  {
    title: "Frameworks",
    tags: ["Next.js", "Django", "Laravel", "React", "Node.js"],
  },
  {
    title: "Performance",
    tags: [
      "Core Web Vitals",
      "Lighthouse",
      "CrUX",
      "WebPageTest",
      "Bundle Analysis",
    ],
  },
  {
    title: "AEO/GEO Tools",
    tags: [
      "ChatGPT Search",
      "Perplexity",
      "Google AI Overviews",
      "Entity Analysis",
      "Citation Tracking",
    ],
  },
  {
    title: "Development",
    tags: ["TypeScript", "Python", "PHP", "PostgreSQL", "Git"],
  },
];

export function TechnicalStack() {
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
          <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono mb-3 block">
            TECHNICAL STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tools & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rejish Khanal uses modern tools and technologies to deliver
            technical SEO results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryGroups.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="text-base font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-accent text-xs font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
