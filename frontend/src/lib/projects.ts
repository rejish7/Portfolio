import type { Project, ProjectFAQ, ProjectResult, ProjectSEO, ProjectSection } from "./types";

const SITE = "https://rejishkhanal.com.np";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.rejishkhanal.com.np";

export const projectsBaseUrl = SITE;

/**
 * Reads every published project from the API with retry/backoff.
 * Shared by the listing page and the detail page (related-case-study block).
 */
export async function fetchProjects(): Promise<Project[]> {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/projects`, {
        signal: AbortSignal.timeout(30000),
        next: { revalidate: 3600 },
      });

      if (!res.ok) {
        if (attempt < 3) continue;
        return [];
      }

      const data = await res.json();

      if (!Array.isArray(data)) {
        console.error("Projects API returned non-array:", typeof data);
        return [];
      }

      return data.map((raw: RawProject) => mapProject(raw));
    } catch (error) {
      console.error(`Failed to fetch projects (attempt ${attempt}):`, error);
      if (attempt < 3) continue;
      return [];
    }
  }
  return [];
}

/**
 * Related case studies for a detail page: same industry/category first, then
 * featured, then the rest. Always excludes the current project.
 */
export function relatedProjects(all: Project[], current: Project, limit = 3): Project[] {
  const sameBucket = (project: Project) =>
    Boolean(
      current.industry &&
        (project.industry === current.industry || project.category === current.category)
    );

  return all
    .filter((project) => project.slug !== current.slug)
    .sort((a, b) => {
      const bucket = Number(sameBucket(b)) - Number(sameBucket(a));
      if (bucket !== 0) return bucket;
      const featured = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      if (featured !== 0) return featured;
      return (b.updatedAt || "").localeCompare(a.updatedAt || "");
    })
    .slice(0, limit);
}


/** Shape returned by `/api/projects` before normalisation. */
interface RawProject {
  _id?: string;
  id?: string;
  slug?: string;
  title?: string;
  description?: string;
  fullDescription?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category?: string;
  industry?: string;
  services?: string[];
  duration?: string;
  clientScope?: string;
  summary?: string;
  results?: ProjectResult[];
  highlights?: string[];
  sections?: ProjectSection[];
  faqs?: ProjectFAQ[];
  seo?: ProjectSEO;
  publishedAt?: string;
  updatedAt?: string;
}

const list = <T>(value: T[] | undefined): T[] | undefined =>
  Array.isArray(value) ? value : undefined;

/**
 * Normalises a raw `/api/projects` document (Mongoose `_id`, absent optional
 * fields) into the `Project` shape the UI renders.
 */
export function mapProject(raw: RawProject): Project {
  return {
    id: raw._id || raw.id || "",
    slug: raw.slug || raw._id || "",
    title: raw.title || "",
    description: raw.description || "",
    fullDescription: raw.fullDescription,
    image: raw.image,
    imageAlt: raw.imageAlt,
    imageCaption: raw.imageCaption,
    technologies: Array.isArray(raw.technologies) ? raw.technologies : [],
    liveUrl: raw.liveUrl,
    githubUrl: raw.githubUrl,
    featured: Boolean(raw.featured),
    category: raw.category,
    industry: raw.industry,
    services: list(raw.services),
    duration: raw.duration,
    clientScope: raw.clientScope,
    summary: raw.summary,
    results: list(raw.results),
    highlights: list(raw.highlights),
    sections: list(raw.sections),
    faqs: list(raw.faqs),
    seo: raw.seo,
    publishedAt: raw.publishedAt,
    updatedAt: raw.updatedAt,
  };
}
