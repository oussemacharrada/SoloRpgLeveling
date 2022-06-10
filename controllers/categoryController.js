const Category = require('./../models/category');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');




exports.createCategory = catchAsync(async(req, res, next) => {


    const newCategory = await Category.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {
            newCategory
        }
    });
});


exports.getAllCategorys = catchAsync(async(req, res, next) => {

    //exec querry
    const features = new APIFeatures(Category.find(), req.query).filter().sort().limitFields();
    const categorys = await features.query;

    //send response
    res.status(200).json({
        status: 'success',
        results: categorys.length,
        data: {
            categorys
        }
    });

});





exports.getCategory = catchAsync(async(req, res, next) => {

    await Category.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        results: categorys.length,
        data: {
            categorys
        }
    });


});

exports.updateCategory = catchAsync(async(req, res, next) => {

    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        status: 'success',
        results: categorys.length,
        data: {
            categorys
        }
    });


});
exports.deleteCategory = catchAsync(async(req, res, next) => {

    const category = await Category.findByIdAndDelete(req.params.id, req.body, {

    })
    res.status(200).json({
        status: 'success',
        results: categorys.length,
        data: {
            categorys
        }
    });

});