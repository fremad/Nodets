"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    googleid: String,
    projects: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'projectEntry' }],
    tasks: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'taskEntry' }]
});
//# sourceMappingURL=user-schema.js.map