import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQSection } from "@/components/FAQSection";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    BarChart3,
    Code2,
    MapPin,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "SEO & Web Development Services — Rejish Khanal",
    description:
        "Technical SEO audits, Local SEO, and Full Stack Web Development services. Helping international businesses rank and convert with clean code and solid SEO strategy.",
    alternates: {
        canonical: "https://rejishkhanal.com.np/services",
    },
};

const services = [
    {
        icon: BarChart3,
        title: "Technical SEO",
        description:
            "Comprehensive technical audits and optimization to improve search rankings and user experience.",
        features: [
            "Crawl audit & issue fixing",
            "Core Web Vitals optimization (LCP, CLS, INP)",
            "JavaScript SEO (rendering, hydration issues)",
            "Schema markup implementation",
            "Google Search Console setup & monitoring",
        ],
        forWho:
            "SaaS platforms, ecommerce sites, and any website with technical ranking issues.",
        cta: "Start Technical SEO Audit",
    },
    {
        icon: Code2,
        title: "Full Stack Web Development",
        description:
            "Custom-built web applications and websites optimized for performance from day one.",
        features: [
            "Next.js, Vue.js, Django, Laravel, PHP",
            "PostgreSQL & modern databases",
            "Custom web apps & websites",
            "Performance-first architecture",
            "SEO-ready from inception",
        ],
        forWho:
            "Startups and businesses needing a custom website or web application with SEO built-in.",
        cta: "Build Your Website",
    },
    {
        icon: MapPin,
        title: "Local SEO",
        description:
            "Dominate local search results and drive foot traffic to your business.",
        features: [
            "Google Business Profile optimization",
            "Local citations & NAP consistency",
            "Local schema markup setup",
            "Review strategy & management",
            "Local link building",
        ],
        forWho:
            "Restaurants, local businesses, and diaspora businesses in AU, UK, and US.",
        cta: "Optimize Local Presence",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-background">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Services" },
                        ]}
                    />

                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
                        SEO & Web Development Services
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                        I help international businesses rank higher and convert better through
                        technical SEO, custom web development, and local SEO strategies. Based
                        in Kathmandu, serving clients worldwide.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="group">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button size="lg" variant="outline">
                                See Case Studies
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {services.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <Card key={idx} className="flex flex-col h-full">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle>{service.title}</CardTitle>
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col">
                                        <div className="space-y-3 mb-6 flex-1">
                                            <p className="font-semibold text-sm text-foreground">
                                                Key Services:
                                            </p>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, fidx) => (
                                                    <li key={fidx} className="flex gap-3 text-sm">
                                                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                                        <span className="text-muted-foreground">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="pt-4 border-t">
                                                <p className="text-sm font-semibold mb-2">
                                                    Perfect for:
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {service.forWho}
                                                </p>
                                            </div>

                                            <Link href="/contact" className="block">
                                                <Button variant="outline" className="w-full group">
                                                    {service.cta}
                                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">
                        How I Work
                    </h2>

                    <div className="space-y-8">
                        {[
                            {
                                step: "1",
                                title: "Discovery Call",
                                description:
                                    "We discuss your goals, challenges, and target audience. I analyze your current situation.",
                            },
                            {
                                step: "2",
                                title: "Audit & Strategy",
                                description:
                                    "Deep technical analysis. I create a tailored strategy with clear deliverables and timeline.",
                            },
                            {
                                step: "3",
                                title: "Implementation",
                                description:
                                    "I execute the strategy, providing regular updates and transparent communication.",
                            },
                            {
                                step: "4",
                                title: "Monitoring & Optimization",
                                description:
                                    "Ongoing tracking of results, monthly reporting, and continuous optimization.",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">
                        Industries I Serve
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            "SaaS & Technology",
                            "Ecommerce",
                            "Restaurants & Hospitality",
                            "Local Businesses",
                            "Marketing Agencies",
                            "Startups",
                            "Digital Products",
                            "Professional Services",
                        ].map((industry, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                            >
                                <p className="font-semibold">{industry}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold tracking-tight mb-6">
                        Ready to Rank Higher and Convert Better?
                    </h2>

                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how I can help your business achieve its goals through
                        SEO and web development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="group">
                                Schedule Consultation
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:contact@rejishkhanal.com.np">
                            <Button size="lg" variant="outline">
                                Email Me
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection
                title="Frequently Asked Questions About SEO & Web Development"
                items={[
                    {
                        question: "What is Technical SEO and why is it important?",
                        answer:
                            "Technical SEO is the optimization of your website's technical infrastructure to help search engines crawl, index, and rank your content. It includes improving Core Web Vitals (LCP, CLS, INP), fixing JavaScript SEO issues, implementing schema markup, optimizing site speed, mobile responsiveness, and ensuring proper crawlability. Technical SEO is crucial because poor technical implementation can prevent even great content from ranking, regardless of keyword relevance.",
                    },
                    {
                        question: "How long does it take to see SEO results?",
                        answer:
                            "SEO is a long-term strategy. While technical improvements can show results in 4-8 weeks, significant ranking improvements typically take 3-6 months, depending on competition level, current website health, and the keywords you're targeting. Consistent content creation, backlink building, and ongoing optimization accelerate results. I provide monthly reports so you can track progress transparently.",
                    },
                    {
                        question: "What programming languages and frameworks do you specialize in?",
                        answer:
                            "I specialize in full-stack development using Python (Django, FastAPI), PHP (Laravel), JavaScript (Node.js, Vue.js, Next.js), and modern databases like PostgreSQL and MySQL. I build SEO-optimized applications from day one, ensuring proper server-side rendering, dynamic meta tags, canonical URLs, and structured data implementation. Each technology is chosen based on your project requirements.",
                    },
                    {
                        question: "What is Local SEO and how does it help my business?",
                        answer:
                            "Local SEO optimizes your online presence to attract local customers searching for your services. It includes Google Business Profile optimization, local citations (NAP consistency), local schema markup, review management, and local link building. For restaurants, clinics, and service-based businesses, Local SEO drives foot traffic and phone calls. It's especially effective for businesses in US, UK, and Australia markets.",
                    },
                    {
                        question: "Can you help with Core Web Vitals optimization?",
                        answer:
                            "Yes, Core Web Vitals are critical ranking factors. I specialize in optimizing LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), and INP (Interaction to Next Paint) through code splitting, lazy loading, image optimization with AVIF/WebP formats, reducing JavaScript bundles, database query optimization, and server response time improvements. These optimizations also improve user experience and conversion rates.",
                    },
                    {
                        question: "How do you approach JavaScript SEO?",
                        answer:
                            "JavaScript SEO requires proper server-side rendering, dynamic meta tags, next/head optimization, and ensuring crawlable content for search engines. I implement Next.js with getStaticProps/getServerSideProps, structured data injection, JavaScript framework best practices, and proper hydration. This ensures Google can crawl, index, and rank your content effectively while maintaining excellent performance.",
                    },
                    {
                        question: "What should be included in a technical SEO audit?",
                        answer:
                            "A comprehensive technical SEO audit includes: crawlability analysis, indexation status, Core Web Vitals assessment, mobile friendliness, schema markup validation, XML sitemap review, robots.txt analysis, redirect chains, duplicate content detection, SSL/HTTPS verification, server response times, image optimization, JavaScript rendering issues, and internal linking structure. I use tools like Google Search Console, PageSpeed Insights, and Screaming Frog.",
                    },
                    {
                        question: "How is web development different from template-based websites?",
                        answer:
                            "Custom web development builds applications tailored to your unique business needs with responsive design, optimal performance, scalability, and SEO best practices built-in. Template-based sites are quicker but often limited in customization and performance. Full-stack development with Next.js, Django, or Laravel provides better SEO ranking potential, faster load times (better Core Web Vitals), easier maintenance, and competitive advantage.",
                    },
                    {
                        question: "Do you provide post-launch support and maintenance?",
                        answer:
                            "Yes. I offer ongoing support including monthly SEO monitoring reports, Core Web Vitals tracking, search ranking updates, technical optimization adjustments, security patches, and performance monitoring. For custom-built applications, I provide maintenance, hosting guidance, updates, and optimization based on analytics data.",
                    },
                    {
                        question: "What is schema markup and how does it help SEO?",
                        answer:
                            "Schema markup (structured data) helps search engines understand your content better, leading to richer SERP snippets, featured snippets, knowledge panels, and better rankings. I implement schemas for Person (for your profile), WebSite, Article, BreadcrumbList, FAQ, Organization, LocalBusiness, Product, and more. Proper schema markup improves CTR and visibility in search results across all traffic sources.",
                    },
                ]}
            />
        </main>
    );
}
