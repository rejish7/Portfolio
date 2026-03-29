'use client';

import Link from "next/link";
import { SchemaScript } from "@/components/SchemaScript";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.href ? `https://rejishkhanal.com.np${item.href}` : undefined,
        })),
    };

    return (
        <>
            <SchemaScript schema={breadcrumbSchema} />
            <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex flex-wrap items-center gap-2 text-sm">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            {item.href ? (
                                <>
                                    <Link
                                        href={item.href}
                                        className="text-blue-600 hover:underline dark:text-blue-400"
                                    >
                                        {item.label}
                                    </Link>
                                    {index < items.length - 1 && (
                                        <span className="text-gray-400">/</span>
                                    )}
                                </>
                            ) : (
                                <>
                                    <span className="text-gray-700 dark:text-gray-300">
                                        {item.label}
                                    </span>
                                    {index < items.length - 1 && (
                                        <span className="text-gray-400">/</span>
                                    )}
                                </>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
