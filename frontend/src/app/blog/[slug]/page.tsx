import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

// This would typically come from an API or database
const getBlogPost = async (slug: string) => {
  // Mock data - replace with actual API call
  return {
    id: "1",
    slug,
    title: "Next.js Performance Optimization: Best Practices for 2024",
    excerpt: "Learn how to optimize your Next.js applications for maximum performance.",
    content: `
# Introduction

Next.js has become the go-to framework for building modern React applications. However, as your application grows, performance can become a challenge. In this article, we'll explore proven techniques to keep your Next.js app fast and responsive.

## Image Optimization

One of the most impactful optimizations you can make is properly handling images. Next.js provides the Image component which automatically optimizes images.

\`\`\`tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={1200}
      height={600}
      priority
    />
  );
}
\`\`\`

## Code Splitting

Next.js automatically code-splits your application at the page level. You can take this further with dynamic imports:

\`\`\`tsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
\`\`\`

## Conclusion

By following these best practices, you can significantly improve your Next.js application's performance. Remember to measure, optimize, and test continuously.
    `,
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "Performance", "Web Development"],
    author: "Rejish Khanal",
  };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  return (
    <article className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
            <div>By {post.author}</div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="space-y-6"
          />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View All Posts
            </Button>
          </Link>
        </footer>
      </div>
    </article>
  );
}
