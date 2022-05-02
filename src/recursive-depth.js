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
  calculateDepth(arr, count = 1) {
    /*let str = JSON.stringify(arr);
    let newstr = [...str].filter(i => (i == '[' || i == ']')).join('');
    //console.log(newstr);
    let counter = 0;
    for (let i = newstr; i.length != 0; counter++) {
      i = i.replace(/\[\]/g, "");
    }
    console.log('counter', counter);
    return counter;
  }*/
    /* let count = 1;
     for (let i = 0; i < arr.length; i++) {
       if (Array.isArray(arr[i])) {
         arr = arr.flat();
         //console.log('arr', arr, 'lenght', arr.length);
         count++;
         i--;
       }
     }
     return count;
   }*/
    if (arr.some(el => Array.isArray(el))) {
      count++;
      return this.calculateDepth(arr.flat(1), count)
    }

    return count;
  }
}
module.exports = {
  DepthCalculator
}
// npm run test ./test/recursive*