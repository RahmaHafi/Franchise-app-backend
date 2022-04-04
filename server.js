const express=require('express');
require('dotenv').config();
const mongoose= require('mongoose');
const cors= require('cors');


const franchisesRouter=require('./routes/franchises');
const usersRouter= require('./routes/users')
const jobsRouter = require('./routes/jobs')



const app=express()
app.use(cors({ credentials: true, origin: [process.env.WEB_APP_URL] }))
app.use(express.json())



app.get('/',(req,res)=>{
    return res.json({ message : "Hello from the server"})
})

app.use('/franchises',franchisesRouter)
app.use('/auth', usersRouter)
app.use('/jobs', jobsRouter)



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



