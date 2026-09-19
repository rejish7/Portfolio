"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What does a technical SEO expert in Nepal do?",
    answer:
      "A technical SEO expert in Nepal audits, fixes, and optimizes websites for search engine crawling, indexing, and ranking. Rejish Khanal provides direct implementation of technical SEO fixes, not just PDF reports.",
  },
  {
    question: "How much does a technical SEO audit cost in Nepal?",
    answer:
      "Technical SEO audit costs in Nepal vary based on website size and complexity. Contact Rejish Khanal for a customized quote based on your specific needs.",
  },
  {
    question: "What is AEO (Answer Engine Optimization)?",
    answer:
      "AEO is the practice of optimizing your website to appear in AI-powered search results like ChatGPT Search, Perplexity, and Google AI Overviews. Rejish Khanal is a leading AEO expert in Nepal.",
  },
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer:
      "GEO optimizes your content to be cited and referenced by generative AI search engines. Rejish Khanal helps businesses in Nepal prepare for the future of search.",
  },
  {
    question: "Do you provide SEO services outside Nepal?",
    answer:
      "Yes. Rejish Khanal serves clients in the US, UK, Australia, and worldwide. All work is delivered remotely with regular reporting.",
  },
  {
    question: "How long does a technical SEO audit take?",
    answer:
      "A typical technical SEO audit takes 3-7 days depending on website size. Rejish Khanal provides a detailed report with prioritized fixes.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "Rejish Khanal has worked with e-commerce, SaaS, hospitality, education, and local businesses in Nepal and internationally.",
  },
  {
    question: "Do you offer SEO training in Nepal?",
    answer:
      "Yes. Rejish Khanal offers hands-on technical SEO, AEO, and GEO training workshops in Kathmandu, Nepal.",
  },
  {
    question: "What is the difference between SEO and AEO?",
    answer:
      "SEO optimizes for traditional search engines like Google. AEO optimizes for AI-powered search engines like ChatGPT Search and Perplexity. Both are important.",
  },
  {
    question: "Can you fix JavaScript SEO issues for Next.js websites?",
    answer:
      "Yes. Rejish Khanal specializes in JavaScript SEO for Next.js, React, and other modern frameworks. He fixes crawlability, rendering, and indexing issues.",
  },
  {
    question: "How do I get started with technical SEO?",
    answer:
      "Contact Rejish Khanal for a discovery call. He will assess your website and recommend a prioritized action plan.",
  },
];

export function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">
            Frequently Asked Questions About Technical SEO in Nepal
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-semibold text-lg text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-primary transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
