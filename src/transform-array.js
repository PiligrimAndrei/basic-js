const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (arr instanceof Array) {
    let trans = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '--double-next' || arr[i] == '--discard-prev' || arr[i] == '--discard-next' || arr[i] == '--double-prev') {
        switch (arr[i]) {
          case '--double-next':
            if (typeof arr[i + 1] == 'number') {
              trans.push(arr[i + 1]);
            }
            break;
          case '--double-prev':
            if (typeof arr[i - 1] == 'number') {
              trans.push(arr[i - 1]);
            }
            break;
          case '--discard-prev':
            if (typeof arr[i - 1] == 'number') {
              let findInd = trans.indexOf(arr[i - 1]);
              trans.splice(findInd, 1);
            }
            break;
          case '--discard-next':
            if (typeof arr[i + 1] == 'number') {
              i += 2
            }
            break;
        }
      } else trans.push(arr[i]);
    } return trans;
  } else throw new Error('\'arr\' parameter must be an instance of the Array!')
}

module.exports = {
  transform
};
