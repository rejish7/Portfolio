import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate, generateBlogSEOMetadata, convertSEOMetadataToNextJS } from "@/lib/utils";
import { blogsAPI } from "@/lib/api";
import { notFound } from "next/navigation";

// Force dynamic rendering - prevents caching stale data
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const getBlogPost = async (slug: string) => {
  try {
    const response = await blogsAPI.getBySlug(slug);
    if (response.success && response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return null;
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const seoData = generateBlogSEOMetadata(post);

  return convertSEOMetadataToNextJS(seoData);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-24 pb-24">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image ? [post.image] : undefined,
            "datePublished": post.publishedAt,
            "dateModified": post.publishedAt,
            "author": {
              "@type": "Person",
              "name": post.author || "Rejish Khanal"
            },
            "publisher": {
              "@type": "Person",
              "name": "Rejish Khanal",
              "url": "https://rejishkhanal.com.np"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://rejishkhanal.com.np/blog/${slug}`
            },
            "keywords": post.tags?.join(", "),
            "articleSection": "Technology",
            "wordCount": post.content?.split(/\s+/).length || 0
          })
        }}
      />
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
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            )}
            {post.author && <div>By {post.author}</div>}
          </div>

          {post.tags && post.tags.length > 0 && (
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
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content ? (
            <div className="whitespace-pre-wrap space-y-6">
              {post.content}
            </div>
          ) : (
            <p className="text-muted-foreground">No content available.</p>
          )}
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
