"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.55, delay: (index % 3) * 0.08 }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        className="h-full"
      >
        <Card className="h-full flex flex-col overflow-hidden rounded-xl group hover:shadow-lg hover:border-primary/50 transition-colors">
          <CardHeader>
            <Link
              href={`/projects/${project.slug}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
            >
              <div className="aspect-video relative overflow-hidden rounded-lg bg-accent mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    aria-hidden="true"
                    className="text-5xl font-bold tracking-[-0.05em] text-muted-foreground/15 group-hover:text-muted-foreground/25 transition-colors duration-300"
                  >
                    {project.title.slice(0, 2)}
                  </span>
                </div>
                {project.results && project.results.length > 0 && (
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-foreground">
                    <TrendingUp className="h-3 w-3 text-primary" aria-hidden="true" />
                    {project.results[0].label}: {project.results[0].value}
                  </span>
                )}
              </div>
              {(project.industry || project.category) && (
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {project.industry || project.category}
                </span>
              )}
              <CardTitle className="group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription>{project.summary || project.description}</CardDescription>
            </Link>
          </CardHeader>

          <CardContent className="flex-1 space-y-4">
            {project.results && project.results.length > 0 && (
              <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
                {project.results.slice(0, 4).map((result) => (
                  <div key={result.label}>
                    <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {result.label}
                    </dt>
                    <dd className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-foreground">{result.value}</span>
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

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium bg-accent text-foreground rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex gap-2">
            <Button asChild variant="default" className="flex-1 group/btn">
              <Link href={`/projects/${project.slug}`}>
                Read Case Study
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
            {project.liveUrl && (
              <Button asChild variant="outline" size="icon" className="shrink-0">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live site (opens in a new tab)`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}
