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
                                        className="text-muted-foreground hover:text-foreground hover:underline"
                                    >
                                        {item.label}
                                    </Link>
                                    {index < items.length - 1 && (
                                        <span className="text-muted-foreground/50">/</span>
                                    )}
                                </>
                            ) : (
                                <>
                                    <span className="text-foreground font-medium">
                                        {item.label}
                                    </span>
                                    {index < items.length - 1 && (
                                        <span className="text-muted-foreground/50">/</span>
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
