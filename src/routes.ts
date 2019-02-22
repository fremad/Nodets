import Router from "express";
import { getAllTasks, getTask, updateTask, deleteTask } from './BLL/taskcontroller';
import passport from 'passport'
const router = Router();

import { Response, Request, NextFunction } from "express";

/**
 *  Routes for the task controller
 */
router.route('/')
  .get(getAllTasks)
  .post()
router.route('/:id')
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask)

/**
 * Additional routes should be placed here
 */
export default router;