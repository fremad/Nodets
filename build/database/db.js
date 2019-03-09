"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const task_schema_1 = __importDefault(require("./schemas/task-schema"));
const project_schema_1 = __importDefault(require("./schemas/project-schema"));
const user_schema_1 = __importDefault(require("./schemas/user-schema"));
const categories_schema_1 = __importDefault(require("./schemas/categories-schema"));
/**
 * Setup database
 */
mongoose_1.connect('mongodb://localhost/task-development', { useNewUrlParser: true });
mongoose_1.connection.once('open', arg => {
    console.log("Connected to database");
});
/**
 * Initialize schemas into model
 */
exports.Taskmodel = mongoose_1.model("taskEntry", task_schema_1.default);
exports.Projectmodel = mongoose_1.model("projectEntry", project_schema_1.default);
exports.Usermodel = mongoose_1.model("userEntry", user_schema_1.default);
exports.Categorymodel = mongoose_1.model('categoryEntry', categories_schema_1.default);
//# sourceMappingURL=db.js.map