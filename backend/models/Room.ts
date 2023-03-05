const { Decimal128 } = require('mongoose')
const Guess = require('../schemas/Guess')
const mongoose = require('mongoose')

const RoomSchema = mongoose.Schema({
    room_name: {
        type: String
    },
    team1_guesses: {
        type: [Guess]
    },
    team2_guesses: {
        type: [Guess]
    },
    room_id: {
        type: String
    },
    team1_users: {
        type: [String] //change to UserSchema later
    },
    team2_users: {
        type: [String]
    },
    guessed: {
        type: Number
    },
    started: {
        type: Boolean
    },
    team1_health: {
        type: Number
    },
    team2_health: {
        type: Number
    },
    location: {
        lat: {
            type: Number,
            default: 0
        },
        lng: {
            type: Number,
            default: 0
        }
    }
})

export default mongoose.model('Rooms', RoomSchema)