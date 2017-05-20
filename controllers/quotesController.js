const quoteModel = require('../models/quotes.js');
const async = require('async');

function getClose (req, res) {
    quoteModel.findAll(req.quote.close, function (err, quotes) {
        if (err) return err;
        res.status(200).send({ quotes: quotes});
    });
}

module.exports = getClose;