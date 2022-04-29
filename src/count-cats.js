const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  /*let str = JSON.stringify(matrix);
  console.log(str);
  let newstr = [...str].filter(i => (i == '^')).join('');
  console.log(newstr);
  let count = newstr.replace(/[^^]/g, '').length;
  return count / 2;*/
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    //console.log('длинна', matrix.length)
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == '^^') {
        count++;
        //console.log(count);
      }
    }
  }
  return count;
}
/*console.log(countCats([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
]))*/
module.exports = {
  countCats
};
