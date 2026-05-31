import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO-Friendly Web Development Services in Nepal",
  description:
    "SEO-friendly web development services in Nepal. Build fast, crawlable, and rankable websites with Next.js, React, Django, and Laravel.",
  keywords: [
    "web development Nepal",
    "web developer Nepal",
    "SEO-friendly web development",
    "website developer Nepal",
    "full stack developer Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/web-development-nepal",
  },
};

export default function WebDevelopmentPage() {
  const techStack = [
    { category: "Frontend", tech: "Next.js, React, Vue.js, TypeScript" },
    { category: "Backend", tech: "Node.js, Django, FastAPI, Laravel, PHP" },
    { category: "Database", tech: "PostgreSQL, MySQL, MongoDB, Redis" },
    { category: "DevOps", tech: "Docker, AWS, Vercel, DigitalOcean, GitHub Actions" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO-Friendly Web Development",
            "description": "Web development services in Nepal with SEO built-in",
            "url": "https://rejishkhanal.com.np/web-development-nepal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Rejish Khanal",
              "areaServed": "NP",
            },
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            SEO-Friendly Web Development Services in Nepal
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Most websites are built slow and invisible to search engines. I build fast, crawlable, and SEO-optimized
            websites from day one. Your new site will rank, perform, and convert.
          </p>

          <Link href="/contact">
            <Button size="lg" className="group">
              Build Your Website
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Tech Stack I Use</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {techStack.map((item, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    {item.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why SEO in Development */}
        <section className="mb-16 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-2xl font-bold mb-6">Why SEO Must Be Built Into Your Website</h2>
          <ul className="space-y-3">
            {[
              "Poor architecture makes Google skip pages",
              "Slow websites rank lower and lose users",
              "Missing schema markup means no rich snippets",
              "Bad code splits impact Core Web Vitals",
              "Fixing SEO after launch is expensive",
              "SEO-first development saves time and money",
            ].map((reason, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">{reason}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Build a Website That Ranks?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your project and SEO requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-16 border-t">
          <h3 className="text-lg font-semibold mb-4">Framework-Specific Services</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/nextjs-seo-services"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Next.js SEO Services</p>
            </Link>
            <Link
              href="/django-developer-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Django Developer</p>
            </Link>
            <Link
              href="/laravel-developer-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Laravel Developer</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
