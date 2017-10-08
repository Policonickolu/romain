var converter = require('../helpers/converter');

// Get converter form 
exports.convert = function(req, res) {
  console.log("yo");
  req.checkBody('arabic_numerals', 'Nécessite un nombre entier entre 1 et 100')
      .notEmpty().isInt( {gt: 0, lt: 101} );

  req.sanitize('arabic_numerals').trim();
  req.sanitize('arabic_numerals').escape();

  var errors = req.validationErrors();

  var roman = converter.arabic_to_roman(req.body.arabic_numerals);

  if(errors) {
    res.render('index', { arabic_numerals: req.body.arabic_numerals, errors: errors });
  } else {  
    res.render('index', { arabic_numerals: req.body.arabic_numerals, roman_numerals: roman});
  }
  
};