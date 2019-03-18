import Router from "express";
import { getAllTasks, getTask, updateTask, deleteTask, createTask } from './BLL/taskcontroller';
import { getAllProjectTasks, getAllProjects, updateProject, deleteProject, createProject } from './BLL/projectcontroller'
import passport from 'passport'
const router = Router();

import { Response, Request, NextFunction } from "express";

/**
 *  Routes for the task controller
 */
router.route('/')
  .get(getAllTasks)
  .post(createTask)
router.route('/:id')
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask)

/**
 * Additional routes should be placed here
 */
router.route('/projects')
  .get(getAllProjects)
  .post(createProject)
router.route('/projects:id')
  .get(getAllProjectTasks)
  .put(updateProject)
  .delete(deleteProject)

export default router;