const mongoose = require('mongoose')


const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American', 'Southwest', 'United']
    },
    flight: {
        type: Number,
        required: true,
        max : 9999,
        min : 10
    },
    departs : {
        type : Date,
        required: true
    }
})

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight