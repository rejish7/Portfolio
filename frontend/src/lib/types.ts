export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription?: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'article' | 'website';
  twitterCard?: 'summary' | 'summary_large_image';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  readTime?: string;
  tags?: string[];
  author?: string;
  seo?: SEOMetadata;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  current?: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools';
  icon?: string;
  proficiency?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
