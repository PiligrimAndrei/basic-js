const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let shortStr, longStr;
  let res = 0;
  if (s1.length < s2.length) {
    shortStr = [...s1];
    longStr = [...s2];
  } else {
    shortStr = [...s2];
    longStr = [...s1];
  }
  console.log('shortStr', shortStr, 'longStr', longStr)
  for (let i = 0; i < shortStr.length; i++) {
    console.log('shortStr[i]', shortStr[i], longStr.includes(shortStr[i]), !shortStr.slice(0, i).includes(shortStr[i]));
    if (longStr.includes(shortStr[i]) && !shortStr.slice(0, i).includes(shortStr[i])) {
      res = res + Math.min(shortStr.filter(item => item == shortStr[i]).length, longStr.filter(item => item == shortStr[i]).length)
    }
  }
  return res;
}

console.log(getCommonCharacterCount('aabcc', 'adcaa'))
module.exports = {
  getCommonCharacterCount
};
//node ./src/common-character-count.js