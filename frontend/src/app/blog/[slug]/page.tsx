import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cache } from "react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SchemaScript } from "@/components/SchemaScript";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import type { BlogPost } from "@/lib/types";

export const dynamic = "force-dynamic";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.rejishkhanal.com.np";

// Dedupe the API call shared by generateMetadata() and the page component
// within one render pass (halves API traffic and rate-limit exposure).
const getBlogPost = cache(async (slug: string): Promise<BlogPost | null> => {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/blogs/${slug}`, {
        signal: AbortSignal.timeout(30000),
      });

      // Genuine "not found" — the only case that should become a 404 page.
      if (res.status === 404) return null;

      if (!res.ok) {
        throw new Error(`Blog API responded with ${res.status}`);
      }

      const post = await res.json();

      return {
        id: post._id || post.id,
        slug: post.slug || post._id,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        image: post.image,
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        readTime: post.readTime,
        tags: post.tags,
        author: post.author,
        seo: post.seo,
      };
    } catch (error) {
      console.error(`Failed to fetch blog post (attempt ${attempt}):`, error);
      if (attempt === 3) {
        // Transient API failure (rate limit / 5xx / network): surface a server
        // error instead of a soft 404 so valid URLs are never reported as missing.
        throw new Error(`Failed to load /blog/${slug}: ${error}`);
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
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const canonicalUrl = `https://rejishkhanal.com.np/blog/${slug}`;
  const brandSuffix = /\s*\|\s*Rejish Khanal$/i;
  const BRAND = "| Rejish Khanal";
  const stopWords = new Set([
    "a", "an", "and", "at", "by", "for", "in", "is", "of", "on", "the", "to",
    "that", "with", "your",
  ]);

  const trimAtWord = (text: string, max: number): string => {
    const value = text.trim();
    if (value.length <= max) return value;
    const cut = value.lastIndexOf(" ", max);
    const result = (cut > 0 ? value.slice(0, cut) : value.slice(0, max)).trim();
    const words = result.split(" ");
    while (words.length > 1 && stopWords.has(words[words.length - 1].toLowerCase())) {
      words.pop();
    }
    return words.join(" ").replace(/[\s,;:|]+$/, "");
  };

  const baseTitle = (post.seo?.title || post.title).replace(brandSuffix, "").trim();
  const metaTitle = `${trimAtWord(baseTitle, 60 - BRAND.length - 1)} ${BRAND}`;

  const metaDescription = trimAtWord(
    post.seo?.description || post.excerpt || post.title,
    160
  );

  return {
    title: { absolute: metaTitle },
    description: metaDescription,
    keywords: post.seo?.keywords?.join(", ") || post.tags?.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seo?.ogTitle
        ? trimAtWord(post.seo.ogTitle.replace(brandSuffix, ""), 70)
        : metaTitle,
      description: post.seo?.ogDescription
        ? trimAtWord(post.seo.ogDescription, 160)
        : metaDescription,
      url: canonicalUrl,
      siteName: "Rejish Khanal",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author || "Rejish Khanal"],
      images: post.seo?.ogImage
        ? [{ url: post.seo.ogImage }]
        : post.image
          ? [{ url: post.image }]
          : [],
    },
  };
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

  const canonicalUrl = `https://rejishkhanal.com.np/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    url: canonicalUrl,
    image: post.image ? [post.image] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author:
      post.author && post.author !== "Rejish Khanal"
        ? { "@type": "Person", name: post.author }
        : { "@type": "Person", "@id": "https://rejishkhanal.com.np/#person" },
    publisher: {
      "@type": "Person",
      "@id": "https://rejishkhanal.com.np/#person",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    keywords: post.tags?.join(", "),
    articleSection: "Technology",
    wordCount: post.content?.split(/\s+/).length || 0,
  };

  return (
    <article className="pt-24 pb-24">
      <SchemaScript schema={articleSchema} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

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

        {/* Featured Image */}
        {post.image && (
          <div className="aspect-video relative overflow-hidden rounded-lg bg-accent mb-12">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              priority={true}
            />
          </div>
        )}

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
