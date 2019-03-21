"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_model_1 = require("../models/task-model");
const task_acces_1 = require("../DAL/task-acces");
/**
 * Retrives all projects
 */
function getAllProjects(req, res) {
    task_acces_1.DB_getAllProjects().then((data) => {
        const response = {
            count: data.length,
            projects: data.map(projects => {
                return {
                    _id: projects._id,
                    name: projects.name,
                    description: projects.description,
                };
            })
        };
        res.status(200).json(response);
    }, (err) => {
        res.status(503).json({ msg: 'Could not find any projects' });
    });
}
exports.getAllProjects = getAllProjects;
/**
 * Creates a Project
 */
function createProject(req, res) {
    let tmp = new task_model_1.Project();
    tmp.name = req.body['name'];
    tmp.description = req.body['description'];
    task_acces_1.DB_createProject(tmp).then((data) => {
        res.status(201).json({ id: data._id });
    }, (err) => {
        res.status(404).json({ msg: 'Creation not colpleted succesfully' });
    });
}
exports.createProject = createProject;
function getProject(req, res) {
    const id = req.params.id;
    task_acces_1.DB_getProject(id).then((data) => {
        res.status(200).json(data);
    }, (err) => {
        res.status(503).json({});
    });
}
exports.getProject = getProject;
function getAllProjectTasks(req, res) {
    const id = req.params.id;
    task_acces_1.DB_getAllProjectTasks(id).then((data) => {
        res.status(200).json({ tasks: data });
    }, (err) => {
        res.status(503).json({});
    });
}
exports.getAllProjectTasks = getAllProjectTasks;
function updateProject() {
    throw "Not implemented yet";
}
exports.updateProject = updateProject;
function deleteProject() {
    throw "Not implemented yet";
}
exports.deleteProject = deleteProject;
//# sourceMappingURL=projectcontroller.js.map