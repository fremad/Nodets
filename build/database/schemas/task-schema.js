"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = new mongoose_1.Schema({
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
    project: { type: mongoose_1.Schema.Types.ObjectId, ref: 'projectEntry' },
    user: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'userEntry' }],
    created_date: {
        type: Date,
        default: Date.now()
    },
    estimated_time: {
        type: Number,
        required: false
    },
    completed_time: {
        type: Number
    },
    status: {
        type: String,
        default: "created",
        required: true
    }
});
//# sourceMappingURL=task-schema.js.map