'use client';

import { SchemaScript } from "@/components/SchemaScript";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
    title?: string;
}

export function FAQSection({ items, title }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <>
            <SchemaScript schema={faqSchema} />
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {title && (
                        <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">
                            {title}
                        </h2>
                    )}

                    <div className="space-y-4">
                        {items.map((item, index) => (
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
                                        {item.question}
                                    </h3>
                                    <ChevronDown
                                        className={`w-5 h-5 flex-shrink-0 text-primary transition-transform ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {openIndex === index && (
                                    <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
