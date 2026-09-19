"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Gripas Marketing",
    role: "SEO Specialist",
    period: "March 2026 – September 2026",
    current: false,
    location: "Remote",
    description: "Managed multi-client SEO across Nepal and Australia. Implemented crawl architecture fixes, entity optimization, and AI-assisted content strategies for Google AI Overviews and ChatGPT Search visibility.",
    responsibilities: [
      "Led technical SEO audits implementing structured data (JSON-LD), clean URL architecture, mobile-first enhancements, and crawlability fixes for improved indexing.",
      "Conducted keyword research, competitive analysis, and search intent mapping via GA4 and Google Search Console across multiple client verticals.",
      "Optimized Core Web Vitals (LCP, CLS, INP), internal linking for topical authority, and E-E-A-T signals for sustained first-page rankings.",
      "Executed entity optimization and AI-assisted content strategies for visibility in Google AI Overviews, ChatGPT Search, and Perplexity (GEO/AEO readiness).",
      "Generated actionable GA4 and GSC performance reports; tracked keyword trends and recommended data-driven adjustments aligned with algorithm updates.",
    ],
    technologies: ["Technical SEO", "GA4", "Google Search Console", "Schema Markup", "Entity Optimization", "GEO/AEO", "Core Web Vitals", "Ahrefs", "SEMrush"],
  },
  {
    company: "E-Prabidhi Pvt. Ltd",
    role: "SEO Specialist & Web Developer",
    period: "May 2025 – Feb 2026",
    current: false,
    location: "Kathmandu, Nepal",
    description: "Hybrid role combining SEO strategy with hands-on development. Achieved 40-60% organic traffic growth for e-commerce clients through technical fixes, backend optimization, and on-page refinements.",
    responsibilities: [
      "Increased estimated organic traffic by 40–60% across client projects through technical SEO audits, structured data implementation, and on-page optimizations.",
      "Refactored backend code and database queries (PostgreSQL / MySQL / Redis) in Django, PHP, and Laravel reducing page load times and boosting Core Web Vitals scores.",
      "Optimized on-page elements (meta tags, headings, alt text, semantic HTML) using Vue.js, HTML5, and JavaScript to align content with search intent.",
      "Executed site speed enhancements and link-building strategies contributing to improved domain authority and sustained organic growth for e-commerce clients.",
    ],
    technologies: ["Technical SEO", "Django", "Laravel", "PHP", "Vue.js", "PostgreSQL", "MySQL", "Redis", "GA4", "Link Building"],
  },
  {
    company: "E-Prabidhi Pvt. Ltd",
    role: "Backend Developer Intern",
    period: "September 2024 – March 2025",
    current: false,
    location: "Kathmandu, Nepal",
    description: "Focused on API development with built-in SEO considerations. Optimized database architecture, resolved crawl issues, and authored technical documentation for SEO implementation consistency.",
    responsibilities: [
      "Developed and optimized RESTful APIs using Django, PHP, and Laravel with clean URL structures and JSON-LD schema markup for improved indexing and search visibility.",
      "Optimized PostgreSQL/MySQL database queries and refactored legacy code, reducing API response times and improving page speed metrics critical for Core Web Vitals.",
      "Performed technical site audits and debugging with Selenium, resolving crawl errors, broken links, duplicate content, and indexing issues.",
      "Authored developer documentation and SEO implementation guides, reducing onboarding time and ensuring consistent technical standards across projects.",
    ],
    technologies: ["Django", "Laravel", "PHP", "Vue.js", "PostgreSQL", "MySQL", "Selenium", "REST APIs", "JSON-LD", "Playwright"],
  },
  {
    company: "Florid Laboratories Pvt. Ltd",
    role: "Junior Quality Assurance Officer",
    period: "February 2022 – July 2024",
    current: false,
    location: "Lalitpur, Nepal",
    description: "Ensured GMP/SOP compliance in regulated pharmaceutical environment. Developed process discipline, documentation rigor, and cross-functional collaboration skills transferable to structured development practices.",
    responsibilities: [
      "Ensured GMP/SOP compliance through process validation, sampling, and detailed documentation (BMR, QC records, stability samples).",
      "Built cross-functional process documentation and checklist systems; closed audit observations and improved audit readiness through CAPA follow-ups.",
      "Handled in-process and final inspections, safeguarding product quality and regulatory adherence across all manufacturing stages.",
      "Supported production and R&D teams during regulatory audits, successfully closing audit observations with evidence-based corrective actions.",
    ],
    technologies: ["GMP/SOP Compliance", "Process Validation", "Documentation", "CAPA", "Audit Readiness", "Quality Assurance"],
  },
];

export function Experience() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-accent/20 to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono mb-3 block">
            Work Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            SEO &amp; Development Experience in Nepal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My professional journey as a technical SEO specialist and full-stack developer in Kathmandu, Nepal
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                  {index < experiences.length - 1 && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-px h-16 bg-border" />
                  )}
                </div>

                {/* Content */}
                <div className={`md:grid md:grid-cols-2 md:gap-16 ${index % 2 === 0 ? "" : ""}`}>
                  <div className={`${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                    <div className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative">
                        {/* Header */}
                        <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors flex-shrink-0">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <div className={index % 2 === 0 ? "md:text-right" : ""}>
                            <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                            <p className="text-primary font-semibold">{exp.company}</p>
                          </div>
                        </div>

                        {/* Meta */}
                        <div className={`flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-5 leading-relaxed">{exp.description}</p>

                        {/* Responsibilities */}
                        <ul className={`space-y-2.5 mb-5 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          {exp.responsibilities.slice(0, 3).map((resp, i) => (
                            <li key={i} className={`text-sm text-muted-foreground flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                              <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          {exp.technologies.slice(0, 6).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 6 && (
                            <span className="px-2.5 py-1 text-xs font-medium bg-accent text-muted-foreground rounded-full">
                              +{exp.technologies.length - 6}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
