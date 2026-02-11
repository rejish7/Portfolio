"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/types";

// Sample featured projects
const featuredProjects: Project[] = [
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/rejishkhanal/ecommerce",
    featured: true,
  },
  {
    id: "2",
    slug: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
    technologies: ["React", "Express", "MongoDB", "Socket.io", "Redux"],
    liveUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/rejishkhanal/taskapp",
    featured: true,
  },
  {
    id: "3",
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with data visualization, custom reports, and export functionality.",
    technologies: ["Vue.js", "Django", "Redis", "Chart.js", "Docker"],
    liveUrl: "https://analytics.example.com",
    githubUrl: "https://github.com/rejishkhanal/analytics",
    featured: true,
  },
];

export function Projects() {
  return (
    <section className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button size="lg" variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
