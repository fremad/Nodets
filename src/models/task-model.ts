export class Task {
    _id : any;
    name: string;
    email: string;
    description: string;
    goal: Goal;
    category: Category;
    project: Project;
    user: User[];
    estimated_time: number;
    status: string;
    created_date: Date;
    completed_time: number;
    completed_date: Date;
}

//TODO move to seperate file
export class Project {
    _id : any;
    name: string;
    description: string;
    tasks: Task[];
    categories: Category[];
}

// TODD move to seperate file
export class User {
    name: string;
    projects: Project[];
    tasks: Task[];
}

// TODD move to seperate file
export class Category {
    name: string;
    description: string;
    tasks: Task[];
}

// TODO move to seperate file
export class Goal {
    name: string;
    description: string;
    projects: Project[]; 
    version: number;
}