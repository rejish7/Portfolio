"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  // Ensure we have a valid slug, fallback to id if needed
  const blogSlug = post.slug || post.id;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${blogSlug}`}>
        <Card className="h-full group hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardHeader>
            <div className="aspect-video relative overflow-hidden rounded-md bg-accent mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-mono text-muted-foreground/20 group-hover:text-muted-foreground/30 transition-colors">
                  {post.title.slice(0, 2)}
                </span>
              </div>
            </div>
            <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </CardTitle>
            <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(post.publishedAt)}
              </div>
              {post.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              )}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-accent text-foreground rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
