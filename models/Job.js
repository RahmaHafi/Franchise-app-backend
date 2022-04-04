const {Schema,model} = require('mongoose')


const jobSchema = new Schema({

    jobTitle:{
        type:String,
        required:true
    },
    publishedOn : String,
    company:{
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    postalCode : Number,
    contact :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    experience :String,
    description : {
        type:String,
        required:true
    },
    requiredSkills :{
        type:String,
        required:true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports=model('Job',jobSchema)