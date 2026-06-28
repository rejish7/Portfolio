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
  FileSearch,
  MapPin,
  Gauge,
  Code2,
  Globe2,
  Settings,
  Server,
  Layers,
} from "lucide-react";

const services = [
  {
    title: "Technical SEO Specialist in Nepal",
    description:
      "Fix crawlability, indexing, Core Web Vitals, schema markup, redirects, canonicals, JavaScript SEO, and technical website issues that affect Google rankings.",
    href: "/technical-seo-specialist-nepal",
    cta: "Explore Technical SEO Services",
    icon: Settings,
  },
  {
    title: "SEO Expert in Nepal",
    description:
      "Get complete SEO strategy for keyword research, on-page SEO, content optimization, local SEO, AEO, GEO, and long-term organic traffic growth.",
    href: "/seo-expert-nepal",
    cta: "Hire an SEO Expert in Nepal",
    icon: Search,
  },
  {
    title: "SEO Audit Services in Nepal",
    description:
      "Identify technical SEO errors, indexing problems, content gaps, Core Web Vitals issues, internal linking problems, and ranking barriers.",
    href: "/seo-audit-nepal",
    cta: "Request an SEO Audit",
    icon: FileSearch,
  },
  {
    title: "Local SEO Services in Nepal",
    description:
      "Improve visibility for Kathmandu and Nepal-based searches with local landing pages, Google Business Profile optimization, citations, reviews, and map ranking strategy.",
    href: "/local-seo-services-nepal",
    cta: "Improve Local SEO Rankings",
    icon: MapPin,
  },
  {
    title: "Core Web Vitals Optimization",
    description:
      "Improve LCP, INP, CLS, page speed, mobile performance, image loading, JavaScript execution, and user experience for better SEO performance.",
    href: "/core-web-vitals-optimization",
    cta: "Optimize Core Web Vitals",
    icon: Gauge,
  },
  {
    title: "SEO-Friendly Web Development in Nepal",
    description:
      "Build fast, responsive, crawlable, and conversion-focused websites with clean code, structured data, strong site architecture, and SEO-ready foundations.",
    href: "/web-development-nepal",
    cta: "Build an SEO-Friendly Website",
    icon: Code2,
  },
  {
    title: "Next.js SEO Services",
    description:
      "Optimize Next.js websites for metadata, server-side rendering, structured data, internal links, crawlability, indexability, and Core Web Vitals.",
    href: "/nextjs-seo-services",
    cta: "Optimize a Next.js Website",
    icon: Globe2,
  },
  {
    title: "Django Developer in Nepal",
    description:
      "Develop secure, scalable, and SEO-friendly Django websites with clean URL structure, performance optimization, structured content, and technical SEO best practices.",
    href: "/django-developer-nepal",
    cta: "Hire a Django Developer",
    icon: Server,
  },
  {
    title: "Laravel Developer in Nepal",
    description:
      "Create fast, structured, and SEO-friendly Laravel websites with clean architecture, optimized performance, secure backend logic, and search-ready pages.",
    href: "/laravel-developer-nepal",
    cta: "Hire a Laravel Developer",
    icon: Layers,
  },
];

export function ServiceShowcase() {
  return (
    <section
      className="py-20 bg-linear-to-b from-background to-accent/5"
      aria-labelledby="seo-services-heading"
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
            SEO Services in Nepal | Technical SEO | Web Development | Organic Growth
          </p>

          <h2
            id="seo-services-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            SEO and Web Development Services in Nepal
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I help businesses in Kathmandu, across Nepal, and international
            markets improve search visibility with technical SEO, SEO audits,
            Core Web Vitals optimization, local SEO, AEO, GEO, and SEO-friendly
            web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link href={service.href}>
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
                      <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                        <span className="text-sm font-semibold">
                          {service.cta}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View All SEO and Web Development Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}