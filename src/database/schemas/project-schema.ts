import { Schema } from "mongoose";

export default new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 40
    },
    description: {
        type: String,
        required: false,
        maxlength: 500
    },
    tasks: [{type: Schema.Types.ObjectId, ref: 'taskEntry'}],

})