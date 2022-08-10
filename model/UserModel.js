const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        index: true,
    },
    lastName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        index: true,
    },
    regNo: {
        type: String,
        required: true,
        min: 13,
        unique: true,
        index: true,
    },
    college: {
        type: String,
        required: true,
        index: true,
    },
    course: {
        type: String,
        required: true,
        index: true,
    },
    password:{
        type: String,
        required: true,
        min: 8,
    },
    picture: {
        type: String,
    },
})


module.exports=mongoose.model("Users",userSchema);
