const express = require('express');
const router = express.Router();

const quoteControllers = require('../controllers/quotesControllers');

router.route('/').get(function (request, response) {
  response.status(200).send({status: 'OK'});
});

router.route('/close').get(quoteControllers.getClose);