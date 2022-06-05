const User = require('./../models/user');
const catchAsync = require('./../utils/catchAsync');
const apperror = require('./../utils/appError');
const jwt = require('jsonwebtoken');


const signToken = id => {
    return jwt.sign({
            id: id
        },
        process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN

        });
}

exports.signup = catchAsync(async(req, res, next) => {
    const newUser = await User.create(req.body);

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN

    });
    res.status(201).json({
        status: 'success',
        token,
        data: {
            newUser
        }
    });
});


exports.login = catchAsync(async(req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new apperror('Please provide a valid email and password', 400));
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.corretPassword(password, user.password))) {
        return next(new apperror('Incorrect email or password', 401));
    }
    const token = signToken(user._id);
    res.status(200).json({
        status: 'success',
        token
    });

});