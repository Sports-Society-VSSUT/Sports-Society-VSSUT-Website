const express = require('express')
const app = express()
const mongoose = require('mongoose')
const eventRoute = require('./Routes/eventRoute')
const cors = require('cors')
const dotenv = require('dotenv').config()
const http = require('http')
const {Server} = require('socket.io')


const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

app.use(cors())
app.use(express.json())
app.use(eventRoute)

io.on('connection', (socket)=>{
    socket.emit('connection-done')
    socket.on('update score', (data)=>{
        //console.log(data)
        io.emit("live-score", data)
    })
    socket.on("end game", ()=>{
        io.emit("close score")
    })
})

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB)
    .then(()=>{
        app.listen(8000, ()=>{
            console.log("connected to db")
        })
    })
    .catch((err)=>{console.log(err)})

server.listen(5000, ()=>{console.log("connected to http server")})