import Router from "express";
import { getAllTasks } from './BLL/taskcontroller';
const router = Router();


/**
 *  Routes for the task controller
 */
router.route('/').get(getAllTasks);

/**
 * Additional routes should be placed here
 */


export default router;