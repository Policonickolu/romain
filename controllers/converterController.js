var converter = require('../helpers/converter')

// Get converter form
exports.index = function(req, res) {
  res.sseSetup()
  res.sseSend("")
}

// Get converter form 
exports.convert = function(req, res) {

  var roman = ""

  if(req.params.arabic){
    req.checkParams('arabic', 'Nécessite un nombre entier entre 1 et 100')
        .notEmpty().isInt( {gt: 0, lt: 101} )

    req.sanitize('arabic').trim()
    req.sanitize('arabic').escape()

    var errors = req.validationErrors()

    roman = converter.arabic_to_roman(req.params.arabic)
  }

  res.sseSetup()
  if(errors) {
    res.sseSend({ errors: errors })
  } else {  
    res.sseSend({ success: roman })
  }

}