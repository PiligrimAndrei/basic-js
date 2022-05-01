const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = getOne(n);
  function getOne(n) {
    let count = 0;
    let arr = [...n.toString()];
    for (let i = 0; i < arr.length; i++) {
      //console.log(Number(arr[i]));
      count += Number(arr[i]);
    }
    return count;
  }

  if (sum < 10) {
    console.log(sum);
    return sum;
  } else {
    console.log(sum);
    n = sum;
    sum = getOne(n);
  }
  return sum;
}
//console.log(getSumOfDigits(91));

module.exports = {
  getSumOfDigits
};
