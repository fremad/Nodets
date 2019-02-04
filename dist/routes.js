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
router.route('/').get(taskcontroller_1.getAllTasks);
/**
 * Additional routes should be placed here
 */
exports.default = router;
//# sourceMappingURL=routes.js.map