const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = arr.map((item) => item === -1 ? -1 : null);
  const sorted = arr.filter((item) => item !== -1).sort((a, b) => a > b ? 1 : -1);
  if (sorted.length === 0) return result;
  if (result.length === 0) return sorted;
  result.forEach((item, index) => {
    if (item === null) {
      result[index] = sorted[0];
      sorted.shift();
    }
  });
  return result;
}

module.exports = {
  sortByHeight
};
