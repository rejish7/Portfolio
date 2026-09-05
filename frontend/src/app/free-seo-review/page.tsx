import type { Metadata } from "next";
import { FreeSEOReviewPage } from "@/components/landing/FreeSEOReviewPage";

export const metadata: Metadata = {
  title: "Free SEO Review for Service Businesses | Rejish Khanal",
  description:
    "Request a free SEO review covering your website, local visibility and one competitor. Discover practical opportunities to improve your Google presence.",
  keywords: [
    "free SEO review",
    "SEO review for service businesses",
    "local SEO review",
    "website SEO check",
    "Google visibility review",
    "SEO for plumbers",
    "SEO for electricians",
    "SEO for builders",
    "SEO for mortgage brokers",
    "SEO for cleaning companies",
    "SEO for accountants",
    "SEO for real estate",
    "local SEO audit free",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np/free-seo-review/",
  },
  openGraph: {
    title: "Free SEO Review for Service Businesses | Rejish Khanal",
    description:
      "Request a free SEO review covering your website, local visibility and one competitor. Discover practical opportunities to improve your Google presence.",
    url: "https://rejishkhanal.com.np/free-seo-review/",
    siteName: "Rejish Khanal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SEO Review for Service Businesses | Rejish Khanal",
    description:
      "Request a free SEO review covering your website, local visibility and one competitor. Discover practical opportunities to improve your Google presence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function FreeSEOReview() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Free SEO Review for Service Businesses",
    url: "https://rejishkhanal.com.np/free-seo-review/",
    description:
      "Request a free SEO review covering your website, local visibility and one competitor. Discover practical opportunities to improve your Google presence.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Rejish Khanal",
      url: "https://rejishkhanal.com.np",
    },
    about: [
      "Free SEO Review",
      "Local SEO Review",
      "SEO for Service Businesses",
      "Website SEO Check",
    ],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rejish Khanal - SEO and Digital Marketing",
    url: "https://rejishkhanal.com.np",
    description:
      "SEO and digital marketing professional helping service businesses improve their websites, search visibility and ability to generate qualified enquiries online.",
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: [
      "SEO Review",
      "Local SEO",
      "Website SEO Audit",
      "Search Visibility Review",
    ],
  };

  const faqs = [
    {
      question: "Is the SEO review really free?",
      answer:
        "Yes. The initial review is free and provides a limited set of observations about your website, local visibility and one competitor. A complete SEO audit or implementation work would be quoted separately if requested.",
    },
    {
      question: "Does the review guarantee higher Google rankings?",
      answer:
        "No. Search visibility depends on competition, website quality, technical factors, content, authority and other conditions. The review identifies potential opportunities but does not guarantee rankings, enquiries or sales.",
    },
    {
      question: "What do I need to submit?",
      answer:
        "You need an active business website, a target service, a city or service area and a valid business email address. Providing accurate information will make the review more relevant.",
    },
    {
      question: "How will I receive the review?",
      answer:
        "The findings will be delivered using the contact details submitted through the form. The response may include written observations, screenshots or a request for additional information.",
    },
    {
      question: "Will I be required to purchase SEO services?",
      answer:
        "No. There is no obligation to purchase a service after receiving the initial review. If additional SEO work may be useful, the options and costs can be discussed separately.",
    },
    {
      question: "Can any business request the review?",
      answer:
        "The review is intended primarily for genuine service businesses with active websites. Requests may be declined if the website is incomplete, irrelevant, misleading, unlawful or outside the scope of the campaign.",
    },
  ];

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
        name: "Free SEO Review",
        item: "https://rejishkhanal.com.np/free-seo-review/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <FreeSEOReviewPage faqs={faqs} />
    </>
  );
}
