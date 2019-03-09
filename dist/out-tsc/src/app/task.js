export var PRIORITIES;
(function (PRIORITIES) {
    PRIORITIES[PRIORITIES["LOW"] = 0] = "LOW";
    PRIORITIES[PRIORITIES["MEDIUM"] = 1] = "MEDIUM";
    PRIORITIES[PRIORITIES["HIGH"] = 2] = "HIGH";
    PRIORITIES[PRIORITIES["CRITICAL"] = 3] = "CRITICAL";
})(PRIORITIES || (PRIORITIES = {}));
export var CATEGORIES;
(function (CATEGORIES) {
    CATEGORIES[CATEGORIES["DEVELOPMENT"] = 0] = "DEVELOPMENT";
    CATEGORIES[CATEGORIES["RELATIONAL"] = 1] = "RELATIONAL";
    CATEGORIES[CATEGORIES["MUSIC"] = 2] = "MUSIC";
    CATEGORIES[CATEGORIES["ARTS"] = 3] = "ARTS";
    CATEGORIES[CATEGORIES["SPORTS"] = 4] = "SPORTS";
    CATEGORIES[CATEGORIES["MAINTENANCE"] = 5] = "MAINTENANCE";
    CATEGORIES[CATEGORIES["TRANSPORT"] = 6] = "TRANSPORT";
    CATEGORIES[CATEGORIES["LEARNING"] = 7] = "LEARNING";
    CATEGORIES[CATEGORIES["FOOD"] = 8] = "FOOD";
    CATEGORIES[CATEGORIES["FUN"] = 9] = "FUN";
})(CATEGORIES || (CATEGORIES = {}));
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());
export { Task };
export var TASKS = [
    {
        name: "Set up Build",
        description: "work",
        creation_date: new Date(),
        due_date: new Date(),
        category: CATEGORIES.LEARNING,
        priority: PRIORITIES.HIGH,
        goal_origin: "unknown",
        time_estimate: 10
    },
    {
        name: "Set up backend",
        description: "work",
        creation_date: new Date(),
        due_date: new Date(),
        category: CATEGORIES.MUSIC,
        priority: PRIORITIES.CRITICAL,
        goal_origin: "unknown",
        time_estimate: 12
    },
    {
        name: "Play keyboard tunes",
        description: "work",
        creation_date: new Date(),
        due_date: new Date(),
        category: CATEGORIES.DEVELOPMENT,
        priority: PRIORITIES.LOW,
        goal_origin: "unknown",
        time_estimate: 14
    }
];
//# sourceMappingURL=task.js.map