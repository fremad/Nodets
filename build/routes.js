"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskcontroller_1 = require("./BLL/taskcontroller");
const projectcontroller_1 = require("./BLL/projectcontroller");
const router = express_1.default();
/**
 *  Routes for the task controller
 */
router.route('/file')
    .post(taskcontroller_1.examplefileupload);
router.route('/')
    .get(taskcontroller_1.getAllTasks)
    .post(taskcontroller_1.createTask);
router.route('/projects')
    .get(projectcontroller_1.getAllProjects)
    .post(projectcontroller_1.createProject);
router.route('/projects/:id')
    .get(projectcontroller_1.getProject);
// .put(updateProject)
// .delete(deleteProject)
router.route('/projects/:id/task')
    .get(projectcontroller_1.getAllProjectTasks);
router.route('/projects/:id/stats')
    .get(projectcontroller_1.getProjectWeekStats);
router.route('/:id')
    .get(taskcontroller_1.getTask)
    .put(taskcontroller_1.updateTask)
    .delete(taskcontroller_1.deleteTask);
exports.default = router;
//# sourceMappingURL=routes.js.map