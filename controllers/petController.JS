const Pet = require('./../models/pet');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');




exports.createPet = catchAsync(async(req, res, next) => {


    const newPet = await Pet.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {
            newPet
        }
    });
});


exports.getAllPets = catchAsync(async(req, res, next) => {

    //exec querry
    const features = new APIFeatures(Pet.find(), req.query).filter().sort().limitFields();
    const pets = await features.query;

    //send response
    res.status(200).json({
        status: 'success',
        results: pets.length,
        data: {
            pets
        }
    });

});





exports.getPet = catchAsync(async(req, res, next) => {

    await Pet.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        results: pets.length,
        data: {
            pets
        }
    });


});

exports.updatePet = catchAsync(async(req, res, next) => {

    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        status: 'success',
        results: pets.length,
        data: {
            pets
        }
    });


});
exports.deletePet = catchAsync(async(req, res, next) => {

    const pet = await Pet.findByIdAndDelete(req.params.id, req.body, {

    })
    res.status(200).json({
        status: 'success',
        results: pets.length,
        data: {
            pets
        }
    });

});