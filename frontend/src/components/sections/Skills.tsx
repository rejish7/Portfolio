"use client";

import { motion } from "framer-motion";
import { Search, Code2, Server, Database, Wrench, Globe, Layers, Shield } from "lucide-react";

const skillGroups = [
  {
    category: "SEO & Digital Marketing",
    icon: Search,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-100 dark:border-blue-900/50",
    accent: "bg-blue-600",
    skills: [
      "Technical SEO",
      "Core Web Vitals",
      "Schema Markup (JSON-LD)",
      "Google Search Console",
      "Google Analytics 4",
      "AEO & GEO",
      "Keyword Research",
      "Crawl Audits",
    ],
  },
  {
    category: "Frontend",
    icon: Code2,
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-950/40",
    border: "border-cyan-100 dark:border-cyan-900/50",
    accent: "bg-cyan-600",
    skills: [
      "Next.js",
      "Vue.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5 & CSS",
      "Tailwind CSS",
      "Server-Side Rendering",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-950/40",
    border: "border-green-100 dark:border-green-900/50",
    accent: "bg-green-600",
    skills: [
      "Python",
      "Django",
      "FastAPI",
      "PHP",
      "Laravel",
      "REST APIs",
      "GraphQL",
      "Node.js",
    ],
  },
  {
    category: "Database & Infrastructure",
    icon: Database,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/40",
    border: "border-purple-100 dark:border-purple-900/50",
    accent: "bg-purple-600",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Git & CI/CD",
      "Linux Admin",
      "AWS",
      "Vercel",
    ],
  },
  {
    category: "Testing & QA",
    icon: Wrench,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/40",
    border: "border-orange-100 dark:border-orange-900/50",
    accent: "bg-orange-600",
    skills: [
      "Selenium",
      "Playwright",
      "Jest",
      "Lighthouse",
      "PageSpeed Insights",
      "Chrome DevTools",
      "Screaming Frog",
    ],
  },
];

const expertiseAreas = [
  {
    icon: Globe,
    title: "Full-Stack Development",
    description: "End-to-end web applications from database to deployment",
  },
  {
    icon: Shield,
    title: "SEO Implementation",
    description: "Code-level technical SEO fixes, not just recommendations",
  },
  {
    icon: Layers,
    title: "Performance Optimization",
    description: "Core Web Vitals, caching, and speed improvements",
  },
];

export function Skills() {
  return (
    <section className="py-20 md:py-24 relative" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono mb-3 block">
            Technical Stack
          </span>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The technologies and tools I use to build search-optimized, high-performance web applications.
          </p>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="flex items-center gap-4 p-4 rounded-xl bg-accent/50 border border-border/50"
              >
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{area.title}</h3>
                  <p className="text-xs text-muted-foreground">{area.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Skill Groups - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className={`group relative p-6 rounded-2xl border ${group.border} ${group.bg} hover:shadow-lg transition-all duration-300`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-6 right-6 h-0.5 ${group.accent} rounded-full opacity-60`} />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg ${group.bg} border ${group.border}`}>
                    <Icon className={`h-5 w-5 ${group.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{group.category}</h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-background/80 text-foreground border border-border/50 hover:border-primary/30 hover:bg-background transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
