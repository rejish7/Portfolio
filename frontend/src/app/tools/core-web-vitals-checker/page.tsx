import type { Metadata } from "next";
import Link from "next/link";
import { SchemaScript } from "@/components/SchemaScript";
import { CoreWebVitalsChecker } from "./CoreWebVitalsChecker";

export const metadata: Metadata = {
  title: "Free Core Web Vitals & SEO Checker - Test Website Speed Nepal",
  description:
    "Free online tool to check Core Web Vitals (LCP, CLS, INP), on-page SEO, and website performance. Get instant PageSpeed Insights results, SEO score, and actionable recommendations. Built by an SEO specialist in Nepal.",
  keywords: [
    "core web vitals checker nepal",
    "website speed test nepal",
    "SEO checker online free",
    "page speed test nepal",
    "LCP checker",
    "CLS test",
    "INP measurement",
    "free SEO audit tool",
    "website performance test nepal",
    "technical SEO checker",
    "Google PageSpeed test",
    "SEO score checker",
    "website audit tool free",
    "core web vitals test online",
    "site speed checker nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/tools/core-web-vitals-checker",
  },
  openGraph: {
    title: "Free Core Web Vitals & SEO Checker - Test Website Performance",
    description:
      "Check your website's Core Web Vitals, on-page SEO, and performance. Free tool with instant results and SEO recommendations.",
    url: "https://rejishkhanal.com.np/tools/core-web-vitals-checker",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Core Web Vitals & SEO Checker",
    description:
      "Test your website's Core Web Vitals and on-page SEO. Free tool with instant results.",
    creator: "@KhanalRejish",
  },
};

const faqs = [
  {
    question: "What are Core Web Vitals?",
    answer:
      "Core Web Vitals are three key metrics Google uses to measure user experience on your website. Largest Contentful Paint (LCP) measures how quickly your main content loads. Interaction to Next Paint (INP) measures how responsive your page is to user interactions like clicks and taps. Cumulative Layout Shift (CLS) measures how much your page layout shifts unexpectedly during loading. These metrics directly impact your Google search rankings and should be optimized for better SEO performance.",
  },
  {
    question: "What is a good LCP score?",
    answer:
      "A good Largest Contentful Paint (LCP) score is 2.5 seconds or less. If your LCP is between 2.5s and 4.0s, it needs improvement. Anything over 4.0s is considered poor and should be fixed immediately. To improve LCP, optimize images, use a Content Delivery Network (CDN), reduce server response time, and eliminate render-blocking resources.",
  },
  {
    question: "What is a good CLS score?",
    answer:
      "A good Cumulative Layout Shift (CLS) score is 0.1 or less. CLS measures how much your page layout shifts unexpectedly during loading. A score between 0.1 and 0.25 needs improvement, and anything above 0.25 is poor. To fix CLS, always set image and video dimensions, avoid inserting content above existing content, and use CSS transform animations instead of layout-triggering properties.",
  },
  {
    question: "What is a good INP score?",
    answer:
      "A good Interaction to Next Paint (INP) score is 200 milliseconds or less. INP measures how quickly your page responds to user interactions. Scores between 200ms and 500ms need improvement, and above 500ms is considered poor. To improve INP, reduce JavaScript execution time, break up long tasks, and use web workers for heavy computations.",
  },
  {
    question: "How does this SEO checker tool work?",
    answer:
      "This tool uses Google PageSpeed Insights API to run Lighthouse audits on both mobile and desktop versions of your website. It measures Core Web Vitals like LCP, CLS, INP, and TTFB. Additionally, it scans your page for on-page SEO elements including title tags, meta descriptions, heading structure, image alt text, schema markup, Open Graph tags, canonical URLs, and robots.txt. You get a comprehensive SEO score out of 100 with actionable recommendations.",
  },
  {
    question: "Why is this tool better than other free SEO checkers?",
    answer:
      "This tool provides a complete SEO audit with a single check: Core Web Vitals (mobile and desktop), on-page SEO checklist, technical SEO elements, and prioritized recommendations. Unlike basic tools, it gives you an overall SEO score out of 100 and specific fix recommendations sorted by priority. It is built by a technical SEO expert with real-world experience optimizing websites for Google rankings.",
  },
  {
    question: "How often should I check my Core Web Vitals?",
    answer:
      "You should check your Core Web Vitals at least once a month or after making significant changes to your website. Google updates its Page Experience signals regularly, so monitoring your metrics helps maintain good search rankings. If you notice a drop in rankings, checking Core Web Vitals should be one of your first steps.",
  },
  {
    question: "Can this tool check my website's SEO for Google Nepal?",
    answer:
      "Yes, this tool checks universal SEO best practices that apply to Google search in Nepal and worldwide. Core Web Vitals are a global ranking factor, and on-page SEO elements like title tags, meta descriptions, and schema markup are important for ranking on Google Nepal (google.com.np) as well as global Google search results.",
  },
];

export default function CoreWebVitalsCheckerPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Free Core Web Vitals & SEO Checker",
    url: "https://rejishkhanal.com.np/tools/core-web-vitals-checker",
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Person", name: "Rejish Khanal", url: "https://rejishkhanal.com.np" },
    description:
      "Free online tool to check Core Web Vitals (LCP, CLS, INP), on-page SEO, and website performance using Google PageSpeed Insights. Get instant results with SEO score and actionable recommendations.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rejishkhanal.com.np" },
      { "@type": "ListItem", position: 2, name: "Free SEO Tools", item: "https://rejishkhanal.com.np/tools" },
      { "@type": "ListItem", position: 3, name: "Core Web Vitals Checker", item: "https://rejishkhanal.com.np/tools/core-web-vitals-checker" },
    ],
  };

  return (
    <>
      <SchemaScript schema={softwareSchema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={breadcrumbSchema} />

      <div className="pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/tools" className="hover:text-primary">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Core Web Vitals Checker</span>
          </nav>

          {/* Hero */}
          <header className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
              Free SEO Tool | No Signup Required
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Core Web Vitals &amp; SEO Checker
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Test your website&apos;s performance with Google PageSpeed Insights.
              Check LCP, CLS, INP, on-page SEO, and get a comprehensive SEO score out of 100.
            </p>
            <p className="text-sm text-muted-foreground">
              Free, instant results. No signup required.
            </p>
          </header>

          {/* Tool */}
          <CoreWebVitalsChecker />

          {/* Features */}
          <section className="mt-20 pt-12 border-t">
            <h2 className="text-2xl font-bold mb-8 text-center">
              What This Tool Checks
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Core Web Vitals", desc: "LCP, CLS, INP, TTFB scores for mobile and desktop with pass/fail thresholds." },
                { title: "On-Page SEO", desc: "Title tags, meta descriptions, headings, image alt text, and keyword optimization." },
                { title: "Technical SEO", desc: "Schema markup, canonical URLs, robots.txt, sitemap, and language attributes." },
                { title: "Social Media", desc: "Open Graph tags and Twitter Card optimization for better social sharing." },
                { title: "Performance", desc: "PageSpeed Insights scores, First Contentful Paint, and Speed Index metrics." },
                { title: "Recommendations", desc: "Prioritized actionable fixes to improve your SEO rankings and user experience." },
              ].map((f) => (
                <div key={f.title} className="p-5 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20 pt-12 border-t">
            <h2 className="text-2xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="text-lg font-semibold cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <span className="ml-2 group-open:rotate-180 transition-transform">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </summary>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mt-16 pt-12 border-t">
            <h2 className="text-xl font-bold mb-6">Related SEO Tools & Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/seo-audit-nepal" className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <h3 className="font-semibold hover:text-primary transition-colors">SEO Audit Services Nepal</h3>
                <p className="text-sm text-muted-foreground mt-1">Get a comprehensive technical SEO audit for your website.</p>
              </Link>
              <Link href="/core-web-vitals-optimization" className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <h3 className="font-semibold hover:text-primary transition-colors">Core Web Vitals Optimization</h3>
                <p className="text-sm text-muted-foreground mt-1">Professional Core Web Vitals fixes for better Google rankings.</p>
              </Link>
              <Link href="/technical-seo-specialist-nepal" className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <h3 className="font-semibold hover:text-primary transition-colors">Technical SEO Expert Nepal</h3>
                <p className="text-sm text-muted-foreground mt-1">Expert technical SEO services for businesses in Nepal.</p>
              </Link>
              <Link href="/contact" className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <h3 className="font-semibold hover:text-primary transition-colors">Contact for SEO Help</h3>
                <p className="text-sm text-muted-foreground mt-1">Get professional help fixing your website SEO issues.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
