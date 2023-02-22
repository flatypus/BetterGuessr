const { Decimal128 } = require('mongoose')
const mongoose = require('mongoose')

const Guess = mongoose.Schema({
    lat: {
        type: Decimal128
    },
    lng: {
        type: Decimal128
    },
    user: {
        type: String
    }

})

export default Guess