const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide vaild emial'],
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role:{
        type:String,
        enum:["ADMIN","USER"],
        default:"USER",
    }
}, { timestamps: true });

UserSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

UserSchema.methods.createJWT = function () {
    return jwt.sign(
        { userId: this._id, name: this.fullName,email:this.email,role:this.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_LIFETIME }
    )
}

UserSchema.methods.camparePassword = async function(userPassword){
    const isMatch = bcrypt.compare(userPassword,this.password);
    return isMatch;
}


module.exports = mongoose.model("User", UserSchema);