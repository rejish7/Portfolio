import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { notFound } from "next/navigation";

interface CaseStudy {
  title: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  "technical-seo-ecommerce": {
    title: "Technical SEO Audit - E-Commerce Site",
    description: "Improved crawlability and Core Web Vitals leading to 45% traffic increase",
    overview:
      "An e-commerce website was struggling with poor search visibility, slow page loads, and indexing issues. A comprehensive technical SEO audit and implementation plan was needed to unlock organic growth.",
    challenge:
      "The site had significant crawlability issues including broken canonical tags, oversized JavaScript bundles blocking rendering, unoptimized product images, and a disorganized XML sitemap. Core Web Vitals scores were poor across all metrics, directly impacting search rankings.",
    solution:
      "Implemented a full technical SEO overhaul: fixed canonical tags, optimized JavaScript code splitting, compressed and lazy-loaded images, restructured the XML sitemap to prioritize product pages, improved server response times, and added structured data (Product schema) to all product pages.",
    results:
      "Within three months, organic traffic increased by 45%, LCP dropped from 5.2s to 1.9s, and 28 new keywords reached the first page of Google. Bounce rate decreased by 18% and conversion rate improved significantly.",
    metrics: [
      { label: "Traffic Increase", value: "45%" },
      { label: "Ranking Improvement", value: "+28 keywords" },
      { label: "LCP Improvement", value: "5.2s → 1.9s" },
    ],
    technologies: [
      "Core Web Vitals",
      "Schema Markup",
      "XML Sitemap",
      "JavaScript SEO",
      "Image Optimization",
    ],
  },
  "core-web-vitals-saas": {
    title: "Core Web Vitals Optimization",
    description: "Optimized page speed resulting in better rankings and 32% higher conversions",
    overview:
      "A SaaS platform needed to improve Core Web Vitals scores to maintain and improve search rankings after a Google algorithm update focused on page experience.",
    challenge:
      "LCP was consistently above 4 seconds, CLS scores were high due to dynamic content loading, and INP was sluggish on mobile devices. These issues were directly affecting search rankings and user retention.",
    solution:
      "Optimized server-side rendering, implemented image preloading, reduced CSS and JavaScript payload, added font-display: swap for web fonts, implemented content-visibility for below-the-fold content, and optimized the server response pipeline.",
    results:
      "LCP improved to 1.8s, CLS dropped to 0.05, and INP fell below 200ms. Organic rankings improved for key terms, conversions increased by 32%, and bounce rate decreased by 15%.",
    metrics: [
      { label: "LCP", value: "1.8s" },
      { label: "Conversion Increase", value: "+32%" },
      { label: "Bounce Rate", value: "-15%" },
    ],
    technologies: [
      "Core Web Vitals",
      "Server-Side Rendering",
      "Performance Optimization",
      "Image Optimization",
      "CSS Optimization",
    ],
  },
  "local-seo-restaurant": {
    title: "Local SEO Setup - Kathmandu Restaurant",
    description: "Google Business Profile optimization and local citations for visibility",
    overview:
      "A restaurant in Kathmandu wanted to improve its visibility in local search results, Google Maps, and voice search queries for food-related searches.",
    challenge:
      "The restaurant had an unclaimed Google Business Profile, inconsistent NAP (Name, Address, Phone) citations across directories, no local landing pages, and limited online reviews. Local search visibility was nearly nonexistent.",
    solution:
      "Claimed and fully optimized the Google Business Profile with photos, categories, and posts. Fixed NAP consistency across 15+ directories. Created location-specific landing pages targeting Kathmandu food searches. Implemented LocalBusiness schema markup and set up a review generation strategy.",
    results:
      "Google Maps views increased by 156%, website clicks from Maps grew by 89%, and phone calls from search increased by 120%. The restaurant now appears in the top 3 of local map pack for relevant searches.",
    metrics: [
      { label: "Google Maps Views", value: "+156%" },
      { label: "Website Clicks", value: "+89%" },
      { label: "Phone Calls", value: "+120%" },
    ],
    technologies: [
      "Local SEO",
      "Google Business Profile",
      "Schema Markup",
      "Local Citations",
      "Review Management",
    ],
  },
};

function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} - Case Study`,
    description: study.description,
    alternates: {
      canonical: `https://rejishkhanal.com.np/case-studies/${slug}`,
    },
    openGraph: {
      title: `${study.title} - Case Study | Rejish Khanal`,
      description: study.description,
      url: `https://rejishkhanal.com.np/case-studies/${slug}`,
      siteName: "Rejish Khanal",
      type: "website",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/case-studies" },
            { label: study.title },
          ]}
        />

        <div className="mb-12 mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{study.title}</h1>
          <p className="text-xl text-muted-foreground">{study.description}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {study.metrics.map((metric, idx) => (
            <div key={idx} className="text-center p-6 bg-accent/30 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{study.overview}</p>
        </section>

        {/* Challenge */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
        </section>

        {/* Solution */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">The Solution</h2>
          <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
        </section>

        {/* Results */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <p className="text-muted-foreground leading-relaxed">{study.results}</p>
        </section>

        {/* Technologies Used */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium bg-accent text-foreground rounded-md border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t border-border">
          <Link href="/case-studies">
            <Button variant="outline" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              All Case Studies
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="group">
              Get Similar Results
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
