const express = require('express')
const app = express()
const mongoose = require('mongoose')
const eventRoute = require('./Routes/eventRoute')
const cors = require('cors')
const dotenv = require('dotenv').config()

app.use(cors())

app.use(express.json())

app.use(eventRoute)

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB)
    .then(()=>{
        app.listen(8000, ()=>{
            console.log("connected to db")
        })
    })
    .catch((err)=>{console.log(err)})