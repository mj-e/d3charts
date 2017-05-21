const mongoose = require('mongoose');
const quoteData = require('../data/USDJPY,D1');
const QuoteDoc = require('../models/quotes');
var log4js = require('log4js');
var logger = log4js.getLogger();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/fx-live', function (err) {
    if (err) {
        logger.error(err);
        return process.exit();
    }
    logger.info('connected to mongo database');
    mongoose.connection.db.dropDatabase();
    quoteData.forEach(function (quote, i) {
        var quoteDoc = new QuoteDoc(quote);
        quoteDoc.save(function (err) {
            if (err) {
                logger.error('DB ERROR');
                process.exit();
            }
            logger.info('DONE SEEDING!!');
            process.exit();
        });
    });
});