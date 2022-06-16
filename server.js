require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connectDB')
const user = require('./routes/user')

const app = express()

app.use(express.json())

connectDB()

app.use("/user", user)

const PORT = process.env.PORT || process.env.port

app.listen(PORT, err => {
    err ? console.log(`Server connection failed`, err)
        : console.log(`The server is runnin on port ${PORT}`)
})