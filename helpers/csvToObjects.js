var fs = require('fs');
var csv = require('fast-csv');
var stream = fs.createReadStream('csv/EURUSD,D1.csv');
const moment = require('moment');

var quoteArray = [];

csv.fromStream(stream, { headers: true })
    .on('data', function (data) {
        quoteArray.push(data);
    })
    .on('end', function () {
        console.log('End of parsing CSV');
    });

module.exports = quoteArray;