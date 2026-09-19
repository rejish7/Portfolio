"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Mail, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 lg:p-12 rounded-3xl bg-card border border-border shadow-md flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
      >
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-secondary font-mono text-xs mb-4">
            <Search className="h-4 w-4" />
            No Obligation Preliminary Inspection
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Unsure Which Service Fits Your Website&apos;s State?
          </h2>

          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            Send your URL. I will perform a preliminary check on your crawl
            status, indexation health, and Core Web Vitals metrics, and tell you
            straight whether technical engineering work is actually warranted.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-sm text-foreground/70">
              <Clock className="h-4 w-4 text-primary" />
              24-48 hr response
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-foreground/70">
              <Globe className="h-4 w-4 text-primary" />
              Kathmandu, Nepal &amp; Remote
            </span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <Link href="/contact">
            <Button size="lg" className="gap-2 font-bold shadow-lg">
              Request a Technical Review
              <span aria-hidden="true">&rarr;</span>
            </Button>
          </Link>
          <Link href="mailto:contact@rejishkhanal.com.np">
            <Button size="lg" variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              Email Direct
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
