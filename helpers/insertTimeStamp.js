const moment = require('moment');

function insertTimeStamp(arr) {

    function switchDayMonth(date) {
        const splitDate = date.split('/');
        return `${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`;
    }

    for (var i = 0; i < arr.length; i++) {
        const ts = moment(switchDayMonth(arr[i].date) + ' ' + arr[i].time, 'M/D/YYYY H:mm').unix();
        arr[i].timestamp = ts;
    }
    return arr;
}