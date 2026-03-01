import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectsAPI } from "@/lib/api";
import { notFound } from "next/navigation";
import type { Project } from "@/lib/types";

// Force dynamic rendering - prevents caching stale data
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const getProject = async (slug: string) => {
    try {
        const response = await projectsAPI.getBySlug(slug);
        if (response.success && response.data) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error("Failed to fetch project:", error);
        return null;
    }
};

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const project = await getProject(params.slug);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
        };
    }

    return {
        title: `${project.title} - Project by Rejish Khanal`,
        description: project.description,
        keywords: project.technologies.join(", "),
        alternates: {
            canonical: `/projects/${params.slug}`,
        },
        openGraph: {
            title: `${project.title} - Project by Rejish Khanal`,
            description: project.description,
            images: project.image ? [{ url: project.image, alt: project.title }] : [],
        },
    };
}

export default async function ProjectPage({
    params,
}: {
    params: { slug: string };
}) {
    const project = await getProject(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="pt-24 pb-24">
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": project.title,
                        "description": project.description,
                        "url": project.liveUrl || `https://rejishkhanal.com.np/projects/${params.slug}`,
                        "applicationCategory": "WebApplication",
                        "operatingSystem": "Web Browser",
                        "author": {
                            "@type": "Person",
                            "name": "Rejish Khanal",
                            "url": "https://rejishkhanal.com.np"
                        },
                        "offers": project.liveUrl ? {
                            "@type": "Offer",
                            "url": project.liveUrl
                        } : undefined,
                        "codeRepository": project.githubUrl,
                        "programmingLanguage": project.technologies.join(", "),
                        "image": project.image,
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://rejishkhanal.com.np/projects/${params.slug}`
                        }
                    })
                }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back button */}
                <Link href="/projects">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Button>
                </Link>

                {/* Project Header */}
                <header className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">{project.title}</h1>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {project.category && (
                        <div className="text-sm text-muted-foreground mb-4">
                            Category: {project.category}
                        </div>
                    )}
                </header>

                {/* Project Image */}
                {project.image && (
                    <div className="aspect-video relative overflow-hidden rounded-lg bg-accent mb-8">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Project Description */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                    <p className="text-lg leading-relaxed">{project.description}</p>
                    {project.fullDescription && (
                        <div className="whitespace-pre-wrap space-y-4 mt-6">
                            {project.fullDescription}
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Live Demo
                            </Button>
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" size="lg">
                                <Github className="mr-2 h-4 w-4" />
                                View Source Code
                            </Button>
                        </a>
                    )}
                </div>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-border">
                    <Link href="/projects">
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            View All Projects
                        </Button>
                    </Link>
                </footer>
            </div>
        </div>
    );
}