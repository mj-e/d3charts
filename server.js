if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const apiRouter = require('./routes/routes');

const DB = config.DB[process.env.NODE_ENV] || process.env.DB;
const PORT = config.PORT[process.env.NODE_ENV] || process.env.PORT;

mongoose.Promise = global.Promise;

mongoose.connect(DB, function (err) {
    if (!err) {
        console.log(`connected to the Database: ${DB}`);
    } else {
        console.log(`error connecting to the Database ${err}`);
    }
});

app.use(bodyParser.json());
app.use('/', apiRouter);

app.get('/', function (req, res) {
    res.sendFile('index.html', {'root': __dirname});
});

app.listen(PORT, function (err) {
    if (err) return console.log('App not listening');
     console.log(`listening on port ${PORT}`);
});