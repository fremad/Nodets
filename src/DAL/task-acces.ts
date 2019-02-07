import { model } from "mongoose";
import { ITask, Taskmodel } from "../database/db";
import { Task } from "../models/task-model";


export function DB_getAllTasks() {
    return new Promise((resolve, reject) => {
        
        Taskmodel.find({})
        .select('name description')
        .exec((err :any, data: Task[]) => {
            if (err) reject(err);
            resolve(data)
        })
    })
}
