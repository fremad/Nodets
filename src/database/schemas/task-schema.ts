import { Schema } from "mongoose";


export default new Schema({
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
    },
    projects: [{ type: Schema.Types.ObjectId, ref: 'projectEntry' }],
    user: [{ type: Schema.Types.ObjectId, ref: 'userEntry' }],
    created_date: Date,
    estimated_time: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        default: "created",
        required: true
    }
});