const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const { registerValidator, loginValidator } = require('../utilities/validators')

const registerUser = async (req, res) => {
    try {
        const validationResult = registerValidator.validate(req.body, { abortEarly: false })
        if (validationResult.error) {
            return res.status(400).json(validationResult)
        }
        const { email, password } = req.body

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                error: "An account already exist with this email"
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hachedPassword = await bcrypt.hash(password, salt)

        const user = new User({
            ...req.body,
            password: hachedPassword
        })

        const createdUser = await user.save()
        res.status(201).json({
            message: "Account created successfully",
            user: createdUser
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const loginUser = async (req, res) => {
    try {

        const validationResult = loginValidator.validate(req.body, { abortEarly: false })
        if (validationResult.error) {
            res.status(400).json(validationResult)
        }

        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                error: " Wrong mail and/or password"
            })
        }

        const passwordMatch = await bcrypt.compare(password,user.password)
        if(!passwordMatch){
            return res.status(401).json({
                error: " Wrong mail and/or password"
            })
        }

        user.password= undefined

        const token = await jwt.sign({userId: user._id},process.env.JWT_SECRET)
        res.json({
            message: `Welcome to Tuni-Franchise-App dear ${user.role}`,
            user,
            token
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    registerUser,
    loginUser
}