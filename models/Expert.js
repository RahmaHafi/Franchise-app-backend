const {Schema,model}= require('mongoose')


const expertSchema = new Schema({
    fullName:{
        type:String,
        required: true
    },
    adress:String,
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    webSite:String,
    activities:String,
    title: {
        type:String,
        required:true
    },
    structureOfTheOffice: String,
    description:{
        type:String,
        required:true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = model('Expert',expertSchema)