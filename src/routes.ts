import Router from "express";
import { getAllTasks, getTask, updateTask, deleteTask, createTask, examplefileupload } from './BLL/taskcontroller';
import { getAllProjectTasks, getAllProjects, createProject, getProject, getProjectWeekStats } from './BLL/projectcontroller'
import passport from 'passport'
const router = Router();

import { Response, Request, NextFunction } from "express";

/**
 *  Routes for the task controller
 */

router.route('/file')
.post(examplefileupload)

 router.route('/')
.get(getAllTasks)
.post(createTask)

router.route('/projects')
.get(getAllProjects)
.post(createProject)

router.route('/projects/:id')
.get(getProject)
// .put(updateProject)
// .delete(deleteProject)


router.route('/projects/:id/task')
.get(getAllProjectTasks)
router.route('/projects/:id/stats')
.get(getProjectWeekStats)

router.route('/:id')
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask)


export default router;