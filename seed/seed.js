const mongoose = require('mongoose');
const quoteArray = require('../helpers/csvToObjects');
const QuoteDoc = require('../models/quotes');
const log4js = require('log4js');
const logger = log4js.getLogger();
const DB = 'mongodb://localhost/fx-live';

mongoose.Promise = global.Promise;

mongoose.connect(DB, function (err) {
    if (err) {
        logger.error(err);
        return process.exit();
    }
    logger.info(`Connected to ${DB}`);
    mongoose.connection.db.dropDatabase();
    quoteArray.forEach(function (quote) {
        console.log(quote);
        
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