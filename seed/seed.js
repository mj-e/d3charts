const mongoose = require('mongoose');
const quoteArray = require('../helpers/csvObject');
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
    quoteArray.forEach(function (quote) {
        var quoteDoc = new QuoteDoc(quote);
        quoteDoc.save(function (err) {
            if (err) {
                console.log(err);
                logger.error('DB ERROR');
                process.exit();
            }
            logger.info('DONE SEEDING!!');
            process.exit();
        });
    });
});