import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getAllTasks = function () {
        return this.http.get("http://localhost:3000/api/model");
    };
    TaskService.prototype.addTask = function (task) {
        console.log("Requested");
        return this.http.post('http://localhost:3000/api/model', task);
    };
    TaskService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TaskService);
    return TaskService;
}());
export { TaskService };
//# sourceMappingURL=task.service.js.map