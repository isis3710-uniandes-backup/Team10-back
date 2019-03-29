var express = require('express');
var router = express.Router();
var promotionsController = require('../controllers/promotionsController');

/* GET users listing. */
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', promotionsController.getAll);
router.get('/:id', promotionsController.get);
router.post('/create', promotionsController.post);
router.put('/update/:id', promotionsController.put);
router.delete('/delete/:id', promotionsController.delete);

module.exports = router;