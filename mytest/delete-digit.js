//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
   //throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
   let max = 0;
   let arr = [...n.toString()];
   //console.log(str, str.length);
   let now;
   for (i = 0; i <= arr.length; i++) {
      //console.log(str.splice(i, 1));
      arr = [...n.toString()];
      arrNew = arr;
      arrNew.splice(i, 1);
      now = Number(arrNew.join(''));
      if (now > max) max = now;
      //console.log(now, max, arr);

   }
   return max;
}
console.log(deleteDigit(222219));






/*module.exports = {
   deleteDigit
};*/
