var express = require('express');
var router = express.Router();
var dishesController = require('../controllers/dishesController')
/* GET users listing. */
router.get('/', dishesController.getAll);
router.get('/:id', dishesController.get);
router.post('/create', dishesController.post);
router.put('/update/:id', dishesController.put);
router.delete('/delete/:id', dishesController.delete);

module.exports = router;