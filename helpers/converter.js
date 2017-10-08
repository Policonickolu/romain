const arabic_ar = [100, 99, 95, 90, 50, 49, 45, 40, 10, 9, 5, 4, 1];
const roman_ar = ['C', 'IC', 'VC', 'XC', 'L', 'IL', 'VL', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

// Convert arabic numerals to roman numerals
exports.arabic_to_roman = function(number) {
  
  var arabic = parseInt(number);
  var roman = '';
  var i = 0;

  while(arabic > 0){
    if(arabic - arabic_ar[i] >= 0) {
      arabic -= arabic_ar[i];
      roman += roman_ar[i];
    }else{
      i++;
    }
  }

  return roman;
};