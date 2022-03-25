const express=require('express');
require('dotenv').config();
const mongoose= require('mongoose');


const app=express()

app.get('/',(req,res)=>{
    return res.json({ message : "Hello from the server"})
})


mongoose.connect(process.env.DB_CONNECTION,(error)=>{
    if (error){
        console.log('Could not connect to the Database');
        console.log(error.message);
        return;
    }
    console.log('Coonection established with success');
    const PORT= process.env.PORT
    app.listen(PORT,()=>{
        console.log(`The server is running on port ${PORT}`);
    })
})



