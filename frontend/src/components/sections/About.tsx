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
                I'm passionate about creating clean, fast-loading web applications that users love and search engines rank well. With hands-on experience in{" "}
                <span className="text-primary font-medium">Python, Django, FastAPI, PHP, Laravel, Vue.js, HTML5, CSS, JavaScript, PostgreSQL, MySQL, Redis</span>, 
                I've built end-to-end projects like a Hospital Management System (Django) and Student Registration System (PHP/MySQL).
              </p>

              <p>
                I focus heavily on performance — optimizing database queries, refactoring code, and tuning for Core Web Vitals to deliver exceptional page speed and user experience.
              </p>

              <p>
                On the SEO side, I implement technical best practices: schema markup, clean URLs, mobile optimization, keyword research with GA4 & Google Search Console, and on-page elements. In recent roles, these efforts helped client sites achieve significant organic traffic growth.
              </p>

              <p>
                Before web development, I worked as a Junior Quality Assurance Officer in pharmaceuticals — where I developed precision, strong documentation habits, regulatory compliance mindset, and problem-solving under strict standards. These skills translate perfectly to writing testable code, debugging, and collaborating in agile teams.
              </p>

              <p className="font-medium text-foreground">
                I'm still growing — recently completed training in Python/Django and Generative AI — and excited to bring fresh energy to entry-level or mid-level roles as Python Developer, PHP Web Developer, Backend Developer, QA Engineer, or SEO Specialist.
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
