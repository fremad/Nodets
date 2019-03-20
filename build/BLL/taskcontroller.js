"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_acces_1 = require("../DAL/task-acces");
const task_model_1 = require("../models/task-model");
/**
 * Retrieves all Tasks
 */
function getAllTasks(req, res) {
    let regex = req.query.name;
    if ((!regex) || (regex === 'undefined')) {
        regex = '.*';
    }
    task_acces_1.DB_getAllTasks(regex).then((data) => {
        // console.log(data)
        //Creating DTO object containing only relevant informartion 
        const response = {
            count: data.length,
            tasks: data.map((tasks) => {
                return {
                    _id: tasks._id,
                    name: tasks.name,
                    description: tasks.description,
                    estimated_time: tasks.estimated_time,
                    status: tasks.status,
                    projects: tasks.project
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
    console.log(req.body['project']._id);
    let tmp = new task_model_1.Task();
    tmp.name = req.body['name'];
    tmp.description = req.body['description'];
    tmp.project = req.body['project'];
    tmp.estimated_time = req.body['estimated_time'];
    console.log(tmp);
    task_acces_1.DB_createTask(tmp).then((data) => {
        res.status(201).json({ id: data._id });
    }, (err) => {
        res.status(404).json({ msg: 'Creation didn\'t work' });
    });
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
    // console.log('Update tasks called')
    const id = req.params.id;
    //TODO make this into a ctor of Task (cleaner)
    let tmp = new task_model_1.Task();
    tmp.name = req.body["name"];
    tmp.description = req.body["description"];
    tmp.category = req.body["category"];
    tmp.email = req.body["email"];
    tmp.goal = req.body["goal"];
    tmp.user = req.body["user"];
    tmp.project = req.body["project"];
    tmp.estimated_time = req.body["estimated_time"];
    tmp.status = req.body["status"];
    task_acces_1.DB_updateTask(id, tmp).then((data) => {
        res.status(204).json({});
    }, (err) => {
        res.status(404).json({ msg: "Update could not be performed" });
        console.log('Error happened');
    });
}
exports.updateTask = updateTask;
/**
 * Deletes a sepcified task
 */
function deleteTask(req, res) {
    const id = req.params.id;
    task_acces_1.DB_deleteTask(id).then((data) => {
        res.status(204).json({});
    }, (err) => {
        res.status(404).json({ msg: "Not found" });
        console.log("Item couldn't be deleted");
    });
}
exports.deleteTask = deleteTask;
//# sourceMappingURL=taskcontroller.js.map