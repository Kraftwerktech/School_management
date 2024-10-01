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
    role: {
        type: String,
        default: 'teacher'
    }
}, {
    timestamps: true
});

module.exports = model('Teacher', teacherSchema);
