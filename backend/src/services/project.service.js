import Project from "../models/Project.js";

const getAllProjects = async () => {
  return await Project.find();
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
  createNewProject,
  updateProjectById,
  deleteProjectById,
};
