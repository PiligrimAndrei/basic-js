const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  let newArr = [];
  let sortArr = arr.filter(item => item >= 0).sort((a, b) => a - b);
  console.log('sortArr', sortArr);
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      newArr[i] = -1
    } else {
      //console.log(sortArr[j])
      newArr[i] = sortArr[j];
      j++;
    }
  }
  console.log('newArr', newArr);
  return newArr;
}
//console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
module.exports = {
  sortByHeight
};
//node ./src/sort-by-height.js 