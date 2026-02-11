import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import type { BlogPost } from "@/lib/types";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles, tutorials, and insights on web development, SEO, and modern technologies.",
};

// Sample blog posts
const allPosts: BlogPost[] = [
  {
    id: "1",
    slug: "next-js-performance-optimization",
    title: "Next.js Performance Optimization: Best Practices for 2024",
    excerpt: "Learn how to optimize your Next.js applications for maximum performance with these proven techniques and strategies.",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "Performance", "Web Development"],
  },
  {
    id: "2",
    slug: "modern-seo-strategies",
    title: "Modern SEO Strategies for Developers",
    excerpt: "A comprehensive guide to implementing SEO best practices in modern web applications built with React and Next.js.",
    publishedAt: "2024-01-10",
    readTime: "7 min read",
    tags: ["SEO", "Marketing", "Web Development"],
  },
  {
    id: "3",
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for Scalable Applications",
    excerpt: "Explore advanced TypeScript patterns and techniques to build type-safe, maintainable, and scalable applications.",
    publishedAt: "2024-01-05",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: "4",
    slug: "tailwind-css-tips",
    title: "10 Tailwind CSS Tips for Better Design Systems",
    excerpt: "Discover practical tips and tricks to leverage Tailwind CSS effectively in your design systems.",
    publishedAt: "2023-12-28",
    readTime: "4 min read",
    tags: ["CSS", "Tailwind", "Design"],
  },
  {
    id: "5",
    slug: "react-server-components",
    title: "Understanding React Server Components",
    excerpt: "A deep dive into React Server Components, how they work, and when to use them in your applications.",
    publishedAt: "2023-12-20",
    readTime: "8 min read",
    tags: ["React", "Next.js", "Performance"],
  },
  {
    id: "6",
    slug: "api-design-best-practices",
    title: "RESTful API Design: Best Practices",
    excerpt: "Learn the principles of good API design and how to build RESTful APIs that developers love to use.",
    publishedAt: "2023-12-15",
    readTime: "6 min read",
    tags: ["API", "Backend", "Best Practices"],
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, SEO, and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
