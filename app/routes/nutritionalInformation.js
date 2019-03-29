var express = require('express');
var router = express.Router();
var nutritionalInformationController = require('../controllers/nutritionalInformationController');

/* GET users listing. */
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', nutritionalInformationController.getAll);
router.get('/:id', nutritionalInformationController.get);
router.post('/create', nutritionalInformationController.post);
router.put('/update/:id', nutritionalInformationController.put);
router.delete('/delete/:id', nutritionalInformationController.delete);

module.exports = router;