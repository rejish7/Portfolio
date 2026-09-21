"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Target, Sparkles, ShieldCheck, Search, Gauge, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Code2,
    title: "Developer-Level SEO Implementation",
    description: "I identify technical SEO problems and implement fixes directly in Next.js, Django, Laravel, React, Vue.js, and JavaScript-based websites.",
  },
  {
    icon: Target,
    title: "Direct Professional Access",
    description: "I work as a technical SEO expert and full-stack developer, giving clients direct access to the person doing the work.",
  },
  {
    icon: Sparkles,
    title: "AEO and GEO Expert",
    description: "I help businesses prepare content for AI-assisted search experiences, answer engines, featured snippets, and generative search platforms.",
  },
];

const developmentAreas = [
  {
    icon: Search,
    title: "Server-Side Rendering and Metadata",
    description: "I understand how server-side rendering, dynamic metadata generation, canonical URLs, and structured data work across Next.js, Django, and Laravel applications.",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals and Performance",
    description: "I can diagnose and optimize LCP, INP, and CLS by improving image loading, code splitting, JavaScript execution, caching, and server response time.",
  },
  {
    icon: ShieldCheck,
    title: "Crawlability and Indexing",
    description: "I review and fix robots.txt, XML sitemaps, noindex tags, canonical conflicts, redirect chains, HTTP status codes, and internal linking architecture.",
  },
];

const values = [
  "I investigate the root cause before suggesting solutions",
  "I implement fixes directly, not just write recommendations",
  "I communicate technical issues in clear, actionable terms",
  "I measure results and verify improvements with data",
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "40-60%", label: "Organic Growth Delivered" },
  { value: "100%", label: "CWV Pass Rate" },
  { value: "3+", label: "Companies Served" },
];

const keyFacts = [
  "Based in Kathmandu, Nepal. Serving clients in the US, UK, Australia, and worldwide.",
  "Former SEO Expert at Gripas Marketing and E-Prabidhi Pvt. Ltd.",
  "Achieved 40-60% organic traffic growth for e-commerce clients.",
  "Specializes in Next.js, Django, and Laravel with direct code implementation.",
  "Expert in Core Web Vitals (LCP, INP, CLS) optimization and JavaScript SEO.",
  "AEO and GEO expert for ChatGPT Search, Perplexity, and Google AI Overviews.",
];

export function About() {
  return (
    <section className="relative">
      {/* Hero area */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-background" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Photo column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-linear-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl opacity-60" />
                <div className="absolute -inset-1 bg-linear-to-br from-primary/30 to-primary/10 rounded-2xl" />

                {/* Photo container */}
                <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                  <Image
                    src="/assets/images/rejish-khanal.webp"
                    alt="Rejish Khanal - Technical SEO Expert in Kathmandu, Nepal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-4 -right-4 bg-background border border-border rounded-xl px-4 py-3 shadow-lg"
                >
                  <p className="text-sm font-semibold text-foreground">Based in Kathmandu</p>
                  <p className="text-xs text-muted-foreground">Nepal & Remote Worldwide</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Text content column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Direct Professional Access
                </motion.p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  About{" "}
                  <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Rejish Khanal
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  I help businesses become technically visible to search engines and AI-assisted discovery systems.
                </p>
              </div>

              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I am a{" "}
                  <span className="text-foreground font-medium">technical SEO expert</span>{" "}
                  and{" "}
                  <span className="text-foreground font-medium">full-stack developer</span>{" "}
                  based in <span className="text-foreground font-medium">Kathmandu, Nepal</span>. I help businesses identify and fix the technical problems that prevent search engines from crawling, indexing, and ranking their pages effectively.
                </p>

                <p>
                  My work covers{" "}
                  <span className="text-primary font-medium">technical SEO</span>,{" "}
                  <span className="text-primary font-medium">Core Web Vitals optimization</span>,{" "}
                  <span className="text-primary font-medium">structured data implementation</span>,{" "}
                  <span className="text-primary font-medium">JavaScript SEO</span>,{" "}
                  <span className="text-primary font-medium">Answer Engine Optimization (AEO)</span>, and{" "}
                  <span className="text-primary font-medium">Generative Engine Optimization (GEO)</span>.
                </p>

                <p>
                  What sets my work apart is that I do not only write SEO recommendations. I can investigate the technical cause of a problem and implement the required fix directly across{" "}
                  <span className="text-foreground font-medium">Next.js, Django, Laravel, PHP, React, Vue.js, JavaScript, PostgreSQL, and MySQL</span>.
                </p>
              </div>

              {/* Stats strip */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">{stat.value}</span>
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Values/Approach */}
              <div className="pt-2">
                <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">My Approach</p>
                <ul className="space-y-3">
                  {values.map((value, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{value}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
<Link href="/contact">
                    <Button size="lg" className="group">
                      Hire a Technical SEO Expert
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                <Link href="/seo-audit-nepal">
                  <Button size="lg" variant="outline">
                    Request an SEO Audit
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What I Do section */}
      <div className="py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono mb-3 block">
              What I Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical SEO &amp; Web Development Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I combine technical SEO strategy with developer-level implementation to deliver measurable results for businesses in Nepal and worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Development Background Matters */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono mb-3 block">
              Why Development Background Matters
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical SEO That Goes Beyond Recommendations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Many SEO consultants can identify problems but depend on developers to implement fixes. This creates delays, miscommunication, and incomplete solutions. Because I work across both SEO and development, I can diagnose a technical issue, understand the code-level cause, implement the fix, test the result, and verify the outcome.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {developmentAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Facts */}
      <div className="py-16 bg-accent/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono mb-3 block">
              Key Facts
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Rejish Khanal at a Glance
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {keyFacts.map((fact, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{fact}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Hire a Technical SEO Expert?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I am available for technical SEO audits, Core Web Vitals optimization, AEO/GEO readiness, and SEO-friendly web development. Based in Kathmandu, serving clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Hire Rejish Khanal
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/seo-audit-nepal">
                <Button size="lg" variant="outline">
                  Request an SEO Audit
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
