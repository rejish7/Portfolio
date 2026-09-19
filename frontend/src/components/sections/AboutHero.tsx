"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, MapPin, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden" aria-labelledby="about-rejish-khanal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/5] shadow-xl">
                <Image
                  src="/assets/images/rejish-khanal.webp"
                  alt="Rejish Khanal — Technical SEO Specialist and Full-Stack Developer in Kathmandu, Nepal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-xl">Rejish Khanal</p>
                  <p className="text-white/80 text-sm font-mono mt-1">Kathmandu, Nepal</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["Technical SEO", "AEO", "GEO", "Full-Stack"].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/15 backdrop-blur-sm text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating info card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-card border border-border rounded-xl p-4 shadow-lg max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-green-600 dark:text-green-400">Available</span>
                </div>
                <p className="text-[11px] text-muted-foreground">Open for SEO &amp; development projects</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-xs font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              ABOUT REJISH KHANAL
            </div>

            {/* H1 */}
            <h1 id="about-rejish-khanal" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12]">
              Technical SEO Specialist and Full-Stack Developer in{" "}
              <span className="text-primary">Nepal</span>
            </h1>

            {/* Bio */}
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                I am <strong className="text-foreground font-semibold">Rejish Khanal</strong>, an independent technical SEO specialist
                and full-stack developer based in Kathmandu, Nepal. I identify and resolve
                the technical problems that prevent websites from being crawled, rendered,
                indexed, understood, and discovered across traditional and AI-powered
                search experiences.
              </p>
              <p>
                My work brings together technical SEO, Answer Engine Optimization,
                Generative Engine Optimization, Core Web Vitals, structured data,
                JavaScript SEO, and full-stack development. Instead of stopping at
                recommendations, I investigate the underlying issue and help implement
                practical solutions across Next.js, Django, Laravel, PHP, and related web
                technologies.
              </p>
            </div>

            {/* Quick facts row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                Kathmandu, Nepal
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="h-4 w-4 text-primary" />
                contact@rejishkhanal.com.np
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-primary" />
                5+ Years Experience
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: "5+", label: "Years Exp." },
                { value: "40-60%", label: "Organic Growth" },
                { value: "100%", label: "CWV Pass" },
                { value: "4+", label: "Companies" },
              ].map((stat) => (
                <div key={stat.label} className="p-3 rounded-xl bg-muted text-center">
                  <span className="block text-xl font-bold text-primary">{stat.value}</span>
                  <span className="text-[11px] text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/contact">
                <Button size="lg" className="group gap-2">
                  Work With Rejish
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="/assets/cv/Rejish_Khanal_Resume.pdf" download>
                <Button size="lg" variant="outline" className="gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
