module.exports = function warmup(temperature) {
  function convert(temperature) {
    
    var fahrenheit = (temperature * (9/5)) + 32;
  
    
    if ( typeof fahrenheit !== 'undefined' ) {
    return fahrenheit;
    } else {
      return 'fahrenheit not defined';
    }
  }
  
  convert(temperature);

};

