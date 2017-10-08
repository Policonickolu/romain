var express = require('express');
var router = express.Router();

var converter_controller = require('../controllers/converterController');

router.post('/converter', converter_controller.convert);

module.exports = router;
