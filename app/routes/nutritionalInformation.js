var express = require('express');
var router = express.Router();
var nutritionalInformationController = require('../controllers/nutritionalInformationController');

/* GET users listing. */
router.get('/', nutritionalInformationController.getAll);
router.get('/:id', nutritionalInformationController.get);
router.post('/create', nutritionalInformationController.post);
router.put('/update/:id', nutritionalInformationController.put);
router.delete('/delete/:id', nutritionalInformationController.delete);

module.exports = router;