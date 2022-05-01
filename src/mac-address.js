const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(string) {
  //throw new NotImplementedError('Not implemented');
  /*let arr = string.split('-')
  for (let i = 0; i < arr.length; i++) {
    console.log(parseInt(arr[i], 10))
    if (parseInt(arr[i], 10) >= 16) return false*/
  let regexp = /^[0-9a-f]{2}(-[0-9a-f]{2}){5}$/i;
  if (regexp.test(string))
    return true;
  else return false;

}

//console.log(isMAC48Address('00-1B-63-84-45-E6'))
module.exports = {
  isMAC48Address
};
//node ./src/mac-address.js