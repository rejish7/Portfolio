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
                I&apos;m passionate about creating clean, fast-loading web applications that users love and search engines rank well. As a <span className="text-primary font-medium">Technical SEO Specialist and Full Stack Developer</span>, I combine deep expertise in <span className="text-primary font-medium">Python (Django, FastAPI), PHP (Laravel), JavaScript frameworks (Vue.js, Next.js), Node.js, PostgreSQL, and MySQL</span> with proven SEO methodologies.
              </p>

              <p>
                I&apos;ve built production applications like a <span className="text-primary font-medium">Hospital Management System using Django with PostgreSQL</span> and <span className="text-primary font-medium">Student Registration Systems with PHP/MySQL</span>, always prioritizing <span className="text-primary font-medium">performance, scalability, and SEO optimization</span>.
              </p>

              <p>
                I focus heavily on <span className="text-primary font-medium">Core Web Vitals optimization</span> — improving LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), and INP (Interaction to Next Paint) through code splitting, lazy loading, AVIF/WebP image formats, database query optimization, and server response time improvements. Better page speed = better rankings + higher conversion rates.
              </p>

              <p>
                On the <span className="text-primary font-medium">SEO/SEM side</span>, I implement technical best practices: <span className="text-primary font-medium">schema markup (JSON-LD), clean URL structures, mobile optimization, sitemap/robots.txt configuration, Google Search Console setup</span>, keyword research with GA4, and on-page optimization. In recent roles, these efforts helped client websites achieve 40%+ organic traffic growth.
              </p>

              <p>
                I specialize in <span className="text-primary font-medium">JavaScript SEO</span> — properly implementing server-side rendering, dynamic meta tags, canonical URLs, and ensuring crawlable content for Next.js and Vue.js applications that Google can index effectively.
              </p>

              <p>
                Before tech, I worked as a <span className="text-primary font-medium"> Junior QA in pharmaceuticals</span> — developing precision, documentation discipline, regulatory compliance mindset, and structured problem-solving. These skills transfer directly to writing testable code, thorough debugging, and working collaboratively in agile teams.
              </p>

              <p className="font-medium text-foreground">
                I&apos;m available for <span className="text-primary">Python/Django projects, PHP/Laravel web development, Next.js applications, Technical SEO audits, and full-stack custom development</span>. Open to entry-level or mid-level roles, contract work, or consulting.
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
