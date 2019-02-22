import { Response, Request, NextFunction } from "express";
import { DB_getAllTasks, DB_getTask, DB_deleteTask } from "../DAL/task-acces";
import { AllTasksDTO } from "../dtomodels/taskdto";
import { Task } from "../models/task-model";

/**
 * Retrieves all Tasks
 */
export function getAllTasks(
    req: Request,
    res: Response) {

    DB_getAllTasks().then((data: Task[]) => {
        
        //Creating DTO object containing only relevant informartion 
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
                url: 'http://localhost:3000/task'
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

/**
 * Creates a Task
 */
export function createTask(
    req: Request,
    res: Response) {

        console.log("createTask called")
    }

/**
 * Retrieves Task by ID
*/
export function getTask(
    req: Request,
    res: Response) {

    //ID from routes
    const id: string = req.params.id;

    DB_getTask(id).then((data: Task) => {
        res.status(200).json(data)
    }, (err) => {
        /**
        * Database query unsuccesful!
        */
        res.status(503).json({ msg: "Can't read the DB try again later" })
    })
}

/**
 * Updates an existing task
 */
export function updateTask(
    req: Request,
    res: Response) {

    console.log('Update tasks called')

    const id: string = req.params.id;
}

/**
 * Deletes a sepcified task
 */
export function deleteTask(
    req: Request,
    res: Response) {

    console.log("Delete tasks Called")

    const id: string = req.params.id;

    DB_deleteTask(id).then((data) => {
        res.status(404)
    }, (err) => {
        console.log("Item couldn't be deleted")
    })
}