"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, MapPin, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, spring, springSurface } from "@/lib/apple-motion";

export function AboutHero() {
  return (
    <section className="relative w-full pt-4 pb-20 lg:pb-28 overflow-hidden" aria-labelledby="about-rejish-khanal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl overflow-hidden bg-muted aspect-[4/5] shadow-2xl shadow-black/10 dark:shadow-black/40">
                <Image
                  src="/assets/images/rejish-khanal.webp"
                  alt="Rejish Khanal, Technical SEO Expert and Full-Stack Developer in Kathmandu, Nepal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-xl tracking-tight">Rejish Khanal</p>
                  <p className="text-white/70 text-sm font-mono mt-1">Kathmandu, Nepal</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["Technical SEO", "AEO", "GEO", "Full-Stack"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/15 backdrop-blur-md border border-white/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating availability card — translucent material */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={springSurface}
                className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl p-4 max-w-[200px]
                  bg-card/70 backdrop-blur-xl border border-border/50 shadow-lg shadow-black/5
                  dark:bg-card/60 dark:shadow-black/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-green-600 dark:text-green-400">Available</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">Open for SEO &amp; development projects</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="lg:col-span-7 flex flex-col gap-7">
            {/* Badge */}
            <motion.div {...fadeInUp}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-xs font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                ABOUT REJISH KHANAL
              </span>
            </motion.div>

            {/* H1 — tight leading, negative tracking */}
            <motion.h1
              id="about-rejish-khanal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.08]"
            >
              Technical SEO Expert and Full-Stack Developer in{" "}
              <span className="text-primary">Nepal</span>
            </motion.h1>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="flex flex-col gap-4 text-muted-foreground leading-relaxed"
            >
              <p>
                I am <strong className="text-foreground font-semibold">Rejish Khanal</strong>, a technical SEO expert
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
            </motion.div>

            {/* Quick facts */}
            <motion.div
              {...fadeInUp}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
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
            </motion.div>

            {/* Stats — clean grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {[
                { value: "5+", label: "Years Exp." },
                { value: "40-60%", label: "Organic Growth" },
                { value: "100%", label: "CWV Pass" },
                { value: "4+", label: "Companies" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl bg-muted/60 border border-border/40 text-center"
                >
                  <span className="block text-xl font-bold text-primary tracking-tight">{stat.value}</span>
                  <span className="text-[11px] text-muted-foreground mt-0.5 block">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeInUp} className="flex flex-wrap items-center gap-3 pt-1">
              <Link href="/contact" className="group">
                <Button size="lg" className="group gap-2 transition-transform duration-100 active:scale-[0.97]">
                  Work With Rejish
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              <a href="/assets/cv/Rejish_Khanal_Resume.pdf" download>
                <Button size="lg" variant="outline" className="gap-2 transition-transform duration-100 active:scale-[0.97]">
                  <FileText className="h-4 w-4 text-primary" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
