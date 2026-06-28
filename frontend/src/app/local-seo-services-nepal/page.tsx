import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SchemaScript } from "@/components/SchemaScript";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Search,
  Star,
  Building2,
  Link2,
  FileText,
  BarChart3,
  Store,
  Globe2,
  ShieldCheck,
  MapPinned,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO Services in Nepal | Google Maps Ranking Kathmandu",
  description:
    "Local SEO services in Nepal by Rejish Khanal. Improve Google Maps ranking, Google Business Profile visibility, local citations, reviews, and local search rankings in Kathmandu and Nepal.",
  keywords: [
    "local SEO services Nepal",
    "local SEO services in Nepal",
    "local SEO Kathmandu",
    "local SEO expert Kathmandu",
    "Google Maps ranking Nepal",
    "Google Maps ranking Kathmandu",
    "Google Business Profile optimization Nepal",
    "Google Business Profile optimization Kathmandu",
    "local SEO Nepal",
    "local search optimization Nepal",
    "SEO expert in Nepal",
    "SEO expert Kathmandu",
    "local business SEO Nepal",
    "Google Map SEO Nepal",
    "near me SEO Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/local-seo-services-nepal",
  },
  openGraph: {
    title: "Local SEO Services in Nepal | Google Maps Ranking Kathmandu",
    description:
      "Improve local search visibility, Google Maps rankings, Google Business Profile performance, citations, reviews, and local leads with local SEO services in Nepal.",
    url: "https://rejishkhanal.com.np/local-seo-services-nepal",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services in Nepal | Rejish Khanal",
    description:
      "Local SEO services for Google Maps ranking, Google Business Profile optimization, local citations, reviews, and Kathmandu-based search visibility.",
  },
};

export default function LocalSEOPage() {
  const services = [
    {
      icon: Store,
      title: "Google Business Profile Optimization",
      description:
        "Complete Google Business Profile setup, verification support, category optimization, business description improvement, service listing, photos, posts, products, and profile completeness.",
    },
    {
      icon: Building2,
      title: "Local Citation Building",
      description:
        "Create and improve business listings across relevant directories, local platforms, and citation sources to build consistency for your business name, address, phone number, and website.",
    },
    {
      icon: Search,
      title: "Local Keyword Targeting",
      description:
        "Target location-based keywords such as local SEO Kathmandu, restaurant near me, clinic in Kathmandu, real estate agency Nepal, and service-specific local search terms.",
    },
    {
      icon: Star,
      title: "Review Strategy and Reputation Support",
      description:
        "Build a review generation strategy, improve review response quality, strengthen customer trust, and support your business profile with positive reputation signals.",
    },
    {
      icon: Link2,
      title: "Local Link Building",
      description:
        "Earn relevant local backlinks from Nepali websites, directories, partner pages, community websites, local blogs, and industry-related sources.",
    },
    {
      icon: FileText,
      title: "LocalBusiness Schema Markup",
      description:
        "Add structured data such as LocalBusiness, PostalAddress, Service, FAQPage, BreadcrumbList, and areaServed schema to help search engines understand your business and location relevance.",
    },
    {
      icon: MapPinned,
      title: "Location Landing Page Optimization",
      description:
        "Create and optimize local landing pages for Kathmandu, Lalitpur, Bhaktapur, Pokhara, Chitwan, Butwal, Biratnagar, and other target service areas.",
    },
    {
      icon: BarChart3,
      title: "Local SEO Tracking and Reporting",
      description:
        "Track Google Business Profile performance, calls, website visits, direction requests, map visibility, keyword rankings, and organic local search improvements.",
    },
  ];

  const industries = [
    "Restaurants and Cafes",
    "Clinics and Hospitals",
    "Dental Clinics",
    "Education Consultancies",
    "Real Estate Agencies",
    "Law Firms",
    "Accounting Firms",
    "Travel and Tourism Businesses",
    "Hotels and Hospitality",
    "Fitness Studios",
    "Beauty Salons and Spas",
    "Repair and Maintenance Services",
    "Ecommerce Stores",
    "Local Service Providers",
    "Consulting Firms",
    "Professional Services",
  ];

  const locations = [
    "Kathmandu",
    "Lalitpur",
    "Bhaktapur",
    "Pokhara",
    "Chitwan",
    "Butwal",
    "Biratnagar",
    "Dharan",
    "Hetauda",
    "Nepal",
  ];

  const rankingFactors = [
    {
      title: "Relevance",
      description:
        "Your business profile, website content, categories, services, and local pages should clearly match what customers are searching for.",
    },
    {
      title: "Distance",
      description:
        "Google considers how close your business or service area is to the searcher or the location included in the search query.",
    },
    {
      title: "Prominence",
      description:
        "Reviews, citations, backlinks, brand mentions, website authority, and overall online trust can influence how prominent your business appears locally.",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Local SEO Discovery",
      description:
        "I review your business, target locations, services, competitors, current Google Business Profile, website pages, and local search goals.",
    },
    {
      step: 2,
      title: "Google Business Profile Audit",
      description:
        "I check your profile categories, description, services, photos, reviews, posts, contact details, website link, and optimization opportunities.",
    },
    {
      step: 3,
      title: "Website and Local Landing Page Optimization",
      description:
        "I optimize your website content, title tags, internal links, schema markup, location pages, service pages, and local keyword targeting.",
    },
    {
      step: 4,
      title: "Citations, Reviews, and Local Authority",
      description:
        "I improve NAP consistency, citation quality, local backlinks, review strategy, and trust signals that support stronger local visibility.",
    },
    {
      step: 5,
      title: "Tracking and Ongoing Improvement",
      description:
        "I monitor rankings, calls, direction requests, website clicks, local impressions, map visibility, and search performance over time.",
    },
  ];

  const faqs = [
    {
      question: "What is local SEO?",
      answer:
        "Local SEO is the process of optimizing your website and Google Business Profile so your business appears in local search results and Google Maps. It helps customers near your business or service area find your products and services more easily.",
    },
    {
      question: "Why is local SEO important for businesses in Nepal?",
      answer:
        "Local SEO is important for businesses in Nepal because customers often search online before visiting or contacting a local business. It helps businesses in Kathmandu and across Nepal appear for location-based searches, Google Maps results, and near-me queries.",
    },
    {
      question: "How do you improve Google Maps ranking in Nepal?",
      answer:
        "Google Maps ranking can be improved by optimizing your Google Business Profile, choosing accurate categories, adding services, improving reviews, creating local citations, adding photos, publishing updates, improving website relevance, and building local authority.",
    },
    {
      question: "Do you provide Google Business Profile optimization?",
      answer:
        "Yes, I provide Google Business Profile optimization in Nepal. This includes profile setup, category selection, business description, services, photos, posts, review strategy, website connection, and local ranking improvement recommendations.",
    },
    {
      question: "What businesses need local SEO services?",
      answer:
        "Local SEO is useful for restaurants, clinics, consultancies, real estate agencies, education consultancies, law firms, repair services, salons, gyms, hotels, travel businesses, and any business that serves customers in a specific location.",
    },
    {
      question: "Can local SEO help me rank for Kathmandu searches?",
      answer:
        "Yes, local SEO can help your business rank for Kathmandu-based searches when your website, Google Business Profile, citations, content, and reviews are optimized around your services and location.",
    },
    {
      question: "How long does local SEO take to show results?",
      answer:
        "Local SEO results depend on competition, business category, website quality, review profile, and current visibility. Some improvements can appear within a few weeks, while stronger Google Maps and local ranking growth usually takes two to four months or more.",
    },
    {
      question: "What is NAP consistency in local SEO?",
      answer:
        "NAP stands for name, address, and phone number. NAP consistency means your business details should be accurate and consistent across your website, Google Business Profile, directories, citations, and other online platforms.",
    },
    {
      question: "Do local citations still matter for SEO?",
      answer:
        "Yes, local citations can still support local SEO when they are accurate, relevant, and consistent. They help search engines verify your business details and improve trust across local discovery platforms.",
    },
    {
      question: "Can you help businesses outside Kathmandu?",
      answer:
        "Yes, I can help businesses in Kathmandu, Lalitpur, Bhaktapur, Pokhara, Chitwan, Butwal, Biratnagar, and across Nepal. I also support businesses targeting international local markets.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Local SEO Services in Nepal",
    description:
      "Local SEO services in Nepal for Google Maps ranking, Google Business Profile optimization, local citations, reviews, local landing pages, and local search visibility.",
    serviceType: "Local SEO",
    url: "https://rejishkhanal.com.np/local-seo-services-nepal",
    provider: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      jobTitle: "SEO Expert in Nepal and Local SEO Specialist",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NP",
        addressLocality: "Kathmandu",
      },
      sameAs: [
        "https://github.com/rejish7",
        "https://linkedin.com/in/rejish-khanal-259395402",
      ],
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Nepal",
      },
      {
        "@type": "City",
        name: "Kathmandu",
      },
      {
        "@type": "City",
        name: "Lalitpur",
      },
      {
        "@type": "City",
        name: "Bhaktapur",
      },
      {
        "@type": "City",
        name: "Pokhara",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Local SEO Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://rejishkhanal.com.np/#local-seo-service",
    name: "Rejish Khanal - Local SEO Services Nepal",
    description:
      "Local SEO specialist in Kathmandu, Nepal helping businesses improve Google Maps ranking, Google Business Profile visibility, local citations, reviews, and local search performance.",
    url: "https://rejishkhanal.com.np/local-seo-services-nepal",
    email: "contact@rejishkhanal.com.np",
    areaServed: [
      "Nepal",
      "Kathmandu",
      "Lalitpur",
      "Bhaktapur",
      "Pokhara",
      "Chitwan",
      "Butwal",
      "Biratnagar",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressLocality: "Kathmandu",
    },
    founder: {
      "@type": "Person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    sameAs: [
      "https://github.com/rejish7",
      "https://linkedin.com/in/rejish-khanal-259395402",
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Local SEO Services in Nepal",
    url: "https://rejishkhanal.com.np/local-seo-services-nepal",
    description:
      "Local SEO services in Nepal for Google Maps ranking, Google Business Profile optimization, local citations, reviews, and Kathmandu local search visibility.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "Local SEO Services Nepal",
      "Google Maps Ranking Nepal",
      "Google Business Profile Optimization",
      "Local SEO Kathmandu",
      "Local Search Optimization Nepal",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rejishkhanal.com.np",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Local SEO Services in Nepal",
        item: "https://rejishkhanal.com.np/local-seo-services-nepal",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={localBusinessSchema} />
      <SchemaScript schema={webPageSchema} />
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={faqSchema} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <p className="text-sm font-semibold text-primary mb-4">
            Local SEO Services in Nepal | Google Maps Ranking | Google Business Profile Optimization
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Local SEO Services in Nepal to Rank on Google Maps and Local Search
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            I am Rejish Khanal, an SEO expert in Kathmandu, Nepal. I help local
            businesses improve Google Maps ranking, Google Business Profile
            visibility, local search rankings, reviews, citations, and location-based
            website traffic.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            If customers search for your services in Kathmandu, Pokhara,
            Lalitpur, Bhaktapur, or anywhere in Nepal, local SEO can help your
            business appear when people are ready to call, visit, book, or buy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Local SEO Setup
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Request a Local SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        {/* Why Local SEO Matters */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Why Local SEO Matters for Businesses in Nepal
          </h2>

          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              Local SEO helps your business appear when customers search for
              nearby products, services, or professionals. For example, someone
              may search for a restaurant in Kathmandu, a clinic near them, an
              education consultancy in Nepal, or a service provider in their city.
            </p>

            <p>
              A strong local SEO strategy connects your Google Business Profile,
              website content, local landing pages, reviews, citations, schema
              markup, and local authority signals. This helps search engines and
              customers understand where you are, what you offer, and why your
              business is relevant.
            </p>

            <p>
              Local SEO is especially valuable for businesses that depend on
              calls, visits, appointment bookings, service inquiries, directions,
              and location-based leads.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Local SEO Services I Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card key={service.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <CardTitle>{service.title}</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Ranking Factors */}
        <section className="mb-20 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-3xl font-bold mb-6">
            What Affects Local SEO and Google Maps Rankings?
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Local search performance depends on several signals. The goal is to
            make your business more relevant, trustworthy, and visible for the
            locations and services you want to rank for.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {rankingFactors.map((factor) => (
              <Card key={factor.title}>
                <CardHeader>
                  <CardTitle>{factor.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">
                    {factor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Locations */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Locations I Can Help You Target
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            I help businesses target city-level and service-area searches across
            Nepal. This is useful for local service businesses, physical stores,
            clinics, consultancies, hospitality businesses, and professional
            service providers.
          </p>

          <div className="flex flex-wrap gap-3">
            {locations.map((location) => (
              <span
                key={location}
                className="px-4 py-2 rounded-full border bg-background text-sm font-medium"
              >
                {location}
              </span>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-20 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-3xl font-bold mb-6">
            Industries That Benefit From Local SEO
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div key={industry} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            My Local SEO Process
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {process.map((item) => (
              <Card key={item.step}>
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-3">
                    {item.step}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* GBP Section */}
        <section className="mb-20 p-8 rounded-lg border bg-background">
          <div className="flex items-start gap-4">
            <Globe2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Google Business Profile Optimization in Nepal
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Your Google Business Profile is one of the most important
                  assets for local SEO. It can help your business appear on
                  Google Maps, local search results, and branded searches when
                  customers look for your services.
                </p>

                <p>
                  I optimize your profile with accurate business information,
                  proper categories, service details, business description,
                  photos, posts, review response strategy, and website
                  connection. This helps customers and search engines understand
                  your business more clearly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="mb-20 p-8 rounded-lg border bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Local SEO Builds Trust Before Customers Contact You
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Customers often compare businesses before calling, visiting, or
                  booking a service. Your profile photos, reviews, business
                  information, website, and local content all influence whether
                  they trust your business.
                </p>

                <p>
                  Local SEO improves not only visibility but also credibility.
                  When your business information is complete and consistent, it
                  becomes easier for customers to choose you over competitors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions About Local SEO
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-10 sm:p-12 text-center border border-primary/20">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-4">
            Ready to Rank Locally on Google Maps and Search?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s optimize your Google Business Profile, local landing
            pages, citations, reviews, and website so customers in your target
            locations can find your business more easily.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Start Local SEO Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Get a Local SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">
            Related SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/seo-expert-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Expert in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Complete SEO strategy for rankings, traffic, AEO, GEO, and organic growth.
              </p>
            </Link>

            <Link href="/seo-audit-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                SEO Audit Services in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Find technical, content, and local SEO issues affecting your rankings.
              </p>
            </Link>

            <Link href="/technical-seo-specialist-nepal">
              <p className="font-semibold hover:text-primary transition-colors">
                Technical SEO Specialist in Nepal
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Improve crawlability, indexing, Core Web Vitals, schema, and website performance.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}