const Character = require('./../models/character');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
exports.aliasTopCharacters = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = '-importance,difficulty';
    req.query.fields = 'title,notes,category,state,importance,difficulty,schedule';
    next();
}



exports.createCharacter = catchAsync(async(req, res, next) => {


    const newCharacter = await Character.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {
            newCharacter
        }
    });
});


exports.getAllCharacters = catchAsync(async(req, res, next) => {

    //exec querry
    const features = new APIFeatures(Character.find(), req.query).filter().sort().limitFields();
    const characters = await features.query;

    //send response
    res.status(200).json({
        status: 'success',
        results: characters.length,
        data: {
            characters
        }
    });

});





exports.getCharacter = catchAsync(async(req, res, next) => {

    await Character.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        results: characters.length,
        data: {
            characters
        }
    });


});

exports.updateCharacter = catchAsync(async(req, res, next) => {

    const character = await Character.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        status: 'success',
        results: characters.length,
        data: {
            characters
        }
    });


});
exports.deleteCharacter = catchAsync(async(req, res, next) => {

    const character = await Character.findByIdAndDelete(req.params.id, req.body, {

    })
    res.status(200).json({
        status: 'success',
        results: characters.length,
        data: {
            characters
        }
    });

});

exports.updateCharacter = catchAsync(async(req, res, next) => {

    const character = await Character.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        status: 'success',
        results: characters.length,
        data: {
            characters
        }
    });


});