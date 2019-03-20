import { Response, Request, NextFunction } from "express";
import { Task, Project } from "../models/task-model";
import { DB_getAllProjects, DB_createProject, DB_getProject, DB_getAllProjectTasks } from "../DAL/task-acces";


/**
 * Retrives all projects
 */
export function getAllProjects(
    req: Request,
    res: Response) {
    console.log("Called wrong")
    DB_getAllProjects().then((data: Project[]) => {
        const response = {
            count: data.length,
            projects: data.map(projects => {
                return {
                    _id: projects._id,
                    name: projects.name,
                    description: projects.description,
                }
            })
        }

        res.status(200).json(response)

    }, (err: any) => {
        res.status(503).json({ msg: 'Could not find any projects' })
    })
}

/**
 * Creates a Project
 */
export function createProject(
    req: Request,
    res: Response) {

    let tmp = new Project()
    tmp.name = req.body['name']
    tmp.description = req.body['description']

    DB_createProject(tmp).then((data: any) => {
        res.status(201).json({ id: data._id })
    }, (err: any) => {
        res.status(404).json({ msg: 'Creation not colpleted succesfully' })
    })
}

export function getProject(
    req: Request,
    res: Response) {

    const id: string = req.params.id;


    DB_getProject(id).then((data: Project) => {
        res.status(200).json(data)
    }, (err: any) => {
        res.status(503).json({})
    })
}

export function getAllProjectTasks(
    req: Request,
    res: Response) {
    console.log("CalledgetallProjectTasks")
    const id: string = req.params.id;

    DB_getAllProjectTasks(id).then((data: Task[]) => {
        res.status(200).json({tasks: data})
    }, (err: any) => {
        res.status(503).json({})
    })

}

export function updateProject() {
    throw "Not implemented yet"
}

export function deleteProject() {
    throw "Not implemented yet"
}