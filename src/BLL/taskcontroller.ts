import { Response, Request, NextFunction } from "express";

export function getAllTasks(
    req: Request,
    res: Response) {


    res.status(200)
    res.json({ "name": "Larshj" })
}


