const Task = require('./../models/task');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
exports.aliasTopTasks = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = '-importance,difficulty';
    req.query.fields = 'title,notes,category,state,importance,difficulty,schedule';
    next();
}



exports.createTask = catchAsync(async(req, res, next) => {


    const newTask = await Task.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {
            newTask
        }
    });
});


exports.getAllTasks = catchAsync(async(req, res, next) => {

    //exec querry
    const features = new APIFeatures(Task.find(), req.query).filter().sort().limitFields();
    const tasks = await features.query;

    //send response
    res.status(200).json({
        status: 'success',
        results: tasks.length,
        data: {
            tasks
        }
    });

});





exports.getTask = catchAsync(async(req, res, next) => {

    await Task.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        results: tasks.length,
        data: {
            tasks
        }
    });


});

exports.updateTask = catchAsync(async(req, res, next) => {

    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        status: 'success',
        results: tasks.length,
        data: {
            tasks
        }
    });


});
exports.deleteTask = catchAsync(async(req, res, next) => {

    const task = await Task.findByIdAndDelete(req.params.id, req.body, {

    })
    res.status(200).json({
        status: 'success',
        results: tasks.length,
        data: {
            tasks
        }
    });

});