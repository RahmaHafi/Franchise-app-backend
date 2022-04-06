
const Job= require('../models/Job')

const {jobValidator,jobUpdateValidator} = require('../utilities/validators')


const getAllJobs = async(req,res)=>{
    
    try {
        const jobs= await Job.find()
        res.status(200).json(jobs)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createJob = async (req, res) => {  
      const reqBody =  req.body
      const validationResult = jobValidator.validate(reqBody,{ abortEarly: false})
      if (validationResult.error) {
          return res.json(validationResult)
      }
    try {
        const job= new Job({...reqBody, user : req.user._id})
        const savedJob = await job.save()
        res.status(201).json({
            message: 'Job created successfully',
            job: savedJob
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateJob= async(req,res)=>{
    const reqBody= req.body
    const {id}= req.params
    const validationResult = jobUpdateValidator.validate(reqBody,{ abortEarly: false})
    if (validationResult.error) {
        return res.json(validationResult)
    }
    try {
        const jobToUpdate= await Job.findOneAndUpdate({_id:id, user:req.user._id},{$set: reqBody},{new: true})
        if (!jobToUpdate){
            return res.status(404).json({error: "Job not found"})
        }
        return res.json({
            message: "Job updated successfully",
            jobToUpdate
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
const deleteJob= async(req,res)=>{
    const {id}= req.params
    try {
        const jobToDelete= await Job.findOneAndDelete({_id:id,user:req.user._id})
        if (!jobToDelete){
            return res.status(404).json({error: "Job not found"})
        }
        return res.json({
            message: "Job deleted successfully",  
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
}
const getSinglJob= async(req,res)=>{
    const {id}= req.params
    try {
        const jobToGet= await Job.findById({_id:id})
        if (!jobToGet){
            return res.status(404).json({error: "Job not found"})
        }
        return res.json({jobToGet})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}



module.exports={
    getAllJobs,
    createJob,
    updateJob,
    deleteJob,
    getSinglJob
}