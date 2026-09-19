"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Search,
  Gauge,
  Code2,
  Database,
  Brain,
  Globe2,
  Laptop,
  MapPin,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Technical SEO Audit",
    description:
      "Complete website audit covering crawlability, indexation, Core Web Vitals, structured data, and JavaScript SEO.",
    bullets: [
      "Full site crawl analysis",
      "Core Web Vitals assessment",
      "Structured data review",
      "Actionable fix priorities",
    ],
    icon: Search,
  },
  {
    title: "Core Web Vitals Optimization",
    description:
      "Fix LCP, INP, and CLS issues to pass Google's page experience thresholds.",
    bullets: [
      "LCP optimization",
      "INP reduction",
      "CLS fixes",
      "Mobile performance tuning",
    ],
    icon: Gauge,
  },
  {
    title: "JavaScript SEO",
    description:
      "Make Next.js, React, and Vue websites fully crawlable and indexable by search engines.",
    bullets: [
      "Server-side rendering fixes",
      "Dynamic rendering setup",
      "JavaScript crawlability audit",
      "Hydration issue resolution",
    ],
    icon: Code2,
  },
  {
    title: "Structured Data Implementation",
    description:
      "Add JSON-LD schema markup for better entity recognition and rich snippets.",
    bullets: [
      "Organization schema",
      "FAQ schema",
      "Product schema",
      "LocalBusiness schema",
    ],
    icon: Database,
  },
  {
    title: "AEO Optimization",
    description:
      "Optimize your content for AI-powered search engines like ChatGPT Search and Perplexity.",
    bullets: [
      "Entity optimization",
      "Direct answer formatting",
      "Citation-friendly content",
      "AI search monitoring",
    ],
    icon: Brain,
  },
  {
    title: "GEO Optimization",
    description:
      "Make your website visible and citeable in generative AI search results.",
    bullets: [
      "Content structure for AI",
      "Authority signals",
      "Source citation setup",
      "AI overview tracking",
    ],
    icon: Globe2,
  },
  {
    title: "SEO-Friendly Web Development",
    description:
      "Build websites with clean code, fast performance, and search engine optimization built in.",
    bullets: [
      "Next.js development",
      "Django web apps",
      "Laravel projects",
      "SEO-first architecture",
    ],
    icon: Laptop,
  },
  {
    title: "Local SEO Nepal",
    description:
      "Improve your Google Business Profile and local search presence in Nepal.",
    bullets: [
      "Google Business Profile",
      "Local schema markup",
      "NAP consistency",
      "Local keyword targeting",
    ],
    icon: MapPin,
  },
  {
    title: "SEO Training Nepal",
    description:
      "Learn technical SEO, AEO, and GEO from an experienced practitioner in Nepal.",
    bullets: [
      "Hands-on workshops",
      "Real website examples",
      "Tool demonstrations",
      "Ongoing mentorship",
    ],
    icon: GraduationCap,
  },
];

export function ServicesGrid() {
  return (
    <section
      className="py-20 bg-linear-to-b from-background to-accent/5"
      aria-labelledby="services-grid-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3">
            Technical SEO | AEO | GEO | Web Development
          </p>

          <h2
            id="services-grid-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Technical SEO Services by Rejish Khanal in Nepal
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every service is delivered with direct implementation. Rejish Khanal
            fixes your website, not just reports issues.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link href="/contact">
                  <Card className="h-full group hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <CardTitle className="group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>

                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <ul className="flex flex-col gap-2 mb-4">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                        <span className="text-sm font-semibold">
                          Contact for this service
                        </span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
