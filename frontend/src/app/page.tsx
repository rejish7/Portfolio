import { HomepageHero } from "@/components/sections/HomepageHero";
import { WhoIsRejish } from "@/components/sections/WhoIsRejish";
import { KeyExpertise } from "@/components/sections/KeyExpertise";
import { HomepageProblems } from "@/components/sections/HomepageProblems";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HomepageProcess } from "@/components/sections/HomepageProcess";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { AboutSummary } from "@/components/sections/AboutSummary";
import { TechnicalStack } from "@/components/sections/TechnicalStack";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { HomepageKeyFacts } from "@/components/sections/HomepageKeyFacts";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { HomepageFAQ } from "@/components/sections/HomepageFAQ";
import { HomepageCTA } from "@/components/sections/HomepageCTA";
import type { BlogPost } from "@/lib/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical SEO Expert in Nepal | Rejish Khanal",
  description:
    "Rejish Khanal is a technical SEO, AEO and GEO expert in Nepal providing audits, Core Web Vitals, JavaScript SEO and direct implementation.",
  keywords: [
    "technical SEO expert in Nepal",
    "SEO expert in Nepal",
    "AEO expert Nepal",
    "GEO expert Nepal",
    "technical SEO specialist Nepal",
    "Core Web Vitals expert Nepal",
    "SEO specialist Kathmandu",
    "Next.js SEO expert Nepal",
    "technical SEO audit Nepal",
    "JavaScript SEO specialist Nepal",
    "Answer Engine Optimization Nepal",
    "Generative Engine Optimization Nepal",
    "Django developer Nepal",
    "Laravel developer Nepal",
    "full-stack developer Nepal",
    "Schema markup implementation Nepal",
    "crawlability optimization Nepal",
    "indexation management Nepal",
    "structured data expert Nepal",
    "AI search optimization Nepal",
    "ChatGPT Search optimization",
    "Perplexity SEO",
    "Google AI Overviews optimization",
    "hire SEO expert Nepal",
  ],
  authors: [{ name: "Rejish Khanal", url: "https://rejishkhanal.com.np" }],
  creator: "Rejish Khanal",
  publisher: "Rejish Khanal",
  alternates: {
    canonical: "https://rejishkhanal.com.np",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Technical SEO Expert in Nepal | Rejish Khanal",
    description:
      "Rejish Khanal is a technical SEO, AEO and GEO expert in Nepal providing audits, Core Web Vitals, JavaScript SEO and direct implementation.",
    url: "https://rejishkhanal.com.np",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://rejishkhanal.com.np/assets/images/rejish-khanal-technical-seo-expert-nepal.webp",
        width: 800,
        height: 800,
        alt: "Rejish Khanal - Technical SEO Expert in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO Expert in Nepal | Rejish Khanal",
    description:
      "Rejish Khanal is a technical SEO, AEO and GEO expert in Nepal providing audits, Core Web Vitals, JavaScript SEO and direct implementation.",
    images: ["https://rejishkhanal.com.np/assets/images/rejish-khanal-technical-seo-expert-nepal.webp"],
    creator: "@KhanalRejish",
  },
};

export const revalidate = 3600;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.rejishkhanal.com.np";

async function getRecentBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blogs`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data
      .map((post: Record<string, unknown>) => ({
        id: (post._id || post.id) as string,
        slug: (post.slug || post._id) as string,
        title: post.title as string,
        excerpt: post.excerpt as string,
        content: post.content as string,
        image: post.image as string,
        publishedAt: post.publishedAt as string,
        updatedAt: post.updatedAt as string,
        readTime: post.readTime as string,
        tags: post.tags as string[],
        author: post.author as string,
        seo: post.seo as BlogPost["seo"],
      }))
      .slice(0, 3);
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

export default async function Home() {
  const recentBlogs = await getRecentBlogs();

  const siteUrl = "https://rejishkhanal.com.np";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Rejish Khanal",
    alternateName: ["Rejish", "Khanal Rejish"],
    url: siteUrl,
    image: `${siteUrl}/assets/images/rejish-khanal-technical-seo-expert-nepal.webp`,
    description:
      "Rejish Khanal is a technical SEO, AEO and GEO expert in Nepal providing audits, Core Web Vitals, JavaScript SEO and direct implementation.",
    jobTitle: ["Technical SEO Expert", "Full-Stack Developer"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      addressCountry: "NP",
    },
    geo: { "@type": "GeoCoordinates", latitude: 27.7172, longitude: 85.324 },
    knowsAbout: [
      "Technical SEO", "Search Engine Optimization", "Answer Engine Optimization",
      "Generative Engine Optimization", "Core Web Vitals", "JavaScript SEO",
      "Structured Data", "JSON-LD", "Google Search Console", "Google Analytics",
      "Next.js", "Django", "Laravel", "Python", "PHP", "PostgreSQL", "MySQL",
    ],
    sameAs: [
      "https://www.linkedin.com/in/rejishkhanalseo/",
      "https://github.com/rejish7",
      "https://x.com/KhanalRejish",
    ],
    email: "contact@rejishkhanal.com.np",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#professionalservice`,
    name: "Rejish Khanal - Technical SEO Expert in Nepal",
    url: siteUrl,
    description:
      "Rejish Khanal is a technical SEO, AEO and GEO expert in Nepal providing audits, Core Web Vitals, JavaScript SEO and direct implementation.",
    email: "contact@rejishkhanal.com.np",
    areaServed: [
      { "@type": "Country", name: "Nepal" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
    ],
    address: { "@type": "PostalAddress", addressLocality: "Kathmandu", addressCountry: "NP" },
    geo: { "@type": "GeoCoordinates", latitude: 27.7172, longitude: 85.324 },
    founder: { "@type": "Person", "@id": `${siteUrl}/#person`, name: "Rejish Khanal" },
    serviceType: [
      "Technical SEO Audit", "Core Web Vitals Optimization", "Answer Engine Optimization",
      "Generative Engine Optimization", "JavaScript SEO", "Structured Data Implementation",
      "SEO-Friendly Web Development", "Next.js Development", "Django Development", "Laravel Development",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SEO & Web Development Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO Audit", description: "Comprehensive technical SEO audit covering crawlability, indexing, Core Web Vitals, structured data, and JavaScript rendering." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Core Web Vitals Optimization", description: "Optimization of LCP, INP, and CLS metrics through code splitting, image optimization, and server performance improvements." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AEO & GEO Optimization", description: "Answer Engine Optimization and Generative Engine Optimization for AI search visibility in ChatGPT, Perplexity, and Google AI Overviews." } },
      ],
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rejish Khanal - Technical SEO Expert in Nepal",
    url: siteUrl,
    description: "Rejish Khanal is a technical SEO, AEO and GEO expert in Nepal providing audits, Core Web Vitals, JavaScript SEO and direct implementation.",
    author: { "@type": "Person", "@id": `${siteUrl}/#person`, name: "Rejish Khanal" },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Sections */}
      <main id="main-content" aria-label="Rejish Khanal - Technical SEO Expert in Nepal Homepage">
        <HomepageHero />
        <WhoIsRejish />
        <KeyExpertise />
        <HomepageProblems />
        <ServicesGrid />
        <HomepageProcess />
        <WhyChoose />
        <AboutSummary />
        <TechnicalStack />
        <CaseStudiesPreview />
        <HomepageKeyFacts />
        <BlogPreview posts={recentBlogs} />
        <HomepageFAQ />
        <HomepageCTA />
      </main>
    </>
  );
}
