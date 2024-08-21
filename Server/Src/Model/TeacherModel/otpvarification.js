const { Schema, model } = require('mongoose')

const teacherotpvarificationSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    otp: {
        type: String,
    },
   createdAt: {
    type: Date
   },
   expiresAt:{
    type: Date
   }
})

module.exports = model('teacherotp',teacherotpvarificationSchema)