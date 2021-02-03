const mongoose  = require('mongoose');

const postSchema = mongoose.Schema({
    results: {
        type: String,
        required: true
    },
   base: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    rates: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model('Data', postSchema);