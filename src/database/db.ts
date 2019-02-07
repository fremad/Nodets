import { Document, connect, connection, model, Schema } from "mongoose";
import { Task, Project, User } from '../models/task-model';
import taskSchema from './schemas/task-schema'
import projectSchema from "./schemas/project-schema";
import userSchema from "./schemas/user-schema";

/**
 * Setup database
 */
connect('mongodb://localhost/task-development', { useNewUrlParser: true });

connection.once('open', arg => {
    console.log("Connected to database");
});

/**
 * Interfaces to models for types
 */
export interface ITask extends Task, Document { }
export interface IProject extends Project, Document { }
export interface IUser extends User, Document {}

/**
 * Initialize schemas into model
 */
export const Taskmodel = model<ITask>("taskEntry", taskSchema);
export const Projectmodel = model<IProject>("projectEntry", projectSchema)
export const Usermodel = model<IUser>("userEntry",userSchema)