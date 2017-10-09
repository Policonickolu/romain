var express = require('express')
var router = express.Router()

var converter_controller = require('../controllers/converterController')

router.get('/:arabic', converter_controller.convert)

module.exports = router
