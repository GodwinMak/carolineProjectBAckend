const mongoose = require('mongoose');

const UserPurchaseSchema = new mongoose.Schema({
    goodsName: {
        type: String,
        required: [true, "Please add Goods Name"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Amount"]
    }
})

module.exports =mongoose.model('UserPurchase', UserPurchaseSchema)