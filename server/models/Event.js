const { request } = require('express');
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    name:{
        type:String,
        required:true,
        maxLength:20,
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    code:{
        type:Number,
        required:true,
        unique:true
    }
},{timestamps:true});

module.exports = mongoose.model("Event",eventSchema);