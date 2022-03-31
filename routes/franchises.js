const express = require('express')
const {createFranchise, getAllFranchise, updateFranchise, deleteFranchise, getSinglfranchise} = require('../controllers/franchises')


const router= express.Router()

router.get('/', getAllFranchise)
router.post('/', createFranchise)
router.put('/:id', updateFranchise)
router.delete('/:id', deleteFranchise)
router.get('/:id', getSinglfranchise)


module.exports = router