// Database Connection

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/UMS')

//express setup

const express = require('express')
const app = express()




//user routes
const userRoute=require('./routes/userRoutes')
app.use('/',userRoute)

//server setup at port 3000
app.listen(3000, () => {

    console.log('server is running')
})