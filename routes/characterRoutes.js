const express = require('express');

const characterRouter = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Charcter:
 *       type: object
 *       required:
 *         - Name
 *         - level
 *         - xp
 *         - hp
 *         - stats
 *         
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the character
 *         Name:
 *           type: string
 *           description: The character NAME
 *         level:
 *           type: string
 *           description: The character LEVEL
 *         xp:
 *           type: string
 *           description: The character XP
 *         hp:
 *           type: string
 *           description: The importance of the HP 
 *         stats:
 *           type: Number
 *           description: The Difficulity of the STATS 
 *       example:
 *         id: d5fE_asz
 *         Name: LUFY
 *         level: 99
 *         xp : 365
 *         state : 500
 *         hp : 10000
 *         stats : 1
 */

/**
 * @swagger
 * tags:
 *   name: characters
 *   description: The characters managing API
 */

characterRouter

    .route('/')
    /**
     * @swagger
     * /character:
     *   get:
     *     summary: Returns the list of all the character
     *     tags: [Character]
     *     responses:
     *       200:
     *         description: The list of the character
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/models/Character'
     */
    .get(getAllCharacters)

/**
 * @swagger
 * /character:
 *   post:
 *     summary: Create a new character
 *     tags: [Character]
 *     requestcharacter:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Character'
 *     responses:
 *       200:
 *         description: The task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chharacter'
 *       500:
 *         description: Some server error
 */
.post(createCharacter);

characterRouter
    .route(':/id')
    /**
     * @swagger
     * /character/{id}:
     *   get:
     *     summary: Get the character by id
     *     tags: [Character]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The character id
     *     responses:
     *       200:
     *         description: The character description by id
     *         contens:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/character'
     *       404:
     *         description: The character was not found
     */
    .get(getCharacter)

/**
 * @swagger
 * /character/{id}:
 *  put:
 *    summary: Update the character by the id
 *    tags: [Character]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The character id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Character'
 *    responses:
 *      200:
 *        description: The character was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/models/Character'
 *      404:
 *        description: The Character was not found
 *      500:
 *        description: Some error happened
 */
.patch(updateCharacter)
    .delete(deleteCharacter);
module.exports = characterRouter;