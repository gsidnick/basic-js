const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let amount = 0;
  let mask = [];
  matrix.forEach((row, rowIndex, mtrx) => {
    row.forEach((col, colIndex) => {
      if (rowIndex === 0) {
          amount = mtrx[0].reduce((acc, cur) => acc + cur, 0)
          mask = [...mtrx[0]];
        } else {
          if (mask[colIndex] !== 0) amount += mtrx[rowIndex][colIndex];
        }
    })
    mask.forEach((item, index, array) => {
      array[index] = array[index] * mtrx[rowIndex][index];
    });
  })
  return amount;
}

module.exports = {
  getMatrixElementsSum
};
