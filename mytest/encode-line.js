const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
   //  throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
   return str.replace(/([a-z])\1*/g, (it) => (it.length > 1 ? it.length + it[0] : it[0]))
}


console.log(encodeLine('aabbccc'));


module.exports = {
   encodeLine
};
