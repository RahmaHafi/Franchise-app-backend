const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:String,
    role:[String],
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = model('User', userSchema)