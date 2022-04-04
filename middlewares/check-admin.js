


module.exports= async (req,res,next)=>{

   
    try {
      
       if (req.user.roles.includes("admin")){
           return  next()
       } 
       return res.status(401).json({error: "You must be an admin"})
        
    } catch (error) {
      res.status(500).json({error: "Invalid /Expired token"}) 
    }

}