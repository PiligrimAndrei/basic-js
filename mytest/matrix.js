const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
   //throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
   let sum = 0;
   //console.log(matrix[1][1]);
   for (i = 0; i < matrix.length; i++) {
      for (j = 0; j < matrix[i].length; j++) {
         if (i == 0) {
            sum = sum + matrix[i][j];
            console.log('sum', sum);
         }
         else if (matrix.length > 1) {
            k = i - 1;
            console.log('k=', k)
            if ((matrix[k][j]) != 0) sum = sum + matrix[i][j];
         }
      }
   }
   return sum;
}
console.log(getMatrixElementsSum([
   [0],
]))
module.exports = {
   getMatrixElementsSum
};
//node ./mytest/matrix.js
