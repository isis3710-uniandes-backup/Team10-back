var express = require('express');
var router = express.Router();
var dishesController = require('../controllers/clientsController');

/* GET users listing. */
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', dishesController.getAll);
router.get('/:id', dishesController.get);
router.post('/create', dishesController.post);
router.put('/update/:id', dishesController.put);
router.delete('/delete/:id', dishesController.delete);

module.exports = router;