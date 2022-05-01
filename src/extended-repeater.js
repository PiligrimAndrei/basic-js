const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  let strIn = String(str);

  let addition;
  if (typeof options.addition === 'boolean' || options.addition === null || options.addition) {
    addition = String(options.addition)
  } else {
    addition = '';
  }
  let repeatTimes = options.repeatTimes || 1;

  let separator = options.separator ? String(options.separator) : "+";
  //console.log('options.separator', options.separator)
  //console.log('separator', separator);

  let additionRepeatTimes = options.additionRepeatTimes || 1;

  let additionSeparator = options.additionSeparator ? String(options.additionSeparator) : "|";

  let result = "";

  for (let i = 0; i < repeatTimes; i++) {
    result += strIn;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;
      if (j + 1 < additionRepeatTimes) {
        result += additionSeparator;
      }
    }
    if (i + 1 < repeatTimes) {
      result += separator;
    }
  } console.log(separator, additionSeparator);
  return result;
}


console.log(repeater('la', { repeatTimes: 3 }))

module.exports = {
  repeater
};
// node ./src/extended-repeater.js