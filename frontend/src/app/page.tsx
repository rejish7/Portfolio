import { Hero } from "@/components/sections/Hero";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Skills } from "@/components/sections/Skills";
import { ExperienceTeaser } from "@/components/sections/ExperienceTeaser";
import { Projects } from "@/components/sections/Projects";
import { CTASection } from "@/components/sections/CTASection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { projectsAPI, blogsAPI } from "@/lib/api";
import type { Project, BlogPost } from "@/lib/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rejish Khanal Portfolio ",
  description: "Welcome to Rejish Khanal's portfolio - Full-Stack Developer and SEO Specialist. Explore my projects, blog posts, and get in touch for collaborations.",
  alternates: {
    canonical: "/",
  },
};

// Force dynamic rendering - prevents caching stale data
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const response = await projectsAPI.getAll();
    if (response.success && response.data) {
      return response.data.filter(p => p.featured).slice(0, 3);
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

async function getRecentBlogs(): Promise<BlogPost[]> {
  try {
    const response = await blogsAPI.getAll();
    if (response.success && response.data) {
      return response.data.slice(0, 3);
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

export default async function Home() {
  const [featuredProjects, recentBlogs] = await Promise.all([
    getFeaturedProjects(),
    getRecentBlogs(),
  ]);

  return (
    <>
      <Hero />
      <AboutTeaser />
      <Skills />
      <ExperienceTeaser />
      <Projects projects={featuredProjects} />
      <BlogPreview posts={recentBlogs} />
      <CTASection />
    </>
  );
}
