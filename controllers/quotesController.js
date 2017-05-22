const quoteModel = require('../models/quotes.js');

function getClose(req, res) {
    quoteModel.find({}, { 'symbol': 1, 'close': 1, '_id': 0 }, function (err, quotes) {
        if (err) {
            return res.status(500).send({ error: err });
        }
        res.status(200).send({ quotes: quotes });
    });
}

module.exports = { getClose: getClose };