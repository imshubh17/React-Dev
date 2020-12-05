import mongoose, { connect } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        min:4,
        max:50
    },
    lastName:{
        type: String,
        required: true,
        min:4,
        max:20
    },
    email: {
        type: String,
        required: true,
        max: 200,
        min:6
    },
    password: {
        type: String,
        required: true,
        max: 15,
        min:5
    },
    date: {
        type : Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);