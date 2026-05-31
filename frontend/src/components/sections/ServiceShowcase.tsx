"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Technical SEO Specialist",
    description: "Optimize your website's technical foundation for search engines",
    href: "/technical-seo-specialist-nepal",
    icon: "🔧",
  },
  {
    title: "SEO Expert Services",
    description: "Comprehensive SEO strategy for ranking higher on Google",
    href: "/seo-expert-nepal",
    icon: "📈",
  },
  {
    title: "SEO Audit Nepal",
    description: "Identify technical issues preventing your site from ranking",
    href: "/seo-audit-nepal",
    icon: "🔍",
  },
  {
    title: "Local SEO Services",
    description: "Rank your business on Google Maps and local search",
    href: "/local-seo-services-nepal",
    icon: "📍",
  },
  {
    title: "Core Web Vitals Optimization",
    description: "Improve page speed and user experience for better rankings",
    href: "/core-web-vitals-optimization",
    icon: "⚡",
  },
  {
    title: "Web Development Nepal",
    description: "Build fast, SEO-friendly websites that rank",
    href: "/web-development-nepal",
    icon: "💻",
  },
];

export function ServiceShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From technical SEO optimization to full website development, I help businesses rank higher, get more
            traffic, and grow their online presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={service.href}>
                <Card className="h-full group hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
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
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View All Services
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
