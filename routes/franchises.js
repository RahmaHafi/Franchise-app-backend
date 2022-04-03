const express = require('express')
const {createFranchise, getAllFranchise, updateFranchise, deleteFranchise, getSinglfranchise} = require('../controllers/franchises')
const checkAuth =require('../middlewares/check-auth')
const checkAdmin= require('../middlewares/check-admin')

const router= express.Router()

router.get('/', getAllFranchise)
router.post('/',checkAuth,checkAdmin,createFranchise)
router.put('/:id',checkAuth, updateFranchise)
router.delete('/:id',checkAuth, deleteFranchise)
router.get('/:id', getSinglfranchise)


module.exports = router