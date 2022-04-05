const {Router}= require('express')
const {sendMessage,getAllMessages} = require ('../controllers/messages')
const checkAuth = require('../middlewares/check-auth')
const lookForToken = require('../middlewares/look-for-token')

const router = Router()

router.post('/', lookForToken, sendMessage)
router.get('/', checkAuth, getAllMessages)


module.exports= router