const express = require('express');
const { router } = require('..');
const taskController = require('./../controllers/taskController')
const taskRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - notes
 *         - categorys
 *         - state
 *         - importance
 *         - difficulty
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the task
 *         title:
 *           type: string
 *           description: The task title
 *         notes:
 *           type: string
 *           description: The task notes
 *         categorys:
 *           type: string
 *           description: The task category
 *         importance:
 *           type: string
 *           description: The importance of the task 
 *         difficulty:
 *           type: Number
 *           description: The Difficulity of the task 
 *       example:
 *         id: d5fE_asz
 *         title: wake up
 *         notes: must wake up early
 *         categorys : morning routine
 *         state : active
 *         importance : important
 *         difficulty : 1
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The tasks managing API
 */


taskRouter.route('/top-5-tasks').get(taskController.aliasTopTasks, taskController.getAllTasks);

taskRouter
    .route('/')
    /**
     * @swagger
     * /tasks:
     *   get:
     *     summary: Returns the list of all the tasks
     *     tags: [Tasks]
     *     responses:
     *       200:
     *         description: The list of the tasks
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 '#/components/schemas/Tasks'
     */
    .get(taskController.getAllTasks)

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new tasks
 *     tags: [Tasks]
 *     requesttasks:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tasks'
 *     responses:
 *       200:
 *         description: The task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *       500:
 *         description: Some server error
 */
.post(taskController.createTask);

taskRouter
    .route(':/id')

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get the tasks by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tasks id
 *     responses:
 *       200:
 *         description: The tasks description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tasks'
 *       404:
 *         description: The tasks was not found
 */
.get(taskController.getTask)

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Update the tasks by the id
 *    tags: [Tasks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The tasks id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Tasks'
 *    responses:
 *      200:
 *        description: The tasks was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/models/Tasks'
 *      404:
 *        description: The Tasks was not found
 *      500:
 *        description: Some error happened
 */

.patch(taskController.updateTask);
module.exports = taskRouter;