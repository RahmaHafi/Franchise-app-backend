const { Schema, model } = require('mongoose')


const messageSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    // receiverId:String
    franchise: {
        type: Schema.Types.ObjectId,
        ref: 'Franchise',
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = model('Message', messageSchema)