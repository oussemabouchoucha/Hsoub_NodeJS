const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    rate: {
        type: Number,
        default: 0,
    },
    reviews:{
        type: [{
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            comment: String,
            rate: Number,

        }],
        default: [],
    }
}, {
    timestamps: true
})

const Movie = mongoose.model('Movie', ModelSchema)

module.exports = Movie

    