import {
  getAllBlogs,
  createNewBlog,
  updateBlogById,
  deleteBlogById,
} from "../services/blog.service.js";

const getBlogs = async (req, res, next) => {
  try {
    const blogs = await getAllBlogs();
    res.json(blogs);
  } catch (err) {
    next(err);
  }
};

const createBlog = async (req, res, next) => {
  try {
    const blog = await createNewBlog(req.body);
    res.status(201).json(blog);
  } catch (err) {
    next(err);
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const blog = await updateBlogById(req.params.id, req.body);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    next(err);
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const blog = await deleteBlogById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted" });
  } catch (err) {
    next(err);
  }
};

export { getBlogs, createBlog, updateBlog, deleteBlog };
