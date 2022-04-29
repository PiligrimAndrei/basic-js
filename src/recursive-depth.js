const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let str = JSON.stringify(arr);
    let newstr = [...str].filter(i => (i == '[' || i == ']')).join('');
    //console.log(newstr);
    let counter = 0;
    for (let i = newstr; i.length != 0; counter++) {
      i = i.replace(/\[\]/g, "");
    }
    console.log('counter', counter);
    return counter;
  }
}

module.exports = {
  DepthCalculator
}
