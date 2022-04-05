const Expert = require('../models/Expert')

const getAllExperts =async(req,res)=>{
    
    try {
        const experts= await Expert.find()
        res.status(200).json(experts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createExpert = async (req, res) => {  
      
    const reqBody = req.body
    try {
        const expert = new Expert({...reqBody, user : req.user._id})
        const savedExpert = await expert.save()
        res.status(201).json({
            message: 'Expert created successfully',
            expert: savedExpert 
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateExpert= async(req,res)=>{
    const reqBody= req.body
    const {id}= req.params
    try {
        const expertToUpdate= await Expert.findOneAndUpdate({_id:id, user:req.user._id},{$set: reqBody},{new: true})
        if (!expertToUpdate){
            return res.status(404).json({error: "Expert not found"})
        }
        return res.json({
            message: "Expert updated successfully",
            expertToUpdate
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteExpert= async(req,res)=>{
    const {id}= req.params
    try {
        const expertToDelete= await Expert.findOneAndDelete({_id:id,user:req.user._id})
        if (!expertToDelete){
            return res.status(404).json({error: "Expert not found"})
        }
        return res.json({
            message: "Expert deleted successfully",  
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
}
const getSinglExpert= async(req,res)=>{
    const {id}= req.params
    try {
        const expertToGet= await Expert.findById({_id:id})
        if (!expertToGet){
            return res.status(404).json({error: "Expert not found"})
        }
        return res.json({expertToGet})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}



module.exports = {
    getAllExperts,
    createExpert,
    updateExpert,
    deleteExpert,
    getSinglExpert
}