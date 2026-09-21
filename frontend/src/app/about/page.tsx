import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SchemaScript } from "@/components/SchemaScript";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutProfessionalProfile } from "@/components/sections/AboutProfessionalProfile";
import { AboutProfessionalStory } from "@/components/sections/AboutProfessionalStory";
import { AboutApproach } from "@/components/sections/AboutApproach";
import { AboutSEODevelopment } from "@/components/sections/AboutSEODevelopment";
import { AboutAEOGEO } from "@/components/sections/AboutAEOGEO";
import { AboutServices } from "@/components/sections/AboutServices";
import { AboutAdvantage } from "@/components/sections/AboutAdvantage";
import { AboutTimeline } from "@/components/sections/AboutTimeline";
import { TechToolkit } from "@/components/sections/TechToolkit";
import { AboutWorkProcess } from "@/components/sections/AboutWorkProcess";
import { AboutStandards } from "@/components/sections/AboutStandards";
import { AboutCurrentFocus } from "@/components/sections/AboutCurrentFocus";
import { AboutLocation } from "@/components/sections/AboutLocation";
import { AboutFAQ } from "@/components/sections/AboutFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Rejish Khanal | Technical SEO Expert in Nepal",
  description:
    "Meet Rejish Khanal, a technical SEO expert and full-stack developer in Nepal specializing in AEO, GEO, Core Web Vitals and JavaScript SEO.",
  keywords: [
    "about Rejish Khanal",
    "technical SEO expert Nepal",
    "SEO expert Kathmandu",
    "full-stack developer Nepal",
    "independent SEO consultant Nepal",
    "AEO expert Nepal",
    "GEO expert Nepal",
    "Answer Engine Optimization expert",
    "Generative Engine Optimization expert",
    "Core Web Vitals optimization",
    "Next.js SEO expert",
    "Django developer Nepal",
    "Laravel developer Nepal",
    "structured data expert",
    "JavaScript SEO Nepal",
    "technical SEO audit Nepal",
    "AI search optimization",
    "Google AI Overviews optimization",
    "ChatGPT Search visibility",
    "Perplexity SEO",
    "schema markup expert Nepal",
    "crawl budget optimization",
    "Googlebot diagnostics",
    "search engine optimization Nepal",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/about",
  },
  openGraph: {
    title: "About Rejish Khanal | Technical SEO Expert in Nepal",
    description:
      "Learn about Rejish Khanal, an independent technical SEO expert and full-stack developer in Kathmandu specializing in technical SEO, AEO, GEO, Core Web Vitals and JavaScript SEO.",
    url: "https://rejishkhanal.com.np/about",
    siteName: "Rejish Khanal",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "https://rejishkhanal.com.np/assets/images/rejish-khanal.webp",
        width: 800,
        height: 800,
        alt: "Rejish Khanal - Technical SEO Expert in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rejish Khanal | Technical SEO Expert in Nepal",
    description:
      "Learn about Rejish Khanal, an independent technical SEO expert and full-stack developer in Kathmandu specializing in technical SEO, AEO, GEO, Core Web Vitals and JavaScript SEO.",
    images: ["https://rejishkhanal.com.np/assets/images/rejish-khanal.webp"],
  },
};

export default function AboutPage() {
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      "@id": "https://rejishkhanal.com.np/#person",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
      image: "https://rejishkhanal.com.np/assets/images/rejish-khanal.webp",
      jobTitle: ["Technical SEO Expert", "Full-Stack Developer", "AEO Expert", "GEO Expert"],
      description:
        "Rejish Khanal is an independent technical SEO expert and full-stack developer based in Kathmandu, Nepal. He specializes in AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), Core Web Vitals, structured data, JavaScript SEO, and code-level SEO implementation using Next.js, Django, and Laravel.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressRegion: "Bagmati",
        addressCountry: "NP",
      },
      knowsAbout: [
        "Technical SEO",
        "Search Engine Optimization",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AEO",
        "GEO",
        "Core Web Vitals",
        "JavaScript SEO",
        "Structured Data",
        "Schema.org",
        "Google Search Console",
        "Googlebot",
        "Crawl Budget Optimization",
        "Next.js",
        "Django",
        "Laravel",
        "Python",
        "PostgreSQL",
        "Redis",
        "Cloudflare Workers",
        "Vercel Edge Runtime",
        "AI Search Optimization",
        "Google AI Overviews",
        "ChatGPT Search",
        "Perplexity AI",
      ],
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Technical SEO Expert",
          occupationLocation: {
            "@type": "City",
            name: "Kathmandu",
          },
        },
      ],
      sameAs: [
        "https://www.linkedin.com/in/rejishkhanalseo/",
        "https://github.com/rejish7",
        "https://x.com/KhanalRejish",
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Rejish Khanal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rejish Khanal is an independent technical SEO expert and full-stack developer based in Kathmandu, Nepal. He works on technical SEO audits, Core Web Vitals, JavaScript SEO, structured data, AEO, GEO, Next.js, Django, Laravel, and code-level search implementation.",
        },
      },
      {
        "@type": "Question",
        name: "What does Rejish Khanal specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rejish specializes in diagnosing and resolving problems involving crawling, rendering, indexation, website performance, structured data, and search architecture. He also helps businesses prepare their content and technical infrastructure for answer engines and AI-powered search.",
        },
      },
      {
        "@type": "Question",
        name: "Is Rejish Khanal an AEO expert in Nepal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rejish provides Answer Engine Optimization as part of a broader technical SEO approach. His work focuses on direct answers, semantic HTML, entity clarity, factual consistency, structured data, internal linking, and crawler accessibility.",
        },
      },
      {
        "@type": "Question",
        name: "Is Rejish Khanal a GEO expert in Nepal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rejish works on Generative Engine Optimization for websites seeking clearer representation across AI-powered discovery systems. The work focuses on accurate entity information, retrievable content, source quality, technical accessibility, and consistent facts rather than guaranteed AI citations.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between SEO, AEO and GEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO improves a website's visibility and performance in search systems. AEO makes information easier for answer engines to retrieve and present, while GEO addresses how content and entities may be interpreted and referenced in generative search experiences.",
        },
      },
      {
        "@type": "Question",
        name: "Does Rejish guarantee Google rankings or ChatGPT citations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Search rankings and AI citations are controlled by external platforms, so specific positions or citations cannot be guaranteed. Rejish improves crawlability, indexability, content quality, entity clarity, performance, structured data, and other relevant signals that can support visibility.",
        },
      },
      {
        "@type": "Question",
        name: "Does Rejish implement technical SEO fixes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Implementation support is available depending on the website, technology, access, and project scope. Rejish can assist with Next.js, Django, Laravel, PHP, React, databases, metadata, structured data, redirects, rendering, and performance-related changes.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Rejish Khanal work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rejish works with Next.js, React, TypeScript, JavaScript, Python, Django, PHP, Laravel, PostgreSQL, MySQL, Redis, Cloudflare, Vercel, Git, and GitHub. He also uses Google Search Console, GA4, Screaming Frog, Sitebulb, Ahrefs, Lighthouse, and Chrome DevTools.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Rejish Khanal based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rejish Khanal is based in Kathmandu, Nepal. He can work with businesses in Nepal and international clients through remote collaboration.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Rejish Khanal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Rejish through the website contact page or by emailing contact@rejishkhanal.com.np. Include your website URL, platform, current problem, and intended outcome to make the initial discussion more useful.",
        },
      },
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
        name: "About",
        item: "https://rejishkhanal.com.np/about",
      },
    ],
  };

  return (
    <div className="pt-16">
      <SchemaScript schema={profilePageSchema} />
      <SchemaScript schema={faqSchema} />
      <SchemaScript schema={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About Rejish Khanal" },
          ]}
        />
      </div>

      {/* Section 1: Hero */}
      <AboutHero />

      {/* Section 2: Professional Profile - Who Is Rejish Khanal? */}
      <AboutProfessionalProfile />

      {/* Section 3: Professional Story */}
      <AboutProfessionalStory />

      {/* Section 4: Approach - Evidence-Based SEO */}
      <AboutApproach />

      {/* Section 5: SEO With Development Support */}
      <AboutSEODevelopment />

      {/* Section 6: AEO and GEO */}
      <AboutAEOGEO />

      {/* Section 7: Services */}
      <AboutServices />

      {/* Section 8: Advantage - Why Work With Me */}
      <AboutAdvantage />

      {/* Section 9: Professional Journey */}
      <AboutTimeline />

      {/* Section 10: Tools and Technologies */}
      <TechToolkit />

      {/* Section 11: Work Process */}
      <AboutWorkProcess />

      {/* Section 12: Standards */}
      <AboutStandards />

      {/* Section 13: Current Focus */}
      <AboutCurrentFocus />

      {/* Section 14: Location */}
      <AboutLocation />

      {/* Section 15: FAQ */}
      <AboutFAQ />

      {/* Section 16: Final CTA */}
      <FinalCTA />
    </div>
  );
}
