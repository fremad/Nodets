"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = new mongoose_1.Schema({
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
    tasks: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'taskEntry' }],
});
//# sourceMappingURL=project-schema.js.map