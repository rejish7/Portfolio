"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const experiences = [
  {
    company: "E-Prabidhi Pvt. Ltd",
    role: "SEO Specialist & Web Developer",
    period: "April 2025 – February 2026",
    current: true,
    location: "Kathmandu, Nepal",
    description: "Leading technical SEO audits, optimizations, and full-stack web development for client projects, focusing on performance, Core Web Vitals, and organic growth.",
    technologies: ["Technical SEO", "Django", "Laravel", "PHP", "Vue.js", "PostgreSQL", "MySQL", "Redis", "GA4", "Google Search Console"],
  },
  {
    company: "E-Prabidhi Pvt. Ltd",
    role: "Backend Developer Intern",
    period: "September 2024 – March 2025",
    current: false,
    location: "Kathmandu, Nepal",
    description: "Developed and optimized RESTful APIs and backend modules with a strong emphasis on technical SEO best practices and performance improvements.",
    
    technologies: ["Django", "Laravel", "PHP", "Vue.js", "PostgreSQL", "MySQL", "Selenium", "HTML5", "CSS", "JavaScript"],
  },
  {
    company: "Florid Laboratories Pvt. Ltd",
    role: "Junior Quality Assurance Officer",
    period: "February 2022 – July 2024",
    current: false,
    location: "Lalitpur, Nepal",
    description: "Ensured GMP/SOP compliance and product quality through process validation, sampling, inspections, and documentation in a regulated pharmaceutical environment.",
    technologies: ["GMP/SOP Compliance", "Process Validation", "Documentation Management", "CAPA", "Audit Readiness"],
  },
];

export function ExperienceTeaser() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I&apos;ve made
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden sm:block" />

                {/* Content */}
                <div className={index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`flex items-center space-x-2 ${index % 2 === 0 ? "" : "md:flex-row-reverse md:space-x-reverse"}`}>
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Briefcase className="h-4 w-4 text-primary" />
                        </div>
                        {/* {exp.current && (
                          <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            Current
                          </span>
                        )} */}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-accent text-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
              </motion.div>
            ))}
            <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link href="/about">View full timeline →</Link>
          </Button>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
