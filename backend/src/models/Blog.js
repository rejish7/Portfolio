import mongoose from "mongoose";

const seoMetadataSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  keywords: [{ type: String }],
  ogTitle: { type: String },
  ogDescription: { type: String },
  ogImage: { type: String },
  twitterCard: { type: String, enum: ['summary', 'summary_large_image'], default: 'summary_large_image' },
}, { _id: false });

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
  seo: seoMetadataSchema, // SEO metadata fields
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Blog", blogSchema);
