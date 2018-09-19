module.exports = function getZerosCount(number, base) {
    // your implementation
    let j = 2;
    let res = {};

    while (j <= base) {
        if (base % j === 0) {
            base = base / j;
            if (res[j] !== undefined) {
                res[j]++;
            } else {
                res[j] = 1;
            }
            j = 2;
        } else {
            j++;
        }
    }

    let num = number;
    let zero = 0;
    let zeroArr = [];

    for (let key in res) {
        while (num > 1) {
            zero = zero + ~~(num / key);
            num = num / key;
        }
        num = number;
        zeroArr.push(~~(zero / res[key]));
        zero = 0;
    }

    return Math.min.apply(null, zeroArr);
};
