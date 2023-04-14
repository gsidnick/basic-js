const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  let result = [];
  let groups = [];
  let buffer = [];

  [...str].forEach((char, index) => {
    if (char === str[index + 1]) {
      buffer.push(char);
    } else {
      buffer.push(char);
      groups.push(buffer);
      buffer = [];
    }
  });
  groups.forEach((group) => {
    if (group.length > 1) {
      result.push(group.length);
      result.push(group[0]);
    } else {
      result.push(group[0]);
    }
  })
  return result.join('');
}

module.exports = {
  encodeLine
};
