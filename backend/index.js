const express = require('express')
const app = express()
const mongoose = require('mongoose')
const eventRoute = require('./Routes/eventRoute')


app.use(express.json())

app.use(eventRoute)

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://preritagrawal:QlieuOq9wOUEf6Ge@cluster0.r5nqzmq.mongodb.net/events?retryWrites=true&w=majority')
    .then(()=>{
        app.listen(8000, ()=>{
            console.log("connected to db")
        })
    })
    .catch((err)=>{console.log(err)})