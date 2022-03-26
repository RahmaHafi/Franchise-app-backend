const express = require('express')
const {createFranchise} = require('../controllers/franchises')


const router= express.Router()

router.post('/', createFranchise)


module.exports = router