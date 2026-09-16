import { MetadataRoute } from "next";

async function fetchSlugs<T extends { slug: string }>(endpoint: string): Promise<T[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.rejishkhanal.com.np";
    const res = await fetch(`${apiUrl}${endpoint}`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://rejishkhanal.com.np";

  const [projects, blogs] = await Promise.all([
    fetchSlugs<{ slug: string; updatedAt?: string }>("/api/projects"),
    fetchSlugs<{ slug: string; publishedAt?: string; updatedAt?: string }>("/api/blogs"),
  ]);

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
  }));

  const blogEntries: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt
      ? new Date(post.updatedAt)
      : post.publishedAt
        ? new Date(post.publishedAt)
        : new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/technical-seo-specialist-nepal`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/seo-expert-nepal`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/seo-audit-nepal`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/local-seo-services-nepal`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/core-web-vitals-optimization`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/web-development-nepal`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/nextjs-seo-services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/django-developer-nepal`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/laravel-developer-nepal`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/seo-specialist-uk-technical-seo-wordpress`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/aeo-expert-nepal`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/geo-expert-nepal`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/google-search-console-expert-nepal`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/seo-specialist-kathmandu`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/wordpress-seo-expert-nepal`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tools/core-web-vitals-checker`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/technical-seo-ecommerce`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/core-web-vitals-saas`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/local-seo-restaurant`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tech-stack`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    ...projectEntries,
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...blogEntries,
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/free-seo-review`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
  ];
}
