import { Response, Request, NextFunction } from "express";
import { DB_getAllTasks } from "../DAL/task-acces";
import { AllTasksDTO } from "../dtomodels/taskdto";
import { Task } from "../models/task-model";


/**
 * Retrieves all Tasks
 */
export function getAllTasks(
    req: Request,
    res: Response) {

    DB_getAllTasks().then((data: Task[]) => {
/**
 * Creating DTO object containing only relevant informartion
 */
        const response = {
            count: data.length,
            tasks: data.map((tasks) => {
                return {
                    name: tasks.name,
                    desription: tasks.description
                }
            }),
            request: {
                type: 'GET',
                url: 'localhost:3000/tasks'
            }
        }

        res.status(200).json(response)
    }, (err) => {
        /**
         * Database query unsuccesful!
         */
        res.status(503).json({ msg: "Can't read the db for some reason..." })
    })
}