import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Task } from '../task';
import { TaskService } from '../task.service';
var TaskformComponent = /** @class */ (function () {
    function TaskformComponent(fb, taskService) {
        this.taskService = taskService;
        this.close = new EventEmitter();
        this.taskForm = fb.group({
            name: ['', Validators.required],
            description: [''],
            due_date: [''],
            category: [''],
            priority: [''],
            goal_origin: [''],
            time_estimate: ['']
        });
    }
    TaskformComponent.prototype.ngOnInit = function () {
    };
    TaskformComponent.prototype.onSubmit = function () {
        // console.warn("Submitting")
        // console.warn(this.taskForm.value.name)
        var tmp = new Task();
        tmp.name = this.taskForm.value.name;
        tmp.description = this.taskForm.value.description;
        tmp.due_date = this.taskForm.value.due_date;
        tmp.goal_origin = this.taskForm.value.goal_origin;
        tmp.priority = this.taskForm.value.priority;
        tmp.time_estimate = this.taskForm.value.time_estimate;
        this.taskService.addTask(tmp).subscribe(function (data) {
            console.log("Entry added");
            console.log(data);
        });
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TaskformComponent.prototype, "close", void 0);
    TaskformComponent = tslib_1.__decorate([
        Component({
            selector: 'app-taskform',
            templateUrl: './taskform.component.html',
            styleUrls: ['./taskform.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, TaskService])
    ], TaskformComponent);
    return TaskformComponent;
}());
export { TaskformComponent };
//# sourceMappingURL=taskform.component.js.map