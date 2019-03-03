var express = require('express');
var router = express.Router();
var reviewsController = require('../controllers/reviewsController')
/* GET users listing. */
router.get('/', reviewsController.getAll);
router.get('/:id', reviewsController.get);
router.post('/create', reviewsController.post);
router.put('/update/:id', reviewsController.put);
router.delete('/delete/:id', reviewsController.delete);

module.exports = router;