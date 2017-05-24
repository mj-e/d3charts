const moment = require('moment');

module.exports = function insertTimeStamp(arr) {
    
    return arr.map((elem) => {
        const ts = moment(elem.date + ' ' + elem.time , 'M/D/YYYY H:mm').unix();
        return elem.timestamp = ts;
    });
};