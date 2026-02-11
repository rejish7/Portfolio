import Blog from "../models/Blog.js";
import mongoose from "mongoose";

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
  return await Blog.create(data);
};

const updateBlogById = async (id, data) => {
  return await Blog.findByIdAndUpdate(id, data, { new: true });
};

const deleteBlogById = async (id) => {
  return await Blog.findByIdAndDelete(id);
};

export {
  getAllBlogs,
  getBlogBySlug,
  createNewBlog,
  updateBlogById,
  deleteBlogById,
};
