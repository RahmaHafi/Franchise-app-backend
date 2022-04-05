const jwt= require('jsonwebtoken')

const User = require('../models/User')


module.exports= async (req,res,next)=>{

    const token = req.headers.authorization
    if (!token){
        return next()
    }
    try {
        const verifiedAndDecoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = verifiedAndDecoded.userId
        const user = await User.findById(userId)
        req.user= user
        next()
        
    } catch (error) {
      res.status(500).json({error: "Invalid /Expired token"}) 
    }

}