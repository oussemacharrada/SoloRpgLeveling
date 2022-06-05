const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const userRouter = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - Name
 *         - Email
 *        
 *         
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the User
 *         Name:
 *           type: string
 *           description: The user UserNAME
 *         Email:
 *           type: string
 *           description: The user email
 *     
 *       example:
 *         id: d5fE_asz
 *         Name: LUFY
 *         level: 99
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Register User
 *     tags: [Users]
 *     requestusers:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The User was successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
userRouter.post('/signup', authController.signup);
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Login to account
 *     tags: [Users]
 *     requestusers:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: Logged In
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
userRouter.post('/login', authController.login);

userRouter
    .route('/')
    .get(userController.getAllUsers);


module.exports = userRouter;