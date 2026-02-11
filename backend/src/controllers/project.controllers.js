import {
  getAllProjects,
  createNewProject,
  updateProjectById,
  deleteProjectById,
} from "../services/project.service.js";

const getProjects = async (req, res, next) => {
  try {
    const projects = await getAllProjects();
    res.json(projects);
  } catch (err) {
    next(err);
  }
};

const createProject = async (req, res, next) => {
  try {
    const project = await createNewProject(req.body);
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const project = await updateProjectById(req.params.id, req.body);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    next(err);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const project = await deleteProjectById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (err) {
    next(err);
  }
};

export { getProjects, createProject, updateProject, deleteProject };
