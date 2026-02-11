"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/BlogCard";
import type { BlogPost } from "@/lib/types";

// Sample blog posts
const recentPosts: BlogPost[] = [
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
];

export function BlogPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest from the Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recentPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/blog">
            <Button size="lg" variant="outline" className="group">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
