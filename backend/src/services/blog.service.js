import Blog from "../models/Blog.js";
import mongoose from "mongoose";

/**
 * Generates default SEO metadata for a blog post
 * @param {Object} blogData - The blog post data
 * @param {string} baseUrl - The base URL of the site
 * @returns {Object} SEO metadata object
 */
const generateBlogSEOMetadata = (blogData, baseUrl = "https://rejishkhanal.com.np") => {
  const canonicalUrl = `${baseUrl}/blog/${blogData.slug}`;

  // Generate meta title (max 60 characters for optimal SEO)
  const metaTitle = blogData.seo?.title ||
    `${blogData.title} | Rejish Khanal's Blog`.slice(0, 60);

  // Generate meta description (max 160 characters for optimal SEO)
  const metaDescription = blogData.seo?.description ||
    (blogData.excerpt || `${blogData.title} - Read this insightful article by Rejish Khanal.`).slice(0, 160);

  // Generate keywords from tags and default tech keywords
  const keywords = blogData.seo?.keywords ||
    (blogData.tags ? [...blogData.tags, 'blog', 'technology', 'web development'] : ['blog', 'technology', 'web development']);

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    canonical: canonicalUrl,
    ogTitle: blogData.seo?.ogTitle || metaTitle,
    ogDescription: blogData.seo?.ogDescription || metaDescription,
    ogImage: blogData.seo?.ogImage || blogData.image,
    twitterCard: blogData.seo?.twitterCard || 'summary_large_image'
  };
};

const getAllBlogs = async () => {
  return await Blog.find().sort({ publishedAt: -1 });
};

const getBlogBySlug = async (slug) => {
  // Try to find by slug first
  let blog = await Blog.findOne({ slug });

  // If not found and slug looks like a MongoDB ObjectId, try finding by _id
  if (!blog && mongoose.Types.ObjectId.isValid(slug)) {
    blog = await Blog.findById(slug);
  }

  return blog;
};

const createNewBlog = async (data) => {
  // Generate default SEO metadata if not provided
  if (!data.seo) {
    data.seo = generateBlogSEOMetadata(data);
  }
  return await Blog.create(data);
};

const updateBlogById = async (id, data) => {
  return await Blog.findByIdAndUpdate(id, data, { new: true });
};

const deleteBlogById = async (id) => {
  return await Blog.findByIdAndDelete(id);
};

export {
  generateBlogSEOMetadata,
  getAllBlogs,
  getBlogBySlug,
  createNewBlog,
  updateBlogById,
  deleteBlogById,
};
