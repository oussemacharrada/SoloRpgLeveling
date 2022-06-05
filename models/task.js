const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({

    title: {
        type: String,
        require: [true, "A task must have a title"],
        default: "New Task",
        trim: true

    },
    notes: {
        type: String,
        require: [true, "A task must have a description"],

        default: "Description",
        trim: true


    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, "A task must have a category"]

    },
    state: {
        type: String,
        required: [true, "A task must have a state"],
        default: "pending",
        trim: true

    },
    importance: {
        type: String,
        required: [true, "A task must have an importance level"],
        default: "low",
        trim: true
    },
    difficulty: {
        type: Number,
        required: [true, "A task must have a difficulty"],
        default: 1,
        trim: true
    },
    schedule:{
        type:datetime,
        
    }

}, {
    timestamps: true
});


Task = mongoose.model('Task', taskSchema);

module.exports = Task;