var express = require('express');
var router = express.Router();
var reviewsController = require('../controllers/reviewsController')

/* GET users listing. */
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', reviewsController.getAll);
router.get('/:id', reviewsController.get);
router.post('/create', reviewsController.post);
router.put('/update/:id', reviewsController.put);
router.delete('/delete/:id', reviewsController.delete);

module.exports = router;