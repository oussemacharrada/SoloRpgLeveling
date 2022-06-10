const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "A category must have a name"],
        default: "New Category",
        trim: true

    },
    description: {
        type: String,
        required: [true, "A task must have a description"],
        default: "Description",
        trim: true
    },
    icon: {
        type: String,
        required: [true, "A Category must have an icon"],
        default: "New icon",
        trim: true

    },

}, {
    timestamps: true
});


Category = mongoose.model('Category', categorySchema);

module.exports = Category;