"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const initials = project.title.slice(0, 2).toUpperCase();
  const extraTech = project.technologies.length - 3;

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.55, delay: (index % 3) * 0.08 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-lg"
    >
      {/* Visual header */}
      <div className="relative aspect-[16/9] overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent" />
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/10 blur-2xl transition-transform duration-500 group-hover:scale-110" />
        <span className="absolute inset-0 flex items-center justify-center select-none bg-gradient-to-b from-foreground/15 to-foreground/5 bg-clip-text text-transparent text-6xl font-bold tracking-[-0.06em] transition-opacity duration-300 group-hover:opacity-80">
          {initials}
        </span>
        {(project.industry || project.category) && (
          <span className="absolute left-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
            {project.industry || project.category}
          </span>
        )}
        {project.results && project.results.length > 0 && (
          <span className="absolute bottom-3 left-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 truncate rounded-full bg-background/70 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
            <TrendingUp className="h-3 w-3 shrink-0 text-primary" />
            {project.results[0].label}: {project.results[0].value}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em]">
            <Link
              href={`/projects/${project.slug}`}
              className="rounded-md text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring after:absolute after:inset-0 after:content-['']"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.summary || project.description}
          </p>
        </div>

        {project.results && project.results.length > 0 && (
          <dl className="grid grid-cols-2 gap-x-6">
            {project.results.slice(0, 2).map((result) => (
              <div key={result.label}>
                <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {result.label}
                </dt>
                <dd className="flex items-baseline gap-2">
                  <span className="text-xl font-bold tabular-nums tracking-[-0.02em] text-foreground">
                    {result.value}
                  </span>
                  {result.change && (
                    <span
                      className={`text-[11px] font-medium ${
                        result.direction === "up"
                          ? "text-emerald-600 dark:text-emerald-400"
                          : result.direction === "down"
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-muted-foreground"
                      }`}
                    >
                      {result.change}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-accent px-2 py-1 text-xs font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
          {extraTech > 0 && (
            <span className="text-xs text-muted-foreground">+{extraTech}</span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border px-6 py-4">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-[gap] duration-200 group-hover:gap-2.5">
          Read case study
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live site (opens in a new tab)`}
            className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
