"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
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
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <div className="aspect-video relative overflow-hidden rounded-md bg-accent mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-mono text-muted-foreground/20 group-hover:text-muted-foreground/30 transition-colors">
                {project.title.slice(0, 2)}
              </span>
            </div>
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
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
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="default" className="w-full group/btn">
                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                Live Demo
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
