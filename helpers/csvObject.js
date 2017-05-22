var fs = require('fs');
var csv = require('fast-csv');
var stream = fs.createReadStream('csv/EURUSD,D1.csv');

var quoteArr = [];
var csvStream = csv
                .fromStream(stream, {headers : true})
                .on('data', function(data) {
                    quoteArr.push(data);
                })
                .on('end', function() {
                    console.log(quoteArr);
                    console.log('End of parsing');
                });