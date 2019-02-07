import { Document, connect, connection, model, Schema } from "mongoose";
import { Task } from '../models/task-model';


/**
 * Setup database
 */
connect('mongodb://localhost/task-development', { useNewUrlParser: true });

connection.once('open', arg => {
    console.log("Connected to database");
});

/**
 * Define schemas
 */
var taskSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    }
})


/**
 * Interfaces to models for types
 */
export interface ITask extends Task, Document { }

/**
 * Initialize schemas into model
 */
export const Taskmodel = model<ITask>("taskEntry", taskSchema);
