const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  const resultMatrix = JSON.parse(JSON.stringify(matrix))
  let sum, startI, startJ, endI, endJ = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i == 0) startI = 0;
      else startI = i - 1;
      if (j == 0) startJ = 0;
      else startJ = j - 1;
      if (i == matrix.length - 1) endI = matrix.length - 1;
      else endI = i + 1;
      if (j == matrix[i].length - 1) endJ = matrix[i].length - 1;
      else endJ = j + 1;
      console.log(startI, endI, startJ, endJ);
      sum = 0;
      for (let k = startI; k <= endI; k++) {
        for (let l = startJ; l <= endJ; l++) {
          //console.log('k', k, 'l', l, 'i', i, 'j', j, 'matrix[k][l]', matrix[k][l]);
          if (matrix[k][l] == true) {
            sum++;
            //console.log('sum', sum)
          }
        }
      }
      resultMatrix[i][j] = sum - 1 * matrix[i][j];
      sum = 0;
    }
  }
  return resultMatrix;
}


/*console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]));*/


module.exports = {
  minesweeper
};
//node ./src/mine-sweeper.js