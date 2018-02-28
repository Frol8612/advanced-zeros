module.exports = function getZerosCount(number, base) {
  // your implementation
  var zero = 0;
    var bas = base;
    var j = 2;
    
    while(j < bas) {
        if (bas % j == 0) {
           bas = bas/j;
        }
        j++;
    }
    

    while(number >= 1) {
        zero += Math.floor(number/bas);
        number /= bas;
    } 


    return zero;
}