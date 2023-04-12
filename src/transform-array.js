const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw  new Error('\'arr\' parameter must be an instance of the Array!');
  let result = [];
  arr.forEach((item, index, array) => {
    switch (item) {
      case '--discard-next':
        break;
      case '--discard-prev':
        if (array[index - 1]) {
          if (array[index - 2] !== '--discard-next') result.pop()
        }
        break;
      case '--double-next':
        if (array[index + 1]) result.push(array[index + 1]);
        break;
      case '--double-prev':
        if (array[index - 1]) {
          if (array[index - 2] !== '--discard-next') result.push(array[index - 1]);
        }
        break;
      default:
        if (array[index - 1] === '--discard-next') break;
        result.push(item);
        break;
    }
  });
  return result;
}

module.exports = {
  transform
};
