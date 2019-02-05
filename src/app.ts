import express from 'express'
import * as bodyParser from "body-parser";
import allroutes from './routes'
import "./database/db";
var cors = require('cors')
const app = express()
var http = require('http');

const port = 3000

//Allow all CORS requests (could be configured!)
app.use(cors())

/**
 * Parse data to provide JSON format
 */
app.use(bodyParser.json());

/**
 * Defining routes for controllers
 */
app.use('/task', allroutes)

/**
 * Defualt error catcher
 */
app.use(function (req: any, res: any, next: any) {
    var err = new Error('Not Found');

    res.status(404);
    res.json(err.message)
});


/**
 * Setup server port and https
 */
app.set('port', 3000);
var server = http.createServer(app);
server.listen(port);


export default app;