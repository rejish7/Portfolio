"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Search,
  Gauge,
  Code2,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const highlights = [
    {
      icon: Search,
      title: "SEO Expert in Nepal",
      description: "Technical SEO, on-page SEO, local SEO, AEO, and GEO strategy",
    },
    {
      icon: Gauge,
      title: "Core Web Vitals Optimization",
      description: "Improve page speed, LCP, INP, CLS, and user experience",
    },
    {
      icon: Code2,
      title: "Full Stack SEO Implementation",
      description: "SEO-friendly websites built with clean, scalable code",
    },
    {
      icon: MapPin,
      title: "SEO Specialist in Kathmandu",
      description: "Local SEO support for Nepal-based and international businesses",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-background" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          {/* SEO Intro Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium text-muted-foreground bg-background/70 backdrop-blur"
          >
            SEO Expert in Nepal | Technical SEO Specialist | Full Stack Developer
          </motion.p>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                SEO Expert in Nepal for Technical SEO, Core Web Vitals, and Organic Growth
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-4xl mx-auto">
              I am Rejish Khanal, a Technical SEO Specialist and Full Stack Developer based in Kathmandu, Nepal.
            </p>
          </motion.div>

          {/* SEO Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-lg text-muted-foreground">
              I help businesses improve Google rankings, fix technical SEO issues, optimize Core Web Vitals,
              and build fast, crawlable, SEO-friendly websites that attract qualified organic traffic.
            </p>

            <p className="text-base text-muted-foreground">
              My work combines technical SEO, local SEO, JavaScript SEO, schema markup, content optimization,
              AEO, GEO, and full stack web development for businesses in Kathmandu, across Nepal, and international markets.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/seo-audit-nepal">
              <Button size="lg" className="group">
                Get a Technical SEO Audit
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-expert-nepal">
              <Button size="lg" variant="outline">
                Hire Me as Your SEO Expert
              </Button>
            </Link>

            <a href="/assets/cv/Rejish_Khanal_Resume.pdf" download>
              <Button size="lg" variant="ghost">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 max-w-6xl mx-auto"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border bg-background/70 backdrop-blur p-5 text-left hover:border-primary/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <h2 className="text-base font-semibold mb-2">
                    {item.title}
                  </h2>

                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Internal SEO Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            aria-label="Important SEO service pages"
            className="flex flex-wrap items-center justify-center gap-3 pt-6 text-sm"
          >
            <Link
              href="/technical-seo-specialist-nepal"
              className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Technical SEO Specialist in Nepal
            </Link>

            <Link
              href="/seo-expert-nepal"
              className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              SEO Expert in Nepal
            </Link>

            <Link
              href="/local-seo-services-nepal"
              className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Local SEO Services in Nepal
            </Link>

            <a
              href="https://github.com/rejish7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent hover:bg-accent/80 text-foreground transition-colors"
              aria-label="Rejish Khanal GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/rejish-khanal-259395402"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent hover:bg-accent/80 text-foreground transition-colors"
              aria-label="Rejish Khanal LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.nav>
        </div>
      </div>
    </section>
  );
}