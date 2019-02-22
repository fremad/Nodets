import { Schema } from "mongoose";

export default new Schema({
    name: {
        type: String,
        required: true
    },
    googleid: String,
    projects: [{type: Schema.Types.ObjectId, ref: 'projectEntry'}],
    tasks: [{type: Schema.Types.ObjectId, ref: 'taskEntry'}]
})