const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    date: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        requied: true
    },
    open: {
        type: Number,
        required: true
    },
    high: {
        type: Number,
        required: true
    },
    low: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('quotes', QuoteSchema);
