"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db_1 = require("../database/db");
/**
 * Get all tasks from DB
 */
function DB_getAllTasks(search_query) {
    return new mongoose_1.Promise((resolve, reject) => {
        db_1.Taskmodel.find({ 'name': { $regex: search_query, $options: "$i" } })
            .populate('projects')
            .select('name description estimated_time status project created_date')
            // .where('status', search_query.status)
            .exec((err, data) => {
            if (err)
                reject(err);
            resolve(data);
        });
    });
}
exports.DB_getAllTasks = DB_getAllTasks;
/**
 * Gets a specific task from the DB
 * @param id Id of the Task to be retrieved
 */
function DB_getTask(id) {
    return new mongoose_1.Promise((resolve, reject) => {
        db_1.Taskmodel.findById(id).exec((err, data) => {
            if (err)
                reject(err);
            resolve(data);
        });
    });
}
exports.DB_getTask = DB_getTask;
/**
 * Deletes specific Task from DB
 * @param id ID of the Task to delete
 */
function DB_deleteTask(id) {
    return new mongoose_1.Promise((resolve, reject) => {
        db_1.Taskmodel.deleteOne({ _id: id }).exec((err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(true);
            }
        });
    });
}
exports.DB_deleteTask = DB_deleteTask;
/**
 * Updates specific Task from DB
 * @param id ID of the Task to delete
 * @param task The Task object to be updated to
*/
function DB_updateTask(id, task) {
    return new mongoose_1.Promise((resolve, reject) => {
        db_1.Taskmodel.findOneAndUpdate({ _id: id }, task, (err, task) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(task);
            }
        });
    });
}
exports.DB_updateTask = DB_updateTask;
/**
 * Creates a full task in the DB
 * @param task Task to create
 */
function DB_createTask(task) {
    return new mongoose_1.Promise((resolve, reject) => {
        db_1.Taskmodel.create(task, (err, taskdata) => {
            if (err) {
                reject(err);
            }
            else {
                db_1.Projectmodel.update({ _id: taskdata.project._id }, { $push: { tasks: taskdata._id } }, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(taskdata);
                    }
                });
            }
        });
        // console.log(task.project)
        // if(task.project){
        //     DB_getProject(task.project._id).then((data: Project) => {
        //         task.project = data._id
        //         Taskmodel.create(task, (err: any, data: any) => {
        //             if (err) {
        //                 reject(err)
        //             }
        //             else {
        //                 resolve(data)
        //             }
        //         })
        //     })
        // }
    });
}
exports.DB_createTask = DB_createTask;
/**
 * Get All Projects from DB
 */
function DB_getAllProjects() {
    return new mongoose_1.Promise((resolve, reject) => {
        db_1.Projectmodel.find({}).exec((err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
exports.DB_getAllProjects = DB_getAllProjects;
function DB_createProject(prj) {
    return new mongoose_1.Promise((resolve, reject) => {
        db_1.Projectmodel.create(prj, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
exports.DB_createProject = DB_createProject;
function DB_getProject(id) {
    return new mongoose_1.Promise((resolve, reject) => {
        db_1.Projectmodel.findById(id).exec((err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
exports.DB_getProject = DB_getProject;
function DB_getAllProjectTasks(id) {
    return new mongoose_1.Promise((resolve, reject) => {
        db_1.Projectmodel.findById(id).populate('tasks').exec((err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data.tasks);
            }
        });
    });
}
exports.DB_getAllProjectTasks = DB_getAllProjectTasks;
//TODO selecting by date part of query (FOR SPEEDUP) 
function DB_getProjectStats(id) {
    return new mongoose_1.Promise((resolve, reject) => {
        db_1.Projectmodel.findById(id).populate('tasks').select('tasks').exec((err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data.tasks);
            }
        });
    });
}
exports.DB_getProjectStats = DB_getProjectStats;
//# sourceMappingURL=task-acces.js.map