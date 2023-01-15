const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    event: {
        type: String,
        required: true
    },
    teamA: {
        type: String,
        required: true,
        default: 'none'
    },
    teamB: {
        type: String,
        required: true,
        default: 'none'
    },
    scoreA: {
        type: String,
        required: true,
        default: '0'
    },
    scoreB: {
        type: String,
        required: true,
        default:'0'
    }
})

module.exports = mongoose.model('Events', eventSchema)