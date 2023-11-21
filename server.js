const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/smokytrout')
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

//MIDDLEWARE
app.use(express.urlencoded({extended: true}))

//PORT
app.listen(3000, () => {
    console.log('listening on port 3000')
})