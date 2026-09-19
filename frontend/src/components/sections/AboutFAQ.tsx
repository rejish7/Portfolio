"use client";

import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Who is Rejish Khanal?",
    answer:
      "Rejish Khanal is an independent technical SEO specialist and full-stack developer based in Kathmandu, Nepal. He works on technical SEO audits, Core Web Vitals, JavaScript SEO, structured data, AEO, GEO, Next.js, Django, Laravel, and code-level search implementation.",
  },
  {
    question: "What does Rejish Khanal specialize in?",
    answer:
      "Rejish specializes in diagnosing and resolving problems involving crawling, rendering, indexation, website performance, structured data, and search architecture. He also helps businesses prepare their content and technical infrastructure for answer engines and AI-powered search.",
  },
  {
    question: "Is Rejish Khanal an AEO expert in Nepal?",
    answer:
      "Rejish provides Answer Engine Optimization as part of a broader technical SEO approach. His work focuses on direct answers, semantic HTML, entity clarity, factual consistency, structured data, internal linking, and crawler accessibility.",
  },
  {
    question: "Is Rejish Khanal a GEO expert in Nepal?",
    answer:
      "Rejish works on Generative Engine Optimization for websites seeking clearer representation across AI-powered discovery systems. The work focuses on accurate entity information, retrievable content, source quality, technical accessibility, and consistent facts rather than guaranteed AI citations.",
  },
  {
    question: "What is the difference between SEO, AEO and GEO?",
    answer:
      "SEO improves a website's visibility and performance in search systems. AEO makes information easier for answer engines to retrieve and present, while GEO addresses how content and entities may be interpreted and referenced in generative search experiences.",
  },
  {
    question: "Does Rejish guarantee Google rankings or ChatGPT citations?",
    answer:
      "No. Search rankings and AI citations are controlled by external platforms, so specific positions or citations cannot be guaranteed. Rejish improves crawlability, indexability, content quality, entity clarity, performance, structured data, and other relevant signals that can support visibility.",
  },
  {
    question: "Does Rejish implement technical SEO fixes?",
    answer:
      "Implementation support is available depending on the website, technology, access, and project scope. Rejish can assist with Next.js, Django, Laravel, PHP, React, databases, metadata, structured data, redirects, rendering, and performance-related changes.",
  },
  {
    question: "What technologies does Rejish Khanal work with?",
    answer:
      "Rejish works with Next.js, React, TypeScript, JavaScript, Python, Django, PHP, Laravel, PostgreSQL, MySQL, Redis, Cloudflare, Vercel, Git, and GitHub. He also uses Google Search Console, GA4, Screaming Frog, Sitebulb, Ahrefs, Lighthouse, and Chrome DevTools.",
  },
  {
    question: "Where is Rejish Khanal based?",
    answer:
      "Rejish Khanal is based in Kathmandu, Nepal. He can work with businesses in Nepal and international clients through remote collaboration.",
  },
  {
    question: "How can I contact Rejish Khanal?",
    answer:
      "You can contact Rejish through the website contact page or by emailing contact@rejishkhanal.com.np. Include your website URL, platform, current problem, and intended outcome to make the initial discussion more useful.",
  },
];

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-16 lg:py-24" aria-labelledby="about-page-faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-xs font-semibold w-fit">
              <MessageCircle className="h-3.5 w-3.5" />
              FAQ
            </div>
            <h2 id="about-page-faq" className="text-3xl sm:text-4xl font-bold tracking-tight">
              Questions About Rejish Khanal and His Expertise
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4 hover:bg-muted/50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="text-base font-bold">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-muted-foreground leading-relaxed pl-8 text-sm">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
