"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutLocation() {
  return (
    <section className="w-full bg-muted/30 py-16 lg:py-24" aria-labelledby="seo-specialist-kathmandu">
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
              Location and Availability
            </span>
            <h2 id="seo-specialist-kathmandu" className="text-3xl sm:text-4xl font-bold tracking-tight">
              Technical SEO Expert Based in Kathmandu, Nepal
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-5 rounded-xl bg-card border border-border flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-foreground uppercase tracking-wider font-bold">
                Base of Operations
              </span>
              <p className="text-sm text-muted-foreground">
                Kathmandu, Nepal &bull; Supporting founders, dev teams, and agencies across Nepal, UK,
                Australia, US &amp; worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/local-seo-services-nepal">
              <Button variant="outline" className="gap-2">
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
