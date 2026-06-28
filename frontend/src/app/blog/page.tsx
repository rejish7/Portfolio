import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import type { BlogPost } from "@/lib/types";
import { blogsAPI } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Search, Gauge, Code2, Bot } from "lucide-react";
import { SchemaScript } from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "SEO Blog Nepal | Technical SEO, AEO, GEO & Web Development",
  description:
    "Read SEO articles by Rejish Khanal on technical SEO, Core Web Vitals, JavaScript SEO, AEO, GEO, local SEO, SEO audits, and web development in Nepal.",
  keywords: [
    "SEO blog Nepal",
    "technical SEO blog Nepal",
    "SEO expert Nepal blog",
    "technical SEO articles",
    "Core Web Vitals blog",
    "JavaScript SEO blog",
    "AEO blog Nepal",
    "GEO blog Nepal",
    "web development blog Nepal",
    "SEO tips Nepal",
    "local SEO Nepal blog",
    "SEO audit Nepal articles",
    "Rejish Khanal blog",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/blog",
  },
  openGraph: {
    title: "SEO Blog Nepal | Technical SEO, AEO, GEO & Web Development",
    description:
      "Practical SEO articles from Rejish Khanal covering technical SEO, Core Web Vitals, JavaScript SEO, AEO, GEO, local SEO, SEO audits, and web development.",
    url: "https://rejishkhanal.com.np/blog",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Blog Nepal | Rejish Khanal",
    description:
      "Technical SEO, Core Web Vitals, JavaScript SEO, AEO, GEO, local SEO, and web development articles by Rejish Khanal.",
  },
};

// Force dynamic rendering to prevent stale blog data
export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getBlogs(): Promise<BlogPost[]> {
  try {
    const response = await blogsAPI.getAll();

    if (response.success && response.data) {
      return response.data;
    }

    return [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

export default async function BlogPage() {
  const allPosts = await getBlogs();

  const baseUrl = "https://rejishkhanal.com.np";

  const blogPostsSchema = allPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${baseUrl}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author || "Rejish Khanal",
      url: baseUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    image: post.image ? post.image : undefined,
    keywords: post.tags?.join(", "),
  }));

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "SEO Blog Nepal by Rejish Khanal",
    description:
      "Practical articles on technical SEO, Core Web Vitals, JavaScript SEO, AEO, GEO, local SEO, SEO audits, and web development from an SEO expert in Nepal.",
    url: `${baseUrl}/blog`,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: baseUrl,
      jobTitle: "SEO Expert in Nepal and Technical SEO Specialist",
      sameAs: [
        "https://github.com/rejish7",
        "https://linkedin.com/in/rejish-khanal-259395402",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: baseUrl,
    },
    blogPost: blogPostsSchema,
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SEO Blog Nepal",
    url: `${baseUrl}/blog`,
    description:
      "A collection of SEO, technical SEO, Core Web Vitals, JavaScript SEO, AEO, GEO, local SEO, and web development articles by Rejish Khanal.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: baseUrl,
    },
    about: [
      "SEO Blog Nepal",
      "Technical SEO",
      "Core Web Vitals",
      "JavaScript SEO",
      "AEO",
      "GEO",
      "Local SEO",
      "SEO Audit",
      "Web Development Nepal",
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latest SEO Blog Posts",
    itemListElement: allPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${baseUrl}/blog/${post.slug}`,
      name: post.title,
      description: post.excerpt,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
    ],
  };

  const topics = [
    {
      icon: Search,
      title: "Technical SEO",
      description:
        "Crawlability, indexing, schema markup, internal links, website architecture, and SEO audits.",
      href: "/technical-seo-specialist-nepal",
    },
    {
      icon: Gauge,
      title: "Core Web Vitals",
      description:
        "LCP, INP, CLS, page speed, mobile performance, and website performance optimization.",
      href: "/core-web-vitals-optimization",
    },
    {
      icon: Code2,
      title: "JavaScript SEO",
      description:
        "Next.js SEO, React rendering, metadata, server-side rendering, hydration, and crawlability.",
      href: "/nextjs-seo-services",
    },
    {
      icon: Bot,
      title: "AEO and GEO",
      description:
        "Answer Engine Optimization, Generative Engine Optimization, AI search visibility, and structured content.",
      href: "/seo-expert-nepal",
    },
  ];

  return (
    <main className="pt-24 pb-24">
      <SchemaScript schema={blogSchema} />
      <SchemaScript schema={collectionPageSchema} />
      <SchemaScript schema={itemListSchema} />
      <SchemaScript schema={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-4">
            SEO Blog Nepal | Technical SEO | AEO | GEO | Web Development
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Technical SEO Blog for Better Rankings, Faster Websites, and AI Search Visibility
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Read practical SEO articles by Rejish Khanal, an SEO expert and
            technical SEO specialist in Nepal. This blog covers technical SEO,
            Core Web Vitals, JavaScript SEO, SEO audits, local SEO, AEO, GEO,
            and SEO-friendly web development.
          </p>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you want to improve Google rankings, fix website performance
            issues, prepare your content for AI search, or build a stronger SEO
            foundation, these articles are written to give you clear and
            practical insights.
          </p>
        </section>

        {/* Topic Clusters */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <Link key={topic.href} href={topic.href}>
                  <div className="h-full rounded-lg border bg-card p-6 hover:shadow-lg hover:border-primary/50 transition-all">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <h2 className="text-lg font-semibold mb-2">
                      {topic.title}
                    </h2>

                    <p className="text-sm text-muted-foreground">
                      {topic.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Blog Posts */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-3">
                Latest SEO Articles
              </h2>

              <p className="text-muted-foreground max-w-2xl">
                Explore the latest guides, insights, and practical SEO tips for
                technical SEO, website performance, local search, and AI search
                optimization.
              </p>
            </div>

            <Link href="/contact">
              <Button variant="outline" className="group">
                Ask About SEO Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {allPosts.length === 0 ? (
            <div className="text-center border rounded-lg p-12 bg-card">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-5" />

              <h2 className="text-2xl font-bold mb-3">
                No Blog Posts Available Yet
              </h2>

              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                New SEO articles on technical SEO, Core Web Vitals, JavaScript
                SEO, AEO, GEO, and web development will be available soon.
              </p>

              <Link href="/services">
                <Button>
                  View SEO Services
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </section>

        {/* Internal Links */}
        <section className="mt-20 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">
            Explore SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/seo-expert-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                SEO strategy, technical SEO, local SEO, AEO, GEO, and organic growth.
              </p>
            </Link>

            <Link href="/technical-seo-specialist-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                Technical SEO Specialist in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Improve crawlability, indexing, Core Web Vitals, schema, and website architecture.
              </p>
            </Link>

            <Link href="/seo-audit-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Audit Services in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Find ranking barriers, indexing issues, content gaps, and technical SEO problems.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}