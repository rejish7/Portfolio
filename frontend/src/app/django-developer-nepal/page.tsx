import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Django Developer in Nepal | SEO-Friendly Web Applications",
  description:
    "Django developer in Nepal for SEO-friendly web applications. Python, backend development, and full stack solutions for startups and enterprises.",
  keywords: [
    "Django developer Nepal",
    "Python developer Nepal",
    "Django web development Nepal",
    "backend developer Nepal",
    "full stack developer Python",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/django-developer-nepal",
  },
};

export default function DjangoDeveloperPage() {
  const services = [
    "Django REST API development",
    "Django ORM optimization",
    "Celery task queues",
    "PostgreSQL database design",
    "Django SEO implementation",
    "Pagination and caching",
    "Security best practices",
    "Performance optimization",
    "CI/CD pipeline setup",
    "AWS/DigitalOcean deployment",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Django Developer Services",
            "url": "https://rejishkhanal.com.np/django-developer-nepal",
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Django Developer in Nepal for SEO-Friendly Web Applications
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Need a Django developer for your backend or full stack project? I build scalable, performant Django
            applications optimized for SEO, speed, and reliability.
          </p>

          <Link href="/contact">
            <Button size="lg" className="group">
              Hire a Django Developer
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Django Services I Provide</h2>
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
          <h2 className="text-3xl font-bold mb-4">Need a Django Developer?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's build something great together. Flexible rates, quality code, and fast delivery.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Hire Me Now
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
