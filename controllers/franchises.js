

const Franchise= require('../models/Franchise')
const {franchiseValidator,updateFranchiseValidator} = require('../utilities/validators')

const getAllFranchise=async(req,res)=>{
    
    try {
        const franchises= await Franchise.find().populate('user')
        res.status(200).json(franchises)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createFranchise = async (req, res) => {  
      
    const reqBody = req.body
    const validationResult = franchiseValidator.validate(reqBody,{ abortEarly: false})
    if (validationResult.error) {
        return res.status(401).json(validationResult)
    }
    try {
        const franchise = new Franchise({...reqBody, user : req.user._id})
        const savedFranchise = await franchise.save()
        res.status(201).json({
            message: 'Franchise created successfully',
            franchise: savedFranchise
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const updateFranchise= async(req,res)=>{
    const reqBody= req.body
    const validationResult = updateFranchiseValidator.validate(reqBody,{ abortEarly: false})
    if (validationResult.error) {
        return res.json(validationResult)
    }
    const {id}= req.params
    try {
        const franchiseToUpdate= await Franchise.findOneAndUpdate({_id:id, user:req.user._id},{$set: reqBody},{new: true})
        if (!franchiseToUpdate){
            return res.status(404).json({error: "Franchise not found"})
        }
        return res.json({
            message: "Franchise updated successfully",
            franchiseToUpdate
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
const deleteFranchise= async(req,res)=>{
    const {id}= req.params
    try {
        const franchiseToDelete= await Franchise.findOneAndDelete({_id:id,user:req.user._id})
        if (!franchiseToDelete){
            return res.status(404).json({error: "Franchise not found"})
        }
        return res.json({
            message: "Franchise deleted successfully",  
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
}
const getSinglfranchise= async(req,res)=>{
    const {id}= req.params
    try {
        const franchiseToGet= await Franchise.findById({_id:id})
        if (!franchiseToGet){
            return res.status(404).json({error: "Franchise not found"})
        }
        return res.json({franchiseToGet})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}



module.exports={
    getAllFranchise,
    createFranchise,
    updateFranchise,
    deleteFranchise,
    getSinglfranchise
}