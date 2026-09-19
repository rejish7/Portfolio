"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WhoIsRejish() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono">
            WHO IS REJISH KHANAL?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            The Technical SEO Expert in Nepal Businesses Trust
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 space-y-6"
        >
          <p className="text-lg text-muted-foreground">
            Rejish Khanal is a technical SEO specialist based in Kathmandu,
            Nepal. He helps businesses improve their Google rankings through site
            audits, speed optimization, and structured data implementation.
          </p>
          <p className="text-lg text-muted-foreground">
            He also specializes in AEO (Answer Engine Optimization) and GEO
            (Generative Engine Optimization), making websites ready for
            AI-powered search like ChatGPT Search, Perplexity, and Google AI
            Overviews.
          </p>
          <p className="text-lg text-muted-foreground">
            With 2+ years of hands-on experience in SEO and web development,
            Rejish provides direct implementation, fixing issues on your
            website, not just handing over a PDF.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Button asChild size="lg">
            <Link href="/about">Learn More About Rejish</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Rejish Khanal</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
