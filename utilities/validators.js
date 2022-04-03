const Joi = require('joi')

const franchiseValidator = Joi.object({
    basicFranchiseInfo: {
        franchiseLogoUrl:Joi.string().min(2).max(70).required(), 
        franchiseName: Joi.string().min(2).max(70).required(),
        Sector:Joi.string().required(),
        yearOfCreation: Joi.number(),
        numberOfUnities:Joi.number()
    },
    contactDetails: {
        adress: Joi.string().min(2).max(70),
        country:Joi.string().min(2).max(70).required(),
        phone:Joi.number().required(),
        email:Joi.string().email().required(),
        webSiteUrl:Joi.string().required(),
        capital: Joi.string(),
        commercialRegister: Joi.string(),
        yearOfCreationOfTheNetwork:Joi.number()
    },
    typicalFranchisee: {
        populationOfCatchment: Joi.string(),
        locationQuality: Joi.string(),
        averageStoreArea: Joi.number(),
        annualTurnover: Joi.number(),
        personalContribution: Joi.number(),
        investment: Joi.number(),
        profile: Joi.string()

    },
    accessToTheNetwork:{
        contractDuration:Joi.number(),
        entranceFees:Joi.number(),
        directRoyalties:Joi.number(),
        indirectRoyalties:Joi.number(),
        otherBonds:Joi.string(),
        offeredTrainingDuration:Joi.number()
    }
})
const  updateFranchiseValidator= Joi.object({
    basicFranchiseInfo: {
        franchiseLogoUrl:Joi.string().min(2).max(70), 
        franchiseName: Joi.string().min(2).max(70),
        Sector:Joi.string(),
        yearOfCreation: Joi.number(),
        numberOfUnities:Joi.number()
    },
    contactDetails: {
        adress: Joi.string().min(2).max(70),
        country:Joi.string().min(2).max(70),
        phone:Joi.number(),
        email:Joi.string().email(),
        webSiteUrl:Joi.string(),
        capital: Joi.string(),
        commercialRegister: Joi.string(),
        yearOfCreationOfTheNetwork:Joi.number()
    },
    typicalFranchisee: {
        populationOfCatchment: Joi.string(),
        locationQuality: Joi.string(),
        averageStoreArea: Joi.number(),
        annualTurnover: Joi.number(),
        personalContribution: Joi.number(),
        investment: Joi.number(),
        profile: Joi.string()

    },
    accessToTheNetwork:{
        contractDuration:Joi.number(),
        entranceFees:Joi.number(),
        directRoyalties:Joi.number(),
        indirectRoyalties:Joi.number(),
        otherBonds:Joi.string(),
        offeredTrainingDuration:Joi.number()
    }
})



module.exports= {
    franchiseValidator,
    updateFranchiseValidator
}