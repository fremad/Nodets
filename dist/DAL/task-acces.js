"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../database/db");
/**
 * Get all tasks from DB
 */
function DB_getAllTasks() {
    return new Promise((resolve, reject) => {
        db_1.Taskmodel.find({})
            .select('name description')
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
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
        db_1.Taskmodel.deleteOne(id).exec((err, data) => {
            if (err)
                reject(err);
            resolve(true);
        });
    });
}
exports.DB_deleteTask = DB_deleteTask;
//# sourceMappingURL=task-acces.js.map