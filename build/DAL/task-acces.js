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
            .select('name description estimated_time status')
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
        db_1.Taskmodel.create(task, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
exports.DB_createTask = DB_createTask;
//# sourceMappingURL=task-acces.js.map