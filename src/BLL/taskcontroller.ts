import { Response, Request, NextFunction } from "express";
import { DB_getAllTasks, DB_getTask, DB_deleteTask, DB_updateTask, DB_createTask } from "../DAL/task-acces";
import { AllTasksDTO } from "../dtomodels/taskdto";
import { Task } from "../models/task-model";

/**
 * Retrieves all Tasks
 */
export function getAllTasks(
    req: Request,
    res: Response) { 

    DB_getAllTasks(req.query).then((data: Task[]) => {

        //Creating DTO object containing only relevant informartion 
        const response = {
            count: data.length,
            tasks: data.map((tasks) => {
                return {
                    _id: tasks._id,
                    name: tasks.name,
                    description: tasks.description,
                    estimated_time: tasks.estimated_time,
                    status: tasks.status
                }
            }),
            request: {
                type: 'GET',
                url: 'http://localhost:3000/task'
            }
        }

        res.status(200).json(response)
    }, (err: any) => {

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

    let tmp = new Task()
    tmp.name = req.body['name']
    tmp.description = req.body['description']
    tmp.estimated_time = req.body['estimated_time']

    DB_createTask(tmp).then((data: any) => {
        res.status(201).json({ id: data._id })
    }, (err: any) => {
        res.status(404).json({ msg: 'Creation didn\'t work' })
    })
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
    }, (err: any) => {
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

    // console.log('Update tasks called')

    const id: string = req.params.id;

    //TODO make this into a ctor of Task (cleaner)
    let tmp = new Task()
    tmp.name = req.body["name"]
    tmp.description = req.body["description"]
    tmp.category = req.body["category"]
    tmp.email = req.body["email"]
    tmp.goal = req.body["goal"]
    tmp.user = req.body["user"]
    tmp.project = req.body["project"]
    tmp.estimated_time = req.body["estimated_time"]
    tmp.status = req.body["status"]

    DB_updateTask(id, tmp).then((data: any) => {
        res.status(204).json({})
    }, (err: any) => {
        res.status(404).json({ msg: "Update could not be performed" })
        console.log('Error happened')
    })
}

/**
 * Deletes a sepcified task
 */
export function deleteTask(
    req: Request,
    res: Response) {

    const id: string = req.params.id;

    DB_deleteTask(id).then((data: any) => {
        res.status(204).json({})
    }, (err: any) => {
        res.status(404).json({ msg: "Not found" })
        console.log("Item couldn't be deleted")
    })
}