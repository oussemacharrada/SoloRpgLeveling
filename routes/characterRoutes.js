const express = require('express');

const characterRouter = express.Router();
const characterController = require('./../controllers/characterController')

characterRouter
    .route('/')
    .get(characterController.getAllCharacters)
    .post(characterController.createCharacter);
characterRouter
    .route(':/id')
    .get(characterController.getCharacter)
    .patch(characterController.updateCharacter)
    .delete(characterController.deleteCharacter);
module.exports = characterRouter;