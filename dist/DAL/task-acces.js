"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function DB_getAllTasks() {
    const dataEntry = mongoose_1.model("taskEntry");
    return new Promise((resolve, reject) => {
        dataEntry.find({}).then((data) => {
            resolve(data);
        });
    });
}
exports.DB_getAllTasks = DB_getAllTasks;
//# sourceMappingURL=task-acces.js.map