const jwt= require('jsonwebtoken')

const User = require('../models/User')


module.exports= async (req,res,next)=>{

    const token = req.headers.authorization
    if (!token){
        return res.status(401).json({error: "No token provided, Access denied"})
    }
    try {
        const verifiedAndDecoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log({verifiedAndDecoded})
        const userId = verifiedAndDecoded.userId
        const user = await User.findById(userId)
        req.user= user
        next()
        
    } catch (error) {
      res.status(500).json({error: "Invalid /Expired token"}) 
    }

}