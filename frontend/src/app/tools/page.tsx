import type { Metadata } from "next";
import Link from "next/link";
import { SchemaScript } from "@/components/SchemaScript";
import { Gauge, Search, Code2, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Free SEO and Website Performance Tools",
  description:
    "Use free SEO and website performance tools from Rejish Khanal to review technical issues, Core Web Vitals, and search optimization opportunities.",
  keywords: [
    "free SEO tools",
    "core web vitals checker",
    "website audit tool",
    "page speed test",
    "SEO checker online",
    "technical SEO tools",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/tools",
  },
  openGraph: {
    title: "Free SEO and Website Performance Tools | Rejish Khanal",
    description:
      "Use free SEO and website performance tools from Rejish Khanal to review technical issues, Core Web Vitals, and search optimization opportunities.",
    url: "https://rejishkhanal.com.np/tools",
    siteName: "Rejish Khanal",
    type: "website",
  },
};

const tools = [
  {
    title: "Core Web Vitals & SEO Checker",
    description:
      "Test your website's Core Web Vitals (LCP, CLS, INP), on-page SEO, and performance. Get an SEO score out of 100 with prioritized recommendations.",
    href: "/tools/core-web-vitals-checker",
    icon: Gauge,
    badge: "Popular",
    status: "live" as const,
  },
  {
    title: "Technical SEO Auditor",
    description:
      "Comprehensive technical SEO audit covering crawlability, indexing, schema markup, redirects, and site architecture.",
    href: "#",
    icon: Search,
    badge: "Coming Soon",
    status: "coming" as const,
  },
  {
    title: "Schema Markup Generator",
    description:
      "Generate JSON-LD structured data for Organization, Person, FAQ, Article, and Product schemas.",
    href: "#",
    icon: Code2,
    badge: "Coming Soon",
    status: "coming" as const,
  },
  {
    title: "SEO Comparison Tool",
    description:
      "Compare your website against competitors on Core Web Vitals, on-page SEO, and technical performance.",
    href: "#",
    icon: BarChart3,
    badge: "Coming Soon",
    status: "coming" as const,
  },
];

export default function ToolsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free SEO Tools by Rejish Khanal",
    description: "Free online SEO tools for website analysis and optimization.",
    url: "https://rejishkhanal.com.np/tools",
    itemListElement: tools.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tool.title,
      url: tool.status === "live" ? `https://rejishkhanal.com.np${tool.href}` : undefined,
    })),
  };

  return (
    <>
      <SchemaScript schema={itemListSchema} />

      <div className="pt-24 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
              Free SEO Tools
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              SEO Tools for Better Rankings
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Free tools to check your website&apos;s performance, SEO health, and
              Core Web Vitals. Built by a technical SEO expert to help you rank higher.
            </p>
          </header>

          {/* Tools Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const isLive = tool.status === "live";

              const cardContent = (
                <div
                  className={`h-full rounded-xl border-2 p-8 transition-all ${
                    isLive
                      ? "bg-card hover:shadow-xl hover:border-primary/50 cursor-pointer"
                      : "bg-muted/30 border-dashed opacity-75"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        isLive
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {tool.badge}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3">{tool.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
                  {isLive && (
                    <div className="mt-6">
                      <span className="text-sm font-semibold text-primary">
                        Try it now →
                      </span>
                    </div>
                  )}
                </div>
              );

              return isLive ? (
                <Link key={tool.href} href={tool.href}>
                  {cardContent}
                </Link>
              ) : (
                <div key={tool.href}>{cardContent}</div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground mb-4">
              Need a custom SEO tool or audit for your business?
            </p>
            <a href="mailto:contact@rejishkhanal.com.np">
              <span className="text-primary font-semibold hover:underline cursor-pointer">
                Contact me →
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
