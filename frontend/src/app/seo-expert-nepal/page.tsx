import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Expert in Nepal | Technical SEO, Local SEO, Organic Growth",
  description:
    "SEO Expert in Nepal for technical SEO, local SEO, and organic growth. Helping businesses and startups rank on Google and attract qualified leads.",
  keywords: [
    "SEO expert Nepal",
    "SEO specialist Nepal",
    "SEO consultant Nepal",
    "freelance SEO expert Nepal",
    "SEO expert Kathmandu",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/seo-expert-nepal",
  },
};

export default function SEOExpertPage() {
  const expertise = [
    { title: "Technical SEO", description: "Crawlability, indexing, Core Web Vitals, schema markup" },
    { title: "Local SEO", description: "Google Business Profile, citations, Google Maps ranking" },
    { title: "Content SEO", description: "Keyword research, on-page optimization, internal linking" },
    { title: "Web Development", description: "SEO-friendly architecture, performance optimization" },
    { title: "SEO Auditing", description: "Comprehensive site audits and competitive analysis" },
    { title: "SEO Strategy", description: "Data-backed keyword strategies and content planning" },
  ];

  const caseResults = [
    { metric: "30-60%", label: "Traffic Improvement" },
    { metric: "50%+", label: "Ranking Increase" },
    { metric: "2-3s", label: "Page Speed Improvement" },
    { metric: "90 days", label: "Typical Time to See Results" },
  ];

  const faqs = [
    {
      question: "What is the difference between an SEO expert and an SEO agency?",
      answer:
        "As an independent SEO expert, I offer personalized attention, faster turnaround, lower costs, and more direct communication. Agencies often have high overhead. I deliver the same results with less bureaucracy and more transparency.",
    },
    {
      question: "How much does SEO cost in Nepal?",
      answer:
        "SEO pricing varies: Audits (NPR 15,000-25,000), monthly retainers (NPR 25,000-80,000 for ongoing work), project-based (NPR 50,000+). Contact me for a customized quote based on your goals and competition.",
    },
    {
      question: "How long until I see SEO results?",
      answer:
        "Quick wins (technical fixes) show impact within 4-8 weeks. Major ranking improvements typically appear within 2-4 months. Long-term strategy (content, backlinks) takes 6-12 months for full effect.",
    },
    {
      question: "Do you offer SEO services for startups?",
      answer:
        "Yes. I specialize in startup SEO. Early-stage companies benefit most from technical SEO and content strategy before competitors dominate. I offer flexible, scalable packages perfect for growing businesses.",
    },
    {
      question: "Can you help with international SEO?",
      answer:
        "Yes. I work with international clients and understand hreflang, international targeting, multi-language SEO, and global ranking strategies. Most of my clients are from the US, UK, and Australia.",
    },
    {
      question: "What makes you different from other SEO experts in Nepal?",
      answer:
        "I combine technical SEO expertise with full-stack development skills. Most SEO experts can't code; most developers don't understand SEO. I do both—meaning I deliver solutions that are SEO-optimized from the ground up.",
    },
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
            "name": "Rejish Khanal - SEO Expert Nepal",
            "description": "SEO Expert in Nepal for technical SEO, local SEO, and organic growth",
            "url": "https://rejishkhanal.com.np/seo-expert-nepal",
            "areaServed": "NP",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NP",
              "addressLocality": "Kathmandu",
            },
            "sameAs": ["https://linkedin.com/in/rejish-khanal", "https://github.com/rejish7"],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            SEO Expert in Nepal for Technical SEO, Local SEO, and Organic Growth
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            I'm Rejish Khanal, an SEO expert based in Kathmandu, Nepal. I help Nepali businesses and international
            clients rank higher on Google, attract qualified leads, and grow organic traffic through technical SEO,
            content strategy, and local SEO optimization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Hire Me as Your SEO Expert
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Request a Free SEO Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Results Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Proven SEO Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseResults.map((result, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                  <p className="text-muted-foreground">{result.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Expertise Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">My SEO Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((exp, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Hire Me Section */}
        <section className="mb-16 p-8 bg-accent/50 rounded-lg border">
          <h2 className="text-2xl font-bold mb-6">Why Hire Me as Your SEO Expert?</h2>
          <div className="space-y-4">
            {[
              "Developer-level technical expertise—I code, I don't just recommend changes",
              "Transparent communication—monthly reports with real data from GSC and GA4",
              "Nepal-based but globally experienced—work with US, UK, Australia clients",
              "Specialized in startups and small businesses—understand budget constraints",
              "Data-backed strategy—every recommendation has evidence and expected ROI",
              "Fast turnaround—responsive communication and quick implementations",
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who I Work With */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Who I Work With</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>🚀 Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Affordable SEO packages to help early-stage companies rank and attract customers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🏢 Small Businesses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Local and regional SEO to compete in your market and get more leads.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🌐 International Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Remote work, flexible hours, time-zone friendly communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Organic Traffic?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to rank your website higher on Google and attract more qualified leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Book a Free SEO Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/seo-audit-nepal">
              <Button size="lg" variant="outline">
                Get a Technical SEO Audit
              </Button>
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-16 border-t">
          <h3 className="text-lg font-semibold mb-4">More SEO Services</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/technical-seo-specialist-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Technical SEO Specialist</p>
            </Link>
            <Link
              href="/seo-audit-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">SEO Audit Services</p>
            </Link>
            <Link
              href="/local-seo-services-nepal"
              className="p-4 rounded-lg border hover:border-primary/50 hover:bg-accent/30 transition-all"
            >
              <p className="font-semibold hover:text-primary transition-colors">Local SEO Services</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
