const express = require('express');
const { router } = require('..');
const taskController = require('./../controllers/taskController')
const taskRouter = express.Router();
taskRouter.route('/top-5-tasks').get(taskController.aliasTopTasks, taskController.getAllTasks);
taskRouter
    .route('/')
    .get(taskController.getAllTasks)
    .post(taskController.createTask);

taskRouter
    .route(':/id')
    .get(taskController.getTask)
    .patch(taskController.updateTask);
module.exports = taskRouter;