import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Task } from '../task';
var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent.prototype.onTaskClick = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Task)
    ], TaskComponent.prototype, "task", void 0);
    TaskComponent = tslib_1.__decorate([
        Component({
            selector: 'app-task',
            templateUrl: './task.component.html',
            styleUrls: ['./task.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());
export { TaskComponent };
//# sourceMappingURL=task.component.js.map