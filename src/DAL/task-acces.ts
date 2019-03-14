import { model, Promise } from "mongoose";
import { ITask, Taskmodel } from "../database/db";
import { Task } from "../models/task-model";

/**
 * Get all tasks from DB
 */
export function DB_getAllTasks(search_query: any) {
    return new Promise((resolve: any, reject: any) => {

        Taskmodel.find({})
            .select('name description estimated_time status')
            // .where('status', search_query.status)
            .exec((err: any, data: Task[]) => {
                if (err) reject(err);
                resolve(data)
            })
    })
}

/**
 * Gets a specific task from the DB
 * @param id Id of the Task to be retrieved
 */
export function DB_getTask(id: string) {
    return new Promise((resolve: any, reject: any) => {
        Taskmodel.findById(id).exec((err: any, data: Task) => {
            if (err) reject(err);
            resolve(data)
        })
    })
}

/**
 * Deletes specific Task from DB
 * @param id ID of the Task to delete
 */
export function DB_deleteTask(id: string) {
    return new Promise((resolve: any, reject: any) => {
        Taskmodel.deleteOne({ _id: id }).exec((err: any, data: Task) => {
            if (err) { reject(err); }
            else {
                resolve(true)
            }
        })
    })
}

/**
 * Updates specific Task from DB
 * @param id ID of the Task to delete
 * @param task The Task object to be updated to
*/
export function DB_updateTask(id: string, task: Task) {
    return new Promise((resolve: any, reject: any) => {
        Taskmodel.findOneAndUpdate({ _id: id }, task, (err: any, task) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(task)
            }
        })
    })
}

/**
 * Creates a full task in the DB
 * @param task Task to create
 */
export function DB_createTask(task: Task) {
    return new Promise((resolve: any, reject: any) => {
        Taskmodel.create(task, (err: any, data: any) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}