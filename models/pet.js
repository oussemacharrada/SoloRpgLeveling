const mongoose = require('mongoose');


const petSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "A pet must have a name"],
        default: "new petName",
        trim: true
    },
    level: {
        type: Number,
        required: true,
        default: 1
    },
    experience: {
        type: Number,
        required: true,
        default: 0
    },
    health: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: [true, "A pet must have an image"],
        default: "new image",
        trim: true
    },
    type: {
        type: String,
        required: [true, "A pet must have a type"],
        default: "new pet type",
        trim: true
    },
    ownerID: {
        type: String,
        required: true
    }

}, {
    timestamps: true

});
module.exports = mongoose.model('Pet', petSchema);