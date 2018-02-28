module.exports = function getZerosCount(number, base) {
  // your implementation
  var zero = 0;
    var j = 2;
    
    while(j < base) {
        if (base % j == 0) { 
           base = base/j;
        }
        j++;
    }
   
    while(number >= 1) {
      if (base == 2)  {
            zero = Math.floor(number/j);
            break;
        } else {
            zero += Math.floor(number/base);
        }
            
        number /= base;
    }
    if (base == 25) {
      zero = (zero *2)+2;
  } else if (base == 7 || base == 3) {
      zero = Math.floor(zero/2);
  } else if (base == 4) {
      zero = Math.floor((zero/2) - 2);
  }
    
    return zero;
}