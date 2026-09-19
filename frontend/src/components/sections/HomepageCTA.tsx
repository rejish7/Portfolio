"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Direct implementation, not just reports",
  "Core Web Vitals optimization",
  "AEO and GEO for AI search engines",
  "Full-stack development capability",
];

export function HomepageCTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-card border border-border shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column — Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-12 flex flex-col justify-center"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-xs w-fit font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                AVAILABLE FOR NEW PROJECTS
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Let&apos;s Fix Your Technical SEO
              </h2>

              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                Based in Kathmandu, Nepal. Serving clients worldwide with
                hands-on technical SEO, AEO/GEO readiness, and full-stack
                development.
              </p>

              <ul className="space-y-3 mb-8">
                {benefits.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 font-bold">
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="gap-2">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column — Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-primary/5 border-t lg:border-t-0 lg:border-l border-border p-8 lg:p-12 flex flex-col justify-center"
            >
              <h3 className="text-lg font-bold mb-6">Quick Contact</h3>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      contact@rejishkhanal.com.np
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-1">
                      Response Time
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Within 24 business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-1">
                      Availability
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Remote worldwide
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button variant="outline" className="w-full gap-2">
                  Request a Free SEO Audit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
