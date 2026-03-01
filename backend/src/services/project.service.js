import Project from "../models/Project.js";

const getAllProjects = async () => {
  return await Project.find().sort({ createdAt: -1 });
};

const getProjectById = async (id) => {
  return await Project.findById(id);
};

const getProjectBySlug = async (slug) => {
  return await Project.findOne({ slug });
};

const createNewProject = async (data) => {
  return await Project.create(data);
};

const updateProjectById = async (id, data) => {
  return await Project.findByIdAndUpdate(id, data, { new: true });
};

const deleteProjectById = async (id) => {
  return await Project.findByIdAndDelete(id);
};

export {
  getAllProjects,
  getProjectById,
  getProjectBySlug,
  createNewProject,
  updateProjectById,
  deleteProjectById,
};
