import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CATEGORIES, PRIORITIES } from './task';
import { TaskService } from './task.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.title = 'Webdashboard';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllTasks();
        var task = {
            name: "Mytask",
            description: "Cool task",
            category: CATEGORIES.FUN,
            priority: PRIORITIES.HIGH,
            goal_origin: "something",
            time_estimate: 10,
            due_date: new Date()
        };
        this.addTask(task);
    };
    AppComponent.prototype.close = function ($event) {
        console.log("Closing");
        document.getElementById('form-container').style.display = "none";
    };
    AppComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.taskService.getAllTasks().subscribe(function (res) {
            _this.tasks = res;
        });
    };
    AppComponent.prototype.addTask = function (task) {
        this.taskService.addTask(task).subscribe(function (data) {
            console.log(data);
        });
    };
    AppComponent.prototype.openTaskForm = function () {
        document.getElementById('form-container').style.display = "flex";
    };
    AppComponent.prototype.closeTaskForm = function () {
        document.getElementById('form-container').style.display = "none";
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TaskService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map