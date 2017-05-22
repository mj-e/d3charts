const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quotesController');

router.route('/').get(function (request, response) {
  response.status(200).send({status: 'OK'});
});

router.route('/close').get(quoteController.getClose);

router.route('/open').get(quoteController.getOpen);

router.route('/high').get(quoteController.getHigh);

router.route('/low').get(quoteController.getLow);

module.exports = router;