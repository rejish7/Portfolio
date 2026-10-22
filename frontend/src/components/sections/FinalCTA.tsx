"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Send, FolderOpen, ArrowRight, Clock, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, spring, stagger } from "@/lib/apple-motion";

const serviceList = [
  "Technical SEO audits",
  "AEO and GEO readiness",
  "Core Web Vitals optimization",
  "JavaScript and Next.js SEO",
  "Structured data implementation",
  "Crawlability and indexation analysis",
  "Code-level SEO implementation",
  "SEO-friendly full-stack development",
];

export function FinalCTA() {
  return (
    <section className="w-full py-20 lg:py-28" aria-labelledby="work-with-rejish">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
          className="rounded-3xl bg-card border border-border/50 p-8 sm:p-12 lg:p-16 shadow-xl shadow-black/[0.06] relative overflow-hidden"
        >
          {/* Subtle ambient glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary/[0.07] blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl flex flex-col gap-7">
            <motion.div {...fadeInUp}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-xs w-fit font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                DIRECT SEO AND DEVELOPMENT SUPPORT
              </span>
            </motion.div>

            <motion.h2
              id="work-with-rejish"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.1]"
            >
              Need Help Resolving a Technical SEO Problem?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              If your website has indexing problems, poor Core Web Vitals, JavaScript
              rendering issues, incomplete structured data, confusing site
              architecture, or limited visibility across search and answer engines, I
              can review the technical evidence and identify the next practical step.
            </motion.p>

            <motion.div {...fadeInUp}>
              <p className="text-sm font-semibold text-foreground mb-3">My services include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {serviceList.map((service, i) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={stagger(i, 0.04)}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {service}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <Button size="lg" className="gap-2 font-bold shadow-lg transition-transform duration-100 active:scale-[0.97]">
                  Start a Conversation
                  <Send className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/seo-audit-nepal">
                <Button size="lg" variant="outline" className="gap-2 transition-transform duration-100 active:scale-[0.97]">
                  Request an SEO Audit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="ghost" className="gap-2 transition-transform duration-100 active:scale-[0.97]">
                  <FolderOpen className="h-4 w-4" />
                  View Case Studies
                </Button>
              </Link>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="pt-3 flex flex-wrap items-center gap-6 font-mono text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-green-600 dark:text-green-400" />
                Response within 24 business hours
              </span>
              <span className="flex items-center gap-1.5">
                <Handshake className="h-4 w-4 text-green-600 dark:text-green-400" />
                Direct collaboration with Rejish Khanal
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
