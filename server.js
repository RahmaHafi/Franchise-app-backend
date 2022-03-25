const express=require('express')
require('dotenv').config()


const app=express()

app.get('/',(req,res)=>{
    return res.json({ message : "Hello from the server"})
})





const PORT= process.env.PORT
app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`);
})