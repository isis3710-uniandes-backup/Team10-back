var express = require('express');
var router = express.Router();
var restaurantsController = require('../controllers/restaurantsController')
/* GET users listing. */
router.get('/', restaurantsController.getAll);
router.get('/:id', restaurantsController.getRestaurant);
router.post('/create', restaurantsController.createRestaurant);
router.put('/update/:id', restaurantsController.updateRestaurant);
router.delete('/delete/:id', restaurantsController.deleteRestaurant);

module.exports = router;