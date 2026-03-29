import { Hero } from "@/components/sections/Hero";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Skills } from "@/components/sections/Skills";
import { ExperienceTeaser } from "@/components/sections/ExperienceTeaser";
import { Projects } from "@/components/sections/Projects";
import { CTASection } from "@/components/sections/CTASection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQSection } from "@/components/FAQSection";
import { projectsAPI, blogsAPI } from "@/lib/api";
import type { Project, BlogPost } from "@/lib/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rejish Khanal — Technical SEO Specialist & Full Stack Developer",
  description:
    "Technical SEO Specialist and Full Stack Developer based in Kathmandu, Nepal. I help businesses rank higher and build faster using SEO audits, Core Web Vitals fixes, and modern web development.",
  keywords: [
    "technical SEO specialist",
    "full stack developer Nepal",
    "SEO expert Kathmandu",
    "hire SEO specialist",
  ],
  alternates: {
    canonical: "https://rejishkhanal.com.np",
  },
};

// Force dynamic rendering - prevents caching stale data
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const response = await projectsAPI.getAll();
    if (response.success && response.data) {
      return response.data.filter(p => p.featured).slice(0, 3);
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

async function getRecentBlogs(): Promise<BlogPost[]> {
  try {
    const response = await blogsAPI.getAll();
    if (response.success && response.data) {
      return response.data.slice(0, 3);
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

export default async function Home() {
  const [featuredProjects, recentBlogs] = await Promise.all([
    getFeaturedProjects(),
    getRecentBlogs(),
  ]);

  const homepageFAQs = [
    {
      question: "What does a Technical SEO Specialist do?",
      answer:
        "A Technical SEO Specialist optimizes your website's technical infrastructure to help search engines (Google, Bing) crawl, index, and rank your content effectively. This includes improving Core Web Vitals, fixing JavaScript rendering issues, implementing schema markup, optimizing server response times, ensuring mobile responsiveness, and setting up proper redirect chains. I audit your site, identify issues, and implement solutions to improve rankings and user experience.",
    },
    {
      question: "How are Full Stack Developers different from Frontend or Backend developers?",
      answer:
        "Full Stack Developers like myself have expertise across the entire application: frontend (HTML, CSS, JavaScript, React, Vue.js), backend (Node.js, Python Django, PHP Laravel), databases (PostgreSQL, MySQL), DevOps, and deployment. This means faster development, better architecture decisions, and seamless integration. Full Stack development is ideal for startups and businesses that need comprehensive solutions without coordinating multiple specialists.",
    },
    {
      question: "What is Core Web Vitals and why should I care?",
      answer:
        "Core Web Vitals are three key performance metrics Google uses for ranking: LCP (page load speed), CLS (visual stability), and INP (responsiveness). Poor Core Web Vitals hurt your Google rankings and user experience. I optimize these metrics through code splitting, image optimization, lazy loading, reducing JavaScript bundles, and improving server performance. Better metrics = better rankings + higher conversion rates.",
    },
    {
      question: "How can I improve my website's Google ranking?",
      answer:
        "Ranking on Google requires a multi-pronged approach: 1) Technical SEO (fix crawlability, Core Web Vitals, schema markup), 2) On-page SEO (keywords, meta tags, headings, internal linking), 3) Content SEO (quality, relevance, length), 4) Backlink building (authority signals), 5) Local SEO (if applicable). I provide comprehensive audits and implement strategies tailored to your industry and target keywords.",
    },
    {
      question: "What technologies do you use to build websites?",
      answer:
        "I specialize in modern, performant tech stacks: Next.js and Vue.js for frontend (excellent for SEO), Django and FastAPI for Python backends, Laravel and PHP for traditional backends, PostgreSQL and MySQL for databases, and Redis for caching. Each technology choice prioritizes SEO, performance, and scalability. All applications are built with Core Web Vitals, schema markup, and proper rendering strategies in mind.",
    },
    {
      question: "Can you help if my website isn't ranking?",
      answer:
        "Yes. I start with a comprehensive technical SEO audit to identify issues preventing ranking. Common problems include poor Core Web Vitals, improper schema markup, JavaScript rendering issues, thin content, missing meta tags, poor internal linking, or technical crawlability issues. Once I identify the root causes, I create a prioritized action plan and implement solutions. Most clients see ranking improvements within 2-4 months.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, I work with clients worldwide, particularly from the US, UK, and Australia. I'm based in Kathmandu, Nepal, and available for remote work with flexible hours. Time zone differences are not an issue — I provide detailed email updates, monthly reports, and scheduled calls during overlapping hours.",
    },
    {
      question: "How do you measure SEO success?",
      answer:
        "I track metrics that matter: keyword rankings (tracked via Google Search Console and rank trackers), organic traffic (Google Analytics), click-through rate (CTR) from SERPs, conversion rate, and revenue. I focus on commercial keywords that drive business results, not vanity metrics. Monthly reports show progress on keywords, traffic, and whether your investment is paying off.",
    },
  ];

  return (
    <>
      <Hero />
      <AboutTeaser />
      <Skills />
      <ExperienceTeaser />
      <Projects projects={featuredProjects} />
      <BlogPreview posts={recentBlogs} />
      <FAQSection title="Questions About SEO & Web Development?" items={homepageFAQs} />
      <CTASection />
    </>
  );
}
