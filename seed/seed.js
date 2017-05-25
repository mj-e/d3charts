const mongoose = require('mongoose');
const moment = require('moment');
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

    insertTimeStamp(quoteArray)
    .forEach(function (quote) {
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


function insertTimeStamp(arr) {

    function switchDayMonth(date) {
        const splitDate = date.split('/');
        return `${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`;
    }

    for (var i = 0; i < arr.length; i++) {
        const ts = moment(switchDayMonth(arr[i].date) + ' ' + arr[i].time, 'M/D/YYYY H:mm').unix();
        arr[i].timestamp = ts;
        arr[i].open = Number(arr[i].open);
        arr[i].high = Number(arr[i].high);
        arr[i].low = Number(arr[i].low);
        arr[i].close = Number(arr[i].close);
        arr[i].volume = Number(arr[i].volume);
    }
    return arr;
}