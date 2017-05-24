var fs = require('fs');
var csv = require('fast-csv');
var stream = fs.createReadStream('csv/EURUSD,D1.csv');

var quoteArray = [];

csv.fromStream(stream, { headers: true })
    .on('data', function (data) {
        quoteArray.push(data);
    })
    .on('end', function () {
        console.log(quoteArray);
        console.log('End of parsing');
    });

module.exports = quoteArray;