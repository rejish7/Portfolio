import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/types";
import { projectsAPI } from "@/lib/api";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects, including full-stack applications, e-commerce platforms, and more.",
};

// Force dynamic rendering - prevents caching stale data
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getProjects(): Promise<Project[]> {
  try {
    const response = await projectsAPI.getAll();
    if (response.success && response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const allProjects = await getProjects();

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

        {allProjects.length === 0 ? (
          <div className="text-center text-muted-foreground">
            <p>No projects available at the moment. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
