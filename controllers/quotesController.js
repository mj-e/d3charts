const quoteModel = require('../models/quotes.js');

function getAllQuotes(req, res) {
    quoteModel.find({}, function (err, quotes) {
        if (err) {
            return res.status(500).send({ error: err });
        }
        res.status(200).send({ quotes: quotes });
    });
}

function getClose(req, res) {
    quoteModel.find({}, { 'symbol': 1, 'date': 1, 'time': 1, 'close': 1, '_id': 0 }, function (err, quotes) {
        if (err) {
            return res.status(500).send({ error: err });
        }
        res.status(200).send({ quotes: quotes });
    });
}

function getOpen(req, res) {
    quoteModel.find({}, { 'symbol': 1, 'date': 1, 'time': 1, 'open': 1, '_id': 0 }, function (err, quotes) {
        if (err) {
            return res.status(500).send({ error: err });
        }
        res.status(200).send({ quotes: quotes });
    });
}

function getHigh(req, res) {
    quoteModel.find({}, { 'symbol': 1, 'date': 1, 'time': 1, 'high': 1, '_id': 0 }, function (err, quotes) {
        if (err) {
            return res.status(500).send({ error: err });
        }
        res.status(200).send({ quotes: quotes });
    });
}

function getLow(req, res) {
    quoteModel.find({}, { 'symbol': 1, 'date': 1, 'time': 1, 'low': 1, '_id': 0 }, function (err, quotes) {
        if (err) {
            return res.status(500).send({ error: err });
        }
        res.status(200).send({ quotes: quotes });
    });
}
module.exports = {
    getAllQuotes: getAllQuotes,
    getClose: getClose,
    getOpen: getOpen,
    getHigh: getHigh,
    getLow: getLow
};