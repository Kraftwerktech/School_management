const { Schema, model } = require('mongoose');

const teacherSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    subjectName: {
        type: String,
        required: true
    },
    assingclass: {
        type: String,
        required: true
    },
    joiningDate: {
        type: String
    },
    bloodgroup: {
        type: String
    },
    address: {
        type: String
    },
    education: {
        type: String
    },
    designation: {
        type: String
    },
    nid: {
        type: String
    },
    image: {
        type: String
    },
    role: {
        type: String,
        default: 'teacher'
    }
}, {
    timestamps: true
});

module.exports = model('Teacher', teacherSchema);
