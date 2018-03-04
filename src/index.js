module.exports = function getZerosCount(number, base) {
  // your implementation
  var zero = 0,
  j = 2,
  pow = base,
  num = number,
  z = 0,
  arr = [],
  res = {},
  zeroArr = [],
  keyArr = [];

while(j <= pow) {
if (pow % j == 0) { 
  pow = pow / j; 
  arr.push(j);
  j = 2;
  continue;
}
  j++;
}

for (var i = 0; i < arr.length; ++i)  {
var a = arr[i];
if (res[a] != undefined)
    ++res[a];
else
    res[a] = 1;
}

for (const key in res) {
keyArr.push(key);
while (num > 1) {
  zero += Math.floor(num/keyArr[z]);
 num /= keyArr[z];  
}    

if (z != z.length -1) {
  num = number;
  z++;
}

zeroArr.push(Math.floor(zero / res[key]));
zero = 0;
}
   

return Math.min.apply(null, zeroArr);
}