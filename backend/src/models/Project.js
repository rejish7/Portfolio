import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  fullDescription: { type: String },
  image: { type: String },
  technologies: [{ type: String }],
  liveUrl: { type: String },
  githubUrl: { type: String },
  featured: { type: Boolean, default: false },
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Project", projectSchema);
