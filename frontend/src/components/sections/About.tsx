"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Target } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code following best practices.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering solutions that meet business objectives and user needs.",
  },
  {
    icon: Sparkles,
    title: "Innovative",
    description: "Always exploring new technologies and approaches to solve complex problems.",
  },
];

export function About() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12">About Rejish Khanal</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content + personal touch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a <span className="text-primary font-medium">SEO Specialist </span> with deep expertise in <span className="text-primary font-medium">Technical SEO, Full Stack Web Development (Python/Django, PHP/Laravel, Next.js)</span>, and <span className="text-primary font-medium">performance optimization</span>. My approach: combine developer-level technical skills with SEO expertise to build fast, crawlable, high-performing websites.
              </p>

              <p>
                <span className="text-primary font-medium">Proven Results:</span> Driven <span className="text-primary font-medium">40-60% organic traffic increases</span> across multiple client projects through technical SEO audits, on-page optimization, keyword research, and competitive analysis using GA4 and Google Search Console.
              </p>

              <p>
                <span className="text-primary font-medium">Technical Expertise:</span> Specialize in <span className="text-primary font-medium">Core Web Vitals optimization</span> — improving LCP, CLS, and INP through code splitting, image optimization, database query refinement, and server response time improvements. I've reduced page load times from 5.2s to 1.9s, directly impacting rankings and conversions.
              </p>

              <p>
                <span className="text-primary font-medium">SEO Implementation:</span> Lead comprehensive technical SEO audits implementing <span className="text-primary font-medium">schema markup, clean URL structures, mobile-first design, crawlability enhancements, and proper indexing</span>. I optimize on-page elements (meta tags, headings, internal linking) and conduct keyword research, competitive analysis, and search intent mapping.
              </p>

              <p>
                <span className="text-primary font-medium">Development Stack:</span> Full-stack proficiency in <span className="text-primary font-medium">Python (Django, FastAPI), PHP (Laravel), Vue.js, Next.js, PostgreSQL, MySQL, Redis</span>. All applications are built with <span className="text-primary font-medium">Core Web Vitals, schema markup, and proper rendering strategies</span> for SEO from day one.
              </p>

              <p>
                <span className="text-primary font-medium">JavaScript SEO Specialist:</span> Expert in <span className="text-primary font-medium">server-side rendering, dynamic metadata, canonical URLs, and ensuring crawlable content</span> for Next.js and Vue.js applications that Google can effectively index.
              </p>

              <p>
                Previously worked in <span className="text-primary font-medium">pharmaceutical quality assurance</span> — developing precision, documentation discipline, and regulatory compliance mindset that translate to writing testable, maintainable code and structured problem-solving in agile teams.
              </p>

              <p className="font-medium text-foreground">
                Available for <span className="text-primary">Technical SEO consulting, SEO audits, full-stack web development, Python/Django projects, Laravel development, Next.js applications, and performance optimization</span>.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-muted-foreground italic">
                Open to opportunities, mentorship, code discussions, or SEO tips — let's connect!
              </p>
            </div>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
