const express = require('express');
const { router } = require('..');
const categoryController = require('./../controllers/categoryController')
const categoryRouter = express.Router();
categoryRouter
    .route('/')
    .get(categoryController.getAllCategorys)
    .post(categoryController.createCategory);

categoryRouter
    .route(':/id')
    .get(categoryController.getCategory)
    .patch(categoryController.updateCategory);
module.exports = categoryRouter;