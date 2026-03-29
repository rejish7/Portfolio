import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Globe, Zap, Layers } from "lucide-react";

export const metadata: Metadata = {
    title: "Full Stack Developer Tech Stack — Python, PHP, JavaScript | Rejish Khanal",
    description:
        "Expert in Django, FastAPI, Laravel, PHP, Next.js, Vue.js, PostgreSQL, MySQL development. Specializing in performance optimization, SEO-ready architecture, and Core Web Vitals.",
    keywords: [
        "Django developer",
        "PHP Laravel developer",
        "Next.js developer",
        "Vue.js developer",
        "Python full stack developer",
        "FastAPI developer",
        "PostgreSQL expert",
        "full stack web development",
    ],
    alternates: {
        canonical: "https://rejishkhanal.com.np/tech-stack",
    },
};

const techStacks = [
    {
        icon: Globe,
        category: "Frontend",
        color: "from-blue-600 to-cyan-600",
        technologies: [
            {
                name: "Next.js",
                description:
                    "React framework for production. Perfect for SEO-ready applications with server-side rendering (SSR), static generation (SSG), and API routes. Built-in optimization, image handling with AVIF/WebP, and automatic code splitting.",
                expertise: "Advanced",
                use: "Modern web applications, portfolios, SaaS frontends, e-commerce platforms",
            },
            {
                name: "Vue.js",
                description:
                    "Progressive JavaScript framework. Excellent for single-page applications (SPAs) and interactive user interfaces. I use Vue 3 with Composition API for better performance and maintainability.",
                expertise: "Advanced",
                use: "SPAs, dashboards, real-time applications, progressive web apps",
            },
            {
                name: "HTML5 & CSS",
                description:
                    "Semantic HTML5 for accessibility and SEO. Modern CSS with Tailwind CSS for responsive, maintable styling. Mobile-first approach ensuring great performance on all devices.",
                expertise: "Expert",
                use: "Foundation of all web applications, responsive design",
            },
            {
                name: "JavaScript",
                description:
                    "Core language for interactive web. I specialize in JavaScript SEO — ensuring content is crawlable, avoiding hydration issues, and optimizing for Core Web Vitals in dynamic applications.",
                expertise: "Expert",
                use: "Interactive features, API calls, browser APIs, performance optimization",
            },
        ],
    },
    {
        icon: Layers,
        category: "Backend",
        color: "from-green-600 to-emerald-600",
        technologies: [
            {
                name: "Python/Django",
                description:
                    "High-level Python web framework ideal for rapid development, MVT architecture, built-in ORM, admin panel, and robust security. Perfect for startups, SaaS, and APIs. Excellent with PostgreSQL.",
                expertise: "Advanced",
                use: "Web applications, REST APIs, microservices, custom backends",
            },
            {
                name: "FastAPI",
                description:
                    "Modern, fast Python framework for building APIs. Automatic documentation (Swagger/OpenAPI), automatic validation, and best-in-class performance. Ideal for Python-based microservices and data-driven applications.",
                expertise: "Advanced",
                use: "REST APIs, async applications, real-time systems, data APIs",
            },
            {
                name: "PHP/Laravel",
                description:
                    "Laravel framework provides elegant syntax, robust ORM (Eloquent), migrations, middleware, and excellent ecosystem. PHP is cost-effective for shared hosting and great for content-heavy websites.",
                expertise: "Advanced",
                use: "Web applications, API development, legacy system upgrades, CMS",
            },
            {
                name: "Node.js",
                description:
                    "JavaScript runtime for server-side development. Excellent for real-time applications, streaming, and JavaScript-everywhere approach. Used with Express, Fastify, or custom servers.",
                expertise: "Intermediate",
                use: "Real-time apps, microservices, API gateways, streaming",
            },
        ],
    },
    {
        icon: Database,
        category: "Databases & Storage",
        color: "from-purple-600 to-pink-600",
        technologies: [
            {
                name: "PostgreSQL",
                description:
                    "Powerful open-source relational database. Advanced features: JSON support, JSONB, full-text search, UUID, arrays, and complex queries. ACID compliance and excellent performance at scale.",
                expertise: "Advanced",
                use: "Production applications, complex data models, heavy transactions",
            },
            {
                name: "MySQL/MariaDB",
                description:
                    "Traditional relational database, widely used and cost-effective. Good for standard applications, content management systems, and scenarios where shared hosting is needed.",
                expertise: "Advanced",
                use: "Web applications, WordPress, shared hosting environments",
            },
            {
                name: "Redis",
                description:
                    "In-memory database for caching and real-time data. Improves Core Web Vitals through faster data retrieval, session management, and distributed caching. Essential for high-performance applications.",
                expertise: "Intermediate",
                use: "Caching layer, session storage, real-time features, rate limiting",
            },
        ],
    },
    {
        icon: Zap,
        category: "Core Web Vitals & Performance",
        color: "from-orange-600 to-red-600",
        technologies: [
            {
                name: "Core Web Vitals Optimization",
                description:
                    "LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), INP (Interaction to Next Paint). I optimize through lazy loading, code splitting, image optimization (AVIF/WebP), hydration improvements, and server response time reduction.",
                expertise: "Expert",
                use: "All web applications, SEO ranking improvement",
            },
            {
                name: "Image Optimization",
                description:
                    "Modern image formats (AVIF, WebP with fallbacks), responsive images with srcset, lazy loading, and proper dimensions. Reduces bandwidth 40-70% while maintaining quality.",
                expertise: "Expert",
                use: "Hero images, background images, gallery optimization",
            },
            {
                name: "JavaScript Bundle Optimization",
                description:
                    "Code splitting, tree shaking, minification, and dynamic imports. Reduces initial JavaScript down to essentials, improving LCP and overall page performance.",
                expertise: "Advanced",
                use: "Next.js, Vue.js apps, reducing Time to Interactive",
            },
        ],
    },
];

export default function TechStackPage() {
    return (
        <main className="min-h-screen">
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-background">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Tech Stack" },
                        ]}
                    />
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
                        Full Stack Developer Tech Stack
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                        As a full-stack developer, I specialize in building high-performance web applications with modern technologies. Each tool is chosen for production-readiness, scalability, and SEO optimization.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-16">
                        {techStacks.map((stack, idx) => {
                            const Icon = stack.icon;
                            return (
                                <div key={idx}>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div
                                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stack.color} flex items-center justify-center`}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-3xl font-bold">{stack.category}</h2>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {stack.technologies.map((tech, tidx) => (
                                            <Card key={tidx} className="flex flex-col h-full">
                                                <CardHeader>
                                                    <div className="flex items-start justify-between mb-2">
                                                        <CardTitle>{tech.name}</CardTitle>
                                                        <Badge variant="secondary">{tech.expertise}</Badge>
                                                    </div>
                                                    <CardDescription>{tech.description}</CardDescription>
                                                </CardHeader>
                                                <CardContent className="flex-1">
                                                    <div>
                                                        <p className="font-semibold text-sm text-foreground mb-2">
                                                            Use Cases:
                                                        </p>
                                                        <p className="text-sm text-muted-foreground">{tech.use}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">
                        Why These Technologies?
                    </h2>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            <span className="font-semibold text-foreground">Performance First:</span> Every technology choice prioritizes Core Web Vitals, fast page loads, and optimization. Next.js and Vue.js for frontend, Django/FastAPI for backend, PostgreSQL for databases — all chosen for speed and scalability.
                        </p>

                        <p>
                            <span className="font-semibold text-foreground">SEO-Ready Architecture:</span> I build with searchability in mind: proper server-rendering, semantic HTML, structured data (schema markup), mobile responsiveness, and crawlable content. Your site ranks better by design.
                        </p>

                        <p>
                            <span className="font-semibold text-foreground">Production Proven:</span> These are battle-tested technologies used by thousands of successful applications worldwide. You're not betting on experimental tools — you're getting industry-standard solutions.
                        </p>

                        <p>
                            <span className="font-semibold text-foreground">Scalability & Maintainability:</span> Whether you're a startup or growing business, these technologies scale from 100 to 1M+ users. Code is maintainable, well-documented, and easy for other developers to work with.
                        </p>

                        <p>
                            <span className="font-semibold text-foreground">Cost Effective:</span> Mix of open-source (Django, Laravel, PostgreSQL, Vue.js) and modern SaaS solutions keeps costs reasonable while maintaining premium quality. No vendor lock-in on core infrastructure.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">
                        Ready to Build Something Great?
                    </h2>

                    <p className="text-xl text-muted-foreground text-center mb-12">
                        Whether you need a performance-optimized SaaS application, a technical SEO audit, or a full-stack web development project, I have the expertise to deliver results.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="inline-block">
                            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                                Discuss Your Project
                            </button>
                        </a>
                        <a href="/projects" className="inline-block">
                            <button className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors">
                                See Case Studies
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
