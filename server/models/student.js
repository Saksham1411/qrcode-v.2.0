const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollNo: {
        type: Number,
        required: true,
        unique:true,
    },
    allowed: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model("Students", studentSchema);