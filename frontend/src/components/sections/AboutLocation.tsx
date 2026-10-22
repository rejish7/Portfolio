"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, spring } from "@/lib/apple-motion";

export function AboutLocation() {
  return (
    <section className="w-full bg-muted/30 py-20 lg:py-28" aria-labelledby="seo-expert-kathmandu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <motion.div {...fadeInUp} className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.12em] font-semibold">
              Location and Availability
            </span>
            <h2
              id="seo-expert-kathmandu"
              className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.1]"
            >
              Technical SEO Expert Based in Kathmandu, Nepal
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="flex flex-col gap-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I am based in Kathmandu, Nepal, and work with local and international
              businesses through remote collaboration.
            </p>
            <p>
              My combined SEO and development experience is particularly useful for
              businesses that have already received SEO recommendations but need help
              translating those recommendations into technical changes that developers
              can implement and verify.
            </p>
            <p>
              For businesses targeting customers in Nepal, I can also assess local
              landing pages, business information consistency, internal links, location
              relevance, structured data, and Google Business Profile alignment.
            </p>
          </motion.div>

          {/* Base of operations — translucent card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={spring}
            className="p-5 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/50 shadow-sm shadow-black/[0.03] flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-foreground uppercase tracking-[0.1em] font-bold">
                Base of Operations
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kathmandu, Nepal &bull; Supporting founders, dev teams, and agencies across Nepal, UK,
                Australia, US &amp; worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Link href="/local-seo-services-nepal">
              <Button variant="outline" className="gap-2 transition-transform duration-100 active:scale-[0.97]">
                Explore Local SEO Services in Nepal
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
