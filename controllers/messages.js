
const Franchise = require('../models/Franchise')
const Message = require('../models/Message')
const {messageValidator} = require('../utilities/validators')


const sendMessage = async (req, res) => {
    const reqBody = req.body
    const validationResult = messageValidator.validate(reqBody,{ abortEarly: false})
    if (validationResult.error) {
        return res.json(validationResult)
    }
    let author = null
    if (req.user) {
        author = req.user._id
    }
    try {
        const message = new Message({...reqBody, author})
        const savedMessage = await message.save()
        res.status(201).json({
            message: 'Message sent successfully',
            infoMessage: savedMessage
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const getAllMessages = async (req, res) => {
    try {
        const userId = req.user._id
        const franchise = await Franchise.findOne({ user: userId })
        if (!franchise) {
            return res.status(400).json({ error: 'You must be a franchisor' })
        }
        console.log(`franchise._id`, franchise._id);
        const messages = await Message.find({ franchise: franchise._id })
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    sendMessage,
    getAllMessages
}