const { Schema, model } = require('mongoose');

const CreateSyllabus = new Schema({
    subject: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    Lesson_no: {
        type: String,
        required: true
    },
    resources: {
        type: String,
        required: true,
        select: false
    },
    Chaptername: {
        type: String,
        required: true
    },
    pageno: {
        type: String,
        required: true
    },
    tropictitle: {
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
