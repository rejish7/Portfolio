import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cache } from "react";
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import type { Project } from "@/lib/types";

// Force dynamic rendering - prevents caching stale data
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.rejishkhanal.com.np";

// Dedupe the API call shared by generateMetadata() and the page component
// within one render pass (halves API traffic and rate-limit exposure).
const getProject = cache(async (slug: string): Promise<Project | null> => {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const res = await fetch(`${API_BASE_URL}/api/projects/slug/${slug}`);

            // Genuine "not found" — the only case that should become a 404 page.
            if (res.status === 404) return null;

            if (!res.ok) {
                throw new Error(`Projects API responded with ${res.status}`);
            }

            const project = await res.json();

            return {
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
            };
        } catch (error) {
            console.error(`Failed to fetch project (attempt ${attempt}):`, error);
            if (attempt === 3) {
                // Transient API failure: server error, never a soft 404.
                throw new Error(`Failed to load /projects/${slug}: ${error}`);
            }
            await new Promise((resolve) => setTimeout(resolve, 400 * attempt));
        }
    }
    return null;
});

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProject(slug);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
        };
    }

    return {
            title: {
                absolute: `${project.title} - SEO & Dev Case Study | Rejish Khanal`,
            },
        description: project.description,
        keywords: project.technologies.join(", "),
        alternates: {
            canonical: `https://rejishkhanal.com.np/projects/${slug}`,
        },
        openGraph: {
        title: `${project.title} - SEO & Dev Case Study | Rejish Khanal`,
            description: project.description,
            url: `https://rejishkhanal.com.np/projects/${slug}`,
            siteName: "Rejish Khanal",
            type: "website",
            images: project.image ? [{ url: project.image, alt: project.title }] : [],
        },
    };
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = await getProject(slug);

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
                        "url": project.liveUrl || `https://rejishkhanal.com.np/projects/${slug}`,
                        "applicationCategory": "WebApplication",
                        "operatingSystem": "Web Browser",
                        "author": {
                            "@type": "Person",
                            "@id": "https://rejishkhanal.com.np/#person"
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
                            "@id": `https://rejishkhanal.com.np/projects/${slug}`
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
                        <Image
                            src={project.image}
                            alt={`${project.title} - SEO & Dev Case Study`}
                            width={1200}
                            height={675}
                            className="w-full h-full object-cover"
                            priority={true}
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