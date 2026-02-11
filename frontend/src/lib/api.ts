import axios, { AxiosError } from "axios";
import type { ContactFormData, Project, BlogPost, ApiResponse } from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.rejishkhanal.com.np";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const message = error.response?.data || error.message || "An error occurred";
    return Promise.reject(message);
  }
);

// Helper function to transform MongoDB documents
const transformBlogPost = (post: any): BlogPost => {
  return {
    id: post._id || post.id,
    slug: post.slug || post._id, // Fallback to _id if slug is missing
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    image: post.image,
    publishedAt: post.publishedAt,
    readTime: post.readTime,
    tags: post.tags,
    author: post.author,
  };
};

const transformProject = (project: any): Project => {
  return {
    id: project._id || project.id,
    slug: project.slug || project._id, // Fallback to _id if slug is missing
    title: project.title,
    description: project.description,
    fullDescription: project.fullDescription,
    image: project.image,
    technologies: project.technologies || [],
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    featured: project.featured,
    category: project.category,
  };
};

// API Methods
export const contactAPI = {
  submit: async (data: ContactFormData): Promise<ApiResponse<any>> => {
    try {
      const response = await api.post("/api/contact", data);
      return {
        success: true,
        data: response.data,
        message: "Message sent successfully!",
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Failed to send message",
      };
    }
  },
};

export const projectsAPI = {
  getAll: async (): Promise<ApiResponse<Project[]>> => {
    try {
      const response = await api.get("/api/projects");
      const transformedData = response.data.map(transformProject);
      return {
        success: true,
        data: transformedData,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Failed to fetch projects",
      };
    }
  },

  getById: async (id: string): Promise<ApiResponse<Project>> => {
    try {
      const response = await api.get(`/api/projects/${id}`);
      const transformedData = transformProject(response.data);
      return {
        success: true,
        data: transformedData,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Failed to fetch project",
      };
    }
  },
};

export const blogsAPI = {
  getAll: async (): Promise<ApiResponse<BlogPost[]>> => {
    try {
      const response = await api.get("/api/blogs");
      const transformedData = response.data.map(transformBlogPost);
      return {
        success: true,
        data: transformedData,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Failed to fetch blogs",
      };
    }
  },

  getBySlug: async (slug: string): Promise<ApiResponse<BlogPost>> => {
    try {
      const response = await api.get(`/api/blogs/${slug}`);
      const transformedData = transformBlogPost(response.data);
      return {
        success: true,
        data: transformedData,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Failed to fetch blog post",
      };
    }
  },
};

export default api;
