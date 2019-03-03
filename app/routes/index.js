var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/history_restaurants', function(req, res, next) {
  res.render('history_restaurants', { title: 'Express' });
});

router.get('/zone_restaurants', function(req, res, next) {
  res.render('zone_restaurants', { title: 'Express' });
});

router.get('/clients', function(req, res, next) {
  res.render('clients', { title: 'Express' });
});
module.exports = router;
