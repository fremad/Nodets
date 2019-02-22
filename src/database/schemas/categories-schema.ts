import { Schema } from "mongoose";

export default new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 40
    },
    description: {
        type: String,
        required: true
    },
    tasks: [{type: Schema.Types.ObjectId, ref: 'taskEntry'}],
    // goals:
})