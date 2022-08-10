const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    month: {
        type: String,
        trim: true,
        required: [true, 'Please add some month']
    },
    budget: {
        type: Number,
        required: [true, 'Please add positive or negative']
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports =mongoose.model('UserData', UserDataSchema)