import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/types";

export const metadata: Metadata = {
  title: "SEO & Web Development Portfolio — Rejish Khanal",
  description:
    "Real case studies showing SEO results and web development work. Clients include restaurants, marketing agencies, and local businesses across Australia and Nepal.",
  alternates: {
    canonical: "https://rejishkhanal.com.np/projects",
  },
};

// Enable ISR - revalidate every hour instead of fetching on every request
export const revalidate = 3600;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.rejishkhanal.com.np";

async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/projects`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Projects API returned ${res.status}: ${res.statusText}`);
      return [];
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("Projects API returned non-array:", typeof data);
      return [];
    }

    return data.map((project: any) => ({
      id: project._id || project.id,
      slug: project.slug || project._id,
      title: project.title,
      description: project.description,
      fullDescription: project.fullDescription,
      image: project.image,
      technologies: project.technologies || [],
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
      featured: project.featured,
      category: project.category,
    }));
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const allProjects = await getProjects();

  const projectsSchema = allProjects.map(project => ({
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "url": project.liveUrl || `https://rejishkhanal.com.np/projects#${project.slug}`,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "author": {
      "@type": "Person",
      "name": "Rejish Khanal"
    },
    "offers": project.liveUrl ? {
      "@type": "Offer",
      "url": project.liveUrl
    } : undefined,
    "codeRepository": project.githubUrl,
    "programmingLanguage": project.technologies.join(", "),
    "image": project.image
  }));

  return (
    <div className="pt-24 pb-24">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Rejish Khanal's Projects",
            "description": "A collection of web development projects showcasing full-stack development skills.",
            "url": "https://rejishkhanal.com.np/projects",
            "author": {
              "@type": "Person",
              "name": "Rejish Khanal",
              "url": "https://rejishkhanal.com.np"
            },
            "hasPart": projectsSchema
          })
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">SEO & Web Development Portfolio</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real case studies showing SEO results and web development work. Clients include
            restaurants, marketing agencies, and local businesses across Australia and Nepal.
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
