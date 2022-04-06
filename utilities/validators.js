const Joi = require('joi')

const franchiseValidator = Joi.object({
    basicFranchiseInfo: {
        franchiseLogoUrl: Joi.string().min(2).max(70).required(),
        franchiseName: Joi.string().min(2).max(70).required(),
        Sector: Joi.string().required(),
        yearOfCreation: Joi.number(),
        numberOfUnities: Joi.number()
    },
    contactDetails: {
        adress: Joi.string().min(2).max(70),
        country: Joi.string().min(2).max(70).required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
        webSiteUrl: Joi.string().required(),
        capital: Joi.string(),
        commercialRegister: Joi.string(),
        yearOfCreationOfTheNetwork: Joi.number()
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
    accessToTheNetwork: {
        contractDuration: Joi.number(),
        entranceFees: Joi.number(),
        directRoyalties: Joi.number(),
        indirectRoyalties: Joi.number(),
        otherBonds: Joi.string(),
        offeredTrainingDuration: Joi.number()
    }
})
const updateFranchiseValidator = Joi.object({
    basicFranchiseInfo: {
        franchiseLogoUrl: Joi.string().min(2).max(70),
        franchiseName: Joi.string().min(2).max(70),
        Sector: Joi.string(),
        yearOfCreation: Joi.number(),
        numberOfUnities: Joi.number()
    },
    contactDetails: {
        adress: Joi.string().min(2).max(70),
        country: Joi.string().min(2).max(70),
        phone: Joi.number(),
        email: Joi.string().email(),
        webSiteUrl: Joi.string(),
        capital: Joi.string(),
        commercialRegister: Joi.string(),
        yearOfCreationOfTheNetwork: Joi.number()
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
    accessToTheNetwork: {
        contractDuration: Joi.number(),
        entranceFees: Joi.number(),
        directRoyalties: Joi.number(),
        indirectRoyalties: Joi.number(),
        otherBonds: Joi.string(),
        offeredTrainingDuration: Joi.number()
    }
})

const registerValidator = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    role: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.string()).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/).required(),
})
const loginValidator = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})

const expertValidator = Joi.object({
    fullName:Joi.string().min(2).max(70).required(),
    adress:Joi.string(),
    phone:Joi.number().required(),
    email:Joi.string().email().required(),
    webSite:Joi.string(),
    activities:Joi.string(),
    title:Joi.string().min(2).max(70).required(),
    structureOfTheOffice: Joi.string(),
    description:Joi.string().min(2).required()
}) 
const expertUpdateValidator = Joi.object({
    fullName:Joi.string().min(2).max(70),
    adress:Joi.string(),
    phone:Joi.number(),
    email:Joi.string().email(),
    webSite:Joi.string(),
    activities:Joi.string(),
    title:Joi.string().min(2).max(70),
    structureOfTheOffice: Joi.string(),
    description:Joi.string().min(2)
}) 

const jobValidator = Joi.object({
    jobTitle:Joi.string().min(2).required(),
    publishedOn : Joi.string(),
    company:Joi.string().min(2).required(),
    city:Joi.string().min(2).required(),
    postalCode :Joi.number(),
    contact :Joi.string().min(2).required(),
    email :Joi.string().email().required(),
    experience :Joi.string(),
    description :Joi.string().min(2).required(),
    requiredSkills :Joi.string().min(2).required()
})
const jobUpdateValidator = Joi.object({
    jobTitle:Joi.string().min(2).required(),
    publishedOn : Joi.string(),
    company:Joi.string().min(2).required(),
    city:Joi.string().min(2).required(),
    postalCode :Joi.number(),
    contact :Joi.string().min(2).required(),
    email :Joi.string().email().required(),
    experience :Joi.string(),
    description :Joi.string().min(2).required(),
    requiredSkills :Joi.string().min(2).required()
})

const messageValidator = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string(),
    email:Joi.string().email().required(),
    phoneNumber: Joi.number().required(),
    subject: Joi.string().min(2).required(),
    content:Joi.string().min(2).required(),
    franchise: Joi.string().required()
})



module.exports = {
    franchiseValidator,
    updateFranchiseValidator,
    registerValidator,
    loginValidator,
    expertValidator,
    expertUpdateValidator,
    jobValidator,
    jobUpdateValidator,
    messageValidator
}