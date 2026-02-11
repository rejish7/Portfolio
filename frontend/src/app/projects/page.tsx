import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/types";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects, including full-stack applications, e-commerce platforms, and more.",
};

// Sample projects data
const allProjects: Project[] = [
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/rejishkhanal/ecommerce",
    featured: true,
    category: "Full-Stack",
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
    category: "Full-Stack",
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
    category: "Frontend",
  },
  {
    id: "4",
    slug: "blog-platform",
    title: "Blog Publishing Platform",
    description: "Modern blogging platform with markdown support, SEO optimization, and content management.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveUrl: "https://blog.example.com",
    githubUrl: "https://github.com/rejishkhanal/blog-platform",
    category: "Full-Stack",
  },
  {
    id: "5",
    slug: "weather-app",
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts and interactive maps.",
    technologies: ["React", "TypeScript", "OpenWeather API", "Mapbox"],
    liveUrl: "https://weather.example.com",
    githubUrl: "https://github.com/rejishkhanal/weather-app",
    category: "Frontend",
  },
  {
    id: "6",
    slug: "chat-application",
    title: "Real-Time Chat Application",
    description: "Feature-rich chat application with private messaging, group chats, and file sharing.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://chat.example.com",
    githubUrl: "https://github.com/rejishkhanal/chat-app",
    category: "Full-Stack",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
