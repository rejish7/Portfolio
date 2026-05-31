import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Laravel Developer in Nepal | Fast & SEO-Ready Websites",
  description:
    "Laravel developer in Nepal for fast and SEO-ready websites. PHP, backend development, and full stack solutions.",
  keywords: [
    "Laravel developer Nepal",
    "PHP developer Nepal",
    "Laravel web development",
    "backend developer PHP",
    "Laravel website development Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/laravel-developer-nepal",
  },
};

export default function LaravelDeveloperPage() {
  const services = [
    "Laravel application development",
    "Laravel API development",
    "Eloquent ORM optimization",
    "Laravel Nova admin panels",
    "Database design and optimization",
    "Laravel SEO implementation",
    "Redis caching strategy",
    "Queue jobs and background tasks",
    "Testing and debugging",
    "Server deployment and DevOps",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Laravel Developer Services",
            "url": "https://rejishkhanal.com.np/laravel-developer-nepal",
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Laravel Developer in Nepal for Fast and SEO-Ready Websites
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Looking for a Laravel developer? I build fast, reliable, and SEO-optimized Laravel applications for
            businesses and startups.
          </p>

          <Link href="/contact">
            <Button size="lg" className="group">
              Hire a Laravel Developer
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Laravel Services I Provide</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg mt-1">✓</span>
                    <p className="text-foreground">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Let's Build with Laravel</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Quality Laravel development for your next project.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-16 border-t">
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/web-development-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Web Development Services</p>
            </Link>
            <Link
              href="/django-developer-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Django Developer</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
