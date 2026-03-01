import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Metadata } from "next"
import type { BlogPost, SEOMetadata } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Generates SEO metadata for a blog post
 * @param post - The blog post object
 * @param baseUrl - The base URL of the site (defaults to environment variable)
 * @returns SEOMetadata object with all SEO fields
 */
export function generateBlogSEOMetadata(
  post: BlogPost,
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || "https://rejishkhanal.com.np"
): SEOMetadata {
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`;

  // Generate meta title (max 60 characters for optimal SEO)
  const metaTitle = post.seo?.title ||
    `${post.title} | Rejish Khanal's Blog`.slice(0, 60);

  // Generate meta description (max 160 characters for optimal SEO)
  const metaDescription = post.seo?.description ||
    (post.excerpt || `${post.title} - Read this insightful article by Rejish Khanal.`).slice(0, 160);

  // Generate keywords from tags and content
  const keywords = post.seo?.keywords ||
    (post.tags ? [...post.tags, 'blog', 'technology', 'web development'] : ['blog', 'technology', 'web development']);

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    canonical: canonicalUrl,
    ogTitle: post.seo?.ogTitle || metaTitle,
    ogDescription: post.seo?.ogDescription || metaDescription,
    ogImage: post.seo?.ogImage || post.image,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    publishedTime: post.publishedAt,
    modifiedTime: post.publishedAt, // Could be updated when post is modified
    author: post.author || 'Rejish Khanal',
    section: 'Technology',
    tags: post.tags
  };
}

/**
 * Converts SEOMetadata to Next.js Metadata format
 * @param seoData - The SEO metadata object
 * @returns Next.js Metadata object
 */
export function convertSEOMetadataToNextJS(seoData: SEOMetadata): Metadata {
  const base: Metadata = {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords?.join(', '),
    alternates: {
      canonical: seoData.canonical,
    },
    twitter: {
      card: seoData.twitterCard || 'summary',
      title: seoData.ogTitle || seoData.title,
      description: seoData.ogDescription || seoData.description,
      images: seoData.ogImage ? [seoData.ogImage] : [],
    },
    other: {
      ...(seoData.author && { 'article:author': seoData.author }),
      ...(seoData.publishedTime && { 'article:published_time': seoData.publishedTime }),
      ...(seoData.modifiedTime && { 'article:modified_time': seoData.modifiedTime }),
      ...(seoData.section && { 'article:section': seoData.section }),
      ...(seoData.tags?.length && { 'article:tag': seoData.tags.join(',') }),
    },
  };

  if (seoData.ogType === 'article') {
    base.openGraph = {
      type: 'article',
      title: seoData.ogTitle || seoData.title,
      description: seoData.ogDescription || seoData.description,
      images: seoData.ogImage ? [{ url: seoData.ogImage, alt: seoData.ogTitle || seoData.title }] : [],
      publishedTime: seoData.publishedTime,
      modifiedTime: seoData.modifiedTime,
      authors: seoData.author ? [seoData.author] : [],
      section: seoData.section,
      tags: seoData.tags,
    };
  } else {
    base.openGraph = {
      type: 'website',
      title: seoData.ogTitle || seoData.title,
      description: seoData.ogDescription || seoData.description,
      images: seoData.ogImage ? [{ url: seoData.ogImage, alt: seoData.ogTitle || seoData.title }] : [],
    };
  }

  return base;
}
