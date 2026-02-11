import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import type { BlogPost } from "@/lib/types";
import { blogsAPI } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles, tutorials, and insights on web development, SEO, and modern technologies.",
};

// Revalidate every hour
export const revalidate = 3600;

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

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, SEO, and technology
          </p>
        </div>

        {allPosts.length === 0 ? (
          <div className="text-center text-muted-foreground">
            <p>No blog posts available at the moment. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
