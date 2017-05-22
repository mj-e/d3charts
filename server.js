if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiRouter = require('./routes/routes');
const DB = 'mongodb://localhost/fx-live';

mongoose.Promise = global.Promise;

mongoose.connect(DB, function (err) {
    if (!err) {
        console.log(`Connected to the database: ${DB}`);
    } else {
        console.log(`Error connecting to the Database ${err}`);
    }
});

app.use('/', apiRouter);

app.use('/*', function (request, response) {
    response.status(404).send({ reason: 'ROUTE NOT FOUND' });
});

app.listen(3000, function (err) {
    if (err) return console.log('App not listening');
     console.log('listening on port 3000');
});

app.use(function (error, request, response) {
  return response.status(500).send({error: error});
});