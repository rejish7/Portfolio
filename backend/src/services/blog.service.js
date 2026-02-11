import Blog from "../models/Blog.js";

const getAllBlogs = async () => {
  return await Blog.find().sort({ publishedAt: -1 });
};

const getBlogBySlug = async (slug) => {
  return await Blog.findOne({ slug });
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
