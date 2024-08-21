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
    subjectName: {
      type:String,
    },
    assingclass: {
        type:String,
      },
      joiningDate: {
        type:String,
      },
      bloodgroup: {
        type:String,
      },
      address: {
        type:String,
      },
      education: {
        type:String,
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