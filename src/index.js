module.exports = function getZerosCount(number, base) {
  // your implementation
    var zero = 0;
    var j = 2;
  
    while(j < base) {
        if (base % j == 0) { 
            base = base/j;
            j = 2;
            continue;
        }
        j++;
      }

    while(number > 0) {
       zero += Math.floor(number/base);
      
        number /= base;
    }   
    return zero;
}