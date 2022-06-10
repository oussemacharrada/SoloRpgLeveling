const mongoose = require('mongoose');


const characterSchema = mongoose.Schema({

    characterPhoto: {
        type: String,
        required: [true, "A character must have a characterphoto"],
        default: "new photo",
        trim: true
    },
    charisma: {
        type: Number,
        required: true,
        default: 0
    },
    culture: {
        type: Number,
        required: true,
        default: 0

    },
    experience: {
        type: Number,
        required: true,
        default: 0

    },
    gender: {
        type: String,
        required: [true, "A character must have a gender"],
        default: "gender",
        trim: true
    },
    intellegince: {
        type: Number,
        required: true,
        default: 0

    },
    race: {
        type: String,
        required: [true, "A character must have a race"],
        default: "race",
        trim: true
    },

    strengh: {
        type: Number,
        required: true,
        default: 0

    },
    ownerID: {
        type: String,
        required: true
    },
    health: {
        type: Number,
        required: true,
        default: 100

    }
}, {
    timestamps: true

});
module.exports = mongoose.model('Character', characterSchema);