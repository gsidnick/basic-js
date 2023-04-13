const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  if (s1 === '') return count;
  const s1Arr = [...s1];
  const s2Arr = [...s2];
  s1Arr.forEach((char1) => {
    const index = s2Arr.findIndex((char2) => char1 === char2 );
    if (index >= 0) {
      s2Arr.splice(index, 1);
      count++;
    }
  });
  return count;
}

module.exports = {
  getCommonCharacterCount
};
