const express = require('express');
const { router } = require('..');
const petController = require('./../controllers/petController')
const petRouter = express.Router();
petRouter
    .route('/')
    .get(petController.getAllPets)
    .post(petController.createPet);

petRouter
    .route(':/id')
    .get(petController.getPet)
    .patch(petController.updatePet);
module.exports = petRouter;