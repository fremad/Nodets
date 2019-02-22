"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskcontroller_1 = require("./BLL/taskcontroller");
const router = express_1.default();
/**
 *  Routes for the task controller
 */
router.route('/')
    .get(taskcontroller_1.getAllTasks)
    .post();
router.route('/:id')
    .get(taskcontroller_1.getTask)
    .put(taskcontroller_1.updateTask)
    .delete(taskcontroller_1.deleteTask);
/**
 * Additional routes should be placed here
 */
exports.default = router;
//# sourceMappingURL=routes.js.map