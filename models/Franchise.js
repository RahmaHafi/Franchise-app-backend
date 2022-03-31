const { Schema, model } = require('mongoose')


const franchiseSchema = new Schema({
    basicFranchiseInfo: {
        franchiseLogoUrl:{
            type: String,
            required : true
        }, 
        franchiseName: {
            type: String,
            required : true
        },
        Sector: {
            type: String,
            required: true
        },
        yearOfCreation: Number,
        numberOfUnities: Number
    },
    contactDetails: {
        adress: String,
        country: {
            type: String,
            required : true
        },
        phone: {
            type: Number,
            required : true
        },
        email: {
            type: String,
            required : true
        },
        webSiteUrl: {
            type: String,
            required : true
        },
        capital: Number,
        commercialRegister: String,
        yearOfCreationOfTheNetwork: Number
    },
    typicalFranchisee: {
        populationOfCatchment: String,
        locationQuality: String,
        averageStoreArea: Number,
        annualTurnover: Number,
        personalContribution: Number,
        investment: Number,
        profile: String

    },
    accessToTheNetwork:{
        contractDuration:Number,
        entranceFees:Number,
        directRoyalties:Number,
        indirectRoyalties:Number,
        otherBonds:String,
        offeredTrainingDuration:Number
    }
})


module.exports = model('Franchise', franchiseSchema)