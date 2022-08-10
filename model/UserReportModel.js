const mongoose = require('mongoose');

const UserReportSchema = new mongoose.Schema({
    goodsName: {
        type: String,
        required: [true, "Please add Goods Name"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Amount"]
    },
    amount: {
        type: Number,
        required: [true, "Please add Amount"]
    },
    date: {
        type: String,
        required: [true, "Please Add date"]
    },
    purchase: {
        type: Number,
        required: true,
    }
})

module.exports =mongoose.model('UserReport', UserReportSchema)
