const express = require("express")
const { registerUser, userLogin } = require('../controllers/user.controller')
const { registerRules, validator } = require("../middlewares/validator")


const Router = express.Router()

Router.post('/register', registerRules(), validator, registerUser)
Router.post('/login', userLogin)

module.exports = Router