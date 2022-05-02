const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  console.log(names);
  if (names.length == 0) {
    console.log('ERROR');
    return names;
  } else {
    let newArr = [];
    newArr.push(names[0]);
    let repeat, insert = 0;

    function getRepeat(arr, elem) {
      repeat = 0;
      //console.log('arr, elem', arr, elem)
      for (let j = 0; j < arr.length; j++) {
        //console.log('arr[j], elem', arr[j], elem)
        if (arr[j] == elem) {
          repeat += 1;
        }
      }
      return repeat;
    }

    for (let i = 1; i < names.length; i++) {
      subnames = names.slice(0, i);
      subarr = newArr.slice(1, i);
      //console.log('subnames', subnames, 'subarr', subarr);
      //console.log('newArr', newArr)
      if (subarr.includes(names[i])) {
        insert = getRepeat(subarr, names[i]);
        //console.log('subarr', subarr, 'insert', insert);
        newArr.push(names[i] + '(' + insert + ')')
      } else if (subnames.includes(names[i])) {
        insert = getRepeat(subnames, names[i])
        // console.log('subnames', subnames, 'insert', insert);
        newArr.push(names[i] + '(' + insert + ')')
      } else {
        newArr.push(names[i])
      }
      //console.log('newArr', newArr)
    }
    return newArr;
  }
}


//console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))

module.exports = {
  renameFiles
};
//node ./src/file-names.js