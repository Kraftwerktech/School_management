const { Schema, model } = require('mongoose')

const teacherSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone:{
       type: String
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    image: {
        type: String
       
    },
    role: {
        type: String,
        default: 'teacher'
    }
})

module.exports = model('teachers',teacherSchema)