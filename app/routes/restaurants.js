var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/restaurants', function(req, res, next) {
  res.send('hola que ase');
});

module.exports = router;