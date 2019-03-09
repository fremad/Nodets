"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 40
    },
    description: {
        type: String,
        required: true
    },
    tasks: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'taskEntry' }],
});
//# sourceMappingURL=categories-schema.js.map