import { model } from "mongoose";
import { ITask, Taskmodel } from "../database/db";
import { Task } from "../models/task-model";


/**
 * Get all tasks from DB
 */

export function DB_getAllTasks() {
    return new Promise((resolve, reject) => {

        Taskmodel.find({})
            .select('name description')
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
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
        Taskmodel.deleteOne(id).exec((err: any, data: Task) => {
            if (err) reject(err);
            resolve(true)
        })
    })
}