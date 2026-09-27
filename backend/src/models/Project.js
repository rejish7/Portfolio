import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
    change: { type: String },
    direction: { type: String, enum: ["up", "down", "neutral"] },
    context: { type: String },
  },
  { _id: false }
);

const sectionSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true },
    body: { type: String, required: true },
  },
  { _id: false }
);

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false }
);

const seoSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    keywords: [{ type: String }],
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    fullDescription: { type: String },
    image: { type: String },
    imageAlt: { type: String },
    imageCaption: { type: String },
    technologies: [{ type: String }],
    liveUrl: { type: String },
    githubUrl: { type: String },
    featured: { type: Boolean, default: false },
    category: { type: String },
    industry: { type: String },
    services: [{ type: String }],
    duration: { type: String },
    clientScope: { type: String },
    summary: { type: String },
    results: [resultSchema],
    highlights: [{ type: String }],
    sections: [sectionSchema],
    faqs: [faqSchema],
    seo: seoSchema,
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
