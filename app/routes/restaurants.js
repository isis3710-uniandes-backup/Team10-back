var express = require('express');
var router = express.Router();
var restaurantsController = require('../controllers/restaurantsController')
/* GET users listing. */
router.get('/', restaurantsController.getAll);
router.get('/:id', restaurantsController.get);
router.post('/create', restaurantsController.post);
router.put('/update/:id', restaurantsController.put);
router.delete('/delete/:id', restaurantsController.delete);

module.exports = router;