"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const toolCategories = [
  {
    title: "SEO and Crawl Analysis",
    items: [
      "Google Search Console",
      "Google Analytics 4",
      "Google Tag Manager",
      "Bing Webmaster Tools",
      "Screaming Frog SEO Spider",
      "Sitebulb",
      "Ahrefs",
      "PageSpeed Insights",
      "Lighthouse",
      "Chrome DevTools",
      "Server log analysis",
      "Schema Markup Validator",
      "Google Rich Results Test",
    ],
  },
  {
    title: "Frontend and Performance",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Lighthouse CI",
      "Chrome DevTools",
      "Vercel",
    ],
  },
  {
    title: "Backend and Infrastructure",
    items: [
      "Python",
      "Django",
      "PHP",
      "Laravel",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Cloudflare",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Search and Entity Optimization",
    items: [
      "Schema.org",
      "JSON-LD",
      "Entity mapping",
      "Internal linking analysis",
      "Content architecture",
      "AEO readiness analysis",
      "GEO readiness analysis",
      "Search crawler accessibility testing",
    ],
  },
];

export function TechToolkit() {
  return (
    <section className="w-full bg-muted/30 py-16 lg:py-24 scroll-mt-20" id="tech-stack" aria-labelledby="tools-technologies">
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
              Technical Stack
            </span>
            <h2 id="tools-technologies" className="text-3xl sm:text-4xl font-bold tracking-tight">
              Tools and Technologies I Work With
            </h2>
            <p className="text-muted-foreground text-lg">
              The tools used for each project depend on the website, available access,
              technology, and investigation objective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {toolCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-4"
              >
                <h3 className="font-bold text-lg">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            <p className="text-muted-foreground text-sm">
              Tools support the investigation, but they do not replace professional
              interpretation. An automated report may identify a symptom, while the
              website&apos;s templates, routes, content model, or server configuration reveal
              the actual cause.
            </p>
            <Link href="/tech-stack" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline">
              View My Complete Technical Stack
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
