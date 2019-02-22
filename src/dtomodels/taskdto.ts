import { Task } from "../models/task-model";

export class AllTasksDTO {
    _id: string;
    count: number;
    name: string;
    description: string;
    tasks: Task[]
}