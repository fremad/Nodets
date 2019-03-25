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
// export function updateProject() {
//     throw "Not implemented yet"
// }
// export function deleteProject() {
//     throw "Not implemented yet"
// }
function getProjectWeekStats(req, res) {
    const id = req.params.id;
    task_acces_1.DB_getProjectStats(id).then((data) => {
        data = data.filter(res => {
            if (res.completed_date) {
                return res;
            }
        });
        //Make it 5 days ago
        let date = new Date();
        date.setDate(date.getDate() - 5);
        console.log(date);
        data = data.filter(res => {
            if (res.completed_date.getTime() > date.getTime()) {
                return res.completed_time;
            }
        });
        console.log(data);
        res.status(200).json(data);
    });
}
exports.getProjectWeekStats = getProjectWeekStats;
//# sourceMappingURL=projectcontroller.js.map