"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
require("./database/db");
var cors = require('cors');
const app = express_1.default();
var http = require('http');
const port = 3000;
//Allow all CORS requests (could be configured!)
app.use(cors());
/**
 * Parse data to provide JSON format
 */
app.use(bodyParser.json());
/**
 * Serve Angular app
 */
// app.use(express.static(__dirname + "/../dist/Webdashboard"));
/**
 * Defining routes for controllers
 */
app.use('/task', routes_1.default);
/**
 * Defualt error catcher
 */
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    res.status(404);
    res.json(err.message);
});
/**
 * Setup server port and https
 */
app.set('port', 3000);
var server = http.createServer(app);
server.listen(port);
exports.default = app;
//# sourceMappingURL=app.js.map