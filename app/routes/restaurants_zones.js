var express = require('express');
var router = express.Router();
var restaurantsController = require('../controllers/restaurantsZonesController');

/* GET users listing. */
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', restaurantsController.getAll);
router.get('/:id', restaurantsController.get);
router.post('/create', restaurantsController.post);
router.put('/update/:id', restaurantsController.put);
router.delete('/delete/:id', restaurantsController.delete);

module.exports = router;