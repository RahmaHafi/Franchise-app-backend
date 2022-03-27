const express = require('express')
const {createFranchise, getAllFranchise} = require('../controllers/franchises')


const router= express.Router()

router.get('/', getAllFranchise)
router.post('/create-franchise', createFranchise)


module.exports = router