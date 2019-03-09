import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
describe('TaskService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(TaskService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=task.service.spec.js.map