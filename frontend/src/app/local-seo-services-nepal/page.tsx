import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO Services in Nepal | Google Maps & Local Ranking",
  description:
    "Local SEO services in Nepal to rank your business on Google Maps, local search, and Google Business Profile. Perfect for restaurants, clinics, consultancies, and local businesses in Kathmandu.",
  keywords: [
    "local SEO services Nepal",
    "local SEO Kathmandu",
    "Google Maps ranking Nepal",
    "Google Business Profile optimization",
    "local SEO Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/local-seo-services-nepal",
  },
};

export default function LocalSEOPage() {
  const services = [
    {
      title: "Google Business Profile Optimization",
      description: "Complete GBP setup, verification, optimization for maximum visibility",
    },
    {
      title: "Citation Building",
      description: "Add your business to 20+ local directories for local authority",
    },
    {
      title: "Local Keyword Targeting",
      description: "Optimize for Kathmandu, Pokhara, and city-specific search queries",
    },
    {
      title: "Review Management",
      description: "Strategy for getting positive reviews and managing reputation",
    },
    {
      title: "Local Link Building",
      description: "Acquire backlinks from local Nepali websites for local authority",
    },
    {
      title: "Local Schema Markup",
      description: "LocalBusiness, Address, Phone schema for Google Maps visibility",
    },
  ];

  const industries = [
    "Restaurants & Cafes",
    "Clinics & Hospitals",
    "Consulting Firms",
    "Real Estate",
    "e-Commerce",
    "Service Providers",
    "Fitness Studios",
    "Beauty & Spa",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Local SEO Services Nepal",
            "description": "Local SEO services in Nepal for Google Maps and local search ranking",
            "url": "https://rejishkhanal.com.np/local-seo-services-nepal",
            "areaServed": ["NP", "Kathmandu", "Pokhara"],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NP",
              "addressLocality": "Kathmandu",
            },
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Local SEO Services in Nepal to Rank on Google Maps and Local Search
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Want your business to show up when people in Kathmandu, Pokhara, or Nepal search for your services?
            Local SEO gets you on Google Maps, local search results, and attracts customers in your area.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Local SEO Setup
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Free Local SEO Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Local SEO Services I Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-16 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-2xl font-bold mb-6">Industries I Serve</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {industries.map((industry, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Rank Locally?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's get your business on Google Maps and local search.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Start Local SEO Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-16 border-t">
          <h3 className="text-lg font-semibold mb-4">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/seo-expert-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">SEO Expert Services</p>
            </Link>
            <Link
              href="/seo-audit-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">SEO Audit Nepal</p>
            </Link>
            <Link
              href="/technical-seo-specialist-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Technical SEO Specialist</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
