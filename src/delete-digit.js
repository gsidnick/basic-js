const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = String(n).split('').map((digit, index, array) => {
    const number = [...array];
    number.splice(index, 1)
    return Number(number.join(''));
  });
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
