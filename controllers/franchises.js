
const { find } = require('../models/Franchise')
const Franchise= require('../models/Franchise')

const getAllFranchise=async(req,res)=>{
    try {
        const franchises= await Franchise.find()
        res.status(200).json(franchises)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createFranchise = async (req, res) => {  
      
    const reqBody = req.body
   
    try {
        const franchise = new Franchise(reqBody)
        const savedFranchise = await franchise.save()
        res.status(201).json({
            message: 'Item created successfully',
            franchise: savedFranchise
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports={
    getAllFranchise,
    createFranchise
}