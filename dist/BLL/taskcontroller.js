"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { DB_getAllTasks } from '../DAL/task-acces'
// import { Task } from '../models/task-model';
// import { model } from 'mongoose'
// import { ITask } from '../../src/database/db'
// import Promise from 'promise'
// import { resolve } from "path";
const task_acces_1 = require("../DAL/task-acces");
/**
 * Retrieves all Tasks
 */
function getAllTasks(req, res) {
    task_acces_1.DB_getAllTasks().then((data) => {
        res.status(200);
        res.json(data);
    });
}
exports.getAllTasks = getAllTasks;
//# sourceMappingURL=taskcontroller.js.map