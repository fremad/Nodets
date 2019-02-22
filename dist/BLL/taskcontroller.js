"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_acces_1 = require("../DAL/task-acces");
/**
 * Retrieves all Tasks
 */
function getAllTasks(req, res) {
    task_acces_1.DB_getAllTasks().then((data) => {
        //Creating DTO object containing only relevant informartion 
        const response = {
            count: data.length,
            tasks: data.map((tasks) => {
                return {
                    name: tasks.name,
                    desription: tasks.description
                };
            }),
            request: {
                type: 'GET',
                url: 'http://localhost:3000/task'
            }
        };
        res.status(200).json(response);
    }, (err) => {
        /**
         * Database query unsuccesful!
         */
        res.status(503).json({ msg: "Can't read the db for some reason..." });
    });
}
exports.getAllTasks = getAllTasks;
/**
 * Creates a Task
 */
function createTask(req, res) {
    console.log("createTask called");
}
exports.createTask = createTask;
/**
 * Retrieves Task by ID
*/
function getTask(req, res) {
    //ID from routes
    const id = req.params.id;
    task_acces_1.DB_getTask(id).then((data) => {
        res.status(200).json(data);
    }, (err) => {
        /**
        * Database query unsuccesful!
        */
        res.status(503).json({ msg: "Can't read the DB try again later" });
    });
}
exports.getTask = getTask;
/**
 * Updates an existing task
 */
function updateTask(req, res) {
    console.log('Update tasks called');
    const id = req.params.id;
}
exports.updateTask = updateTask;
/**
 * Deletes a sepcified task
 */
function deleteTask(req, res) {
    console.log("Delete tasks Called");
    const id = req.params.id;
    task_acces_1.DB_deleteTask(id).then((data) => {
        res.status(404);
    }, (err) => {
        console.log("Item couldn't be deleted");
    });
}
exports.deleteTask = deleteTask;
//# sourceMappingURL=taskcontroller.js.map