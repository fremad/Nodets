export class Task {
    name: string;
    description: string;
    project: Project;
    user: User[];
}

//TODO move to seperate file
export class Project {
    name: string;
    description: string
    tasks: Task[]
}

// TODD move to seperate file
export class User {
    name: string;
    projects: Project[];
    tasks: Task[];
}