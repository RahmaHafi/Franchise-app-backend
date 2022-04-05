const express = require('express')
const { getAllExperts, createExpert, updateExpert, deleteExpert, getSinglExpert } = require('../controllers/experts')

const checkAdmin = require('../middlewares/check-admin')
const checkAuth = require('../middlewares/check-auth')

const router= express.Router()

router.get('/', getAllExperts)
router.post('/',checkAuth,checkAdmin,createExpert)
router.put('/:id',checkAuth,checkAdmin,updateExpert)
router.delete('/:id',checkAuth,checkAdmin,deleteExpert)
router.get('/:id',getSinglExpert)


module.exports = router