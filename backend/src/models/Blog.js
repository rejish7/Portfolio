import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  publishedAt: { type: Date, default: Date.now },
  readTime: { type: String },
  tags: [{ type: String }],
  author: { type: String, default: "Admin" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Blog", blogSchema);
