var express = require('express');
var router = express.Router();
var favoriteDishesController = require('../controllers/favoriteDishesController');

/* GET users listing. */
router.get('/', favoriteDishesController.getAll);
router.get('/:id', favoriteDishesController.get);
router.post('/create', favoriteDishesController.post);
router.put('/update/:id', favoriteDishesController.put);
router.delete('/delete/:id', favoriteDishesController.delete);

module.exports = router;