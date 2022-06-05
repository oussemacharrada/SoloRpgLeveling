const mongoose = require('mongoose');


const characterSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    health: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    charcstats: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Charcstats' }
    ]
}, {
    timestamps: true

});
module.exports = mongoose.model('Character', characterSchema);