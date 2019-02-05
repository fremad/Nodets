"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**
 * Setup database
 */
mongoose_1.connect('mongodb://localhost/task-development', { useNewUrlParser: true });
mongoose_1.connection.once('open', arg => {
    console.log("Connected to database");
});
/**
 * Define schemas
 */
var taskSchema = new mongoose_1.Schema({
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
});
/**
 * Initialize schemas into model
 */
mongoose_1.model("taskEntry", taskSchema);
//# sourceMappingURL=db.js.map