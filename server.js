require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const streamsController = require('./controllers/streams-router.js')
const mongoURI = process.env.mongoURI
const PORT = process.env.PORT || 3000

//DATABASE CONNECTION
mongoose.connect(mongoURI + 'smokytrout')
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/smokytrout', streamsController)


//PORT
app.listen(PORT, () => {
    console.log('listening on port 3000')
})