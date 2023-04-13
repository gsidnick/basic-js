const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let base = String(str);
  const defaultOptions = {
    separator: '+',
    repeatTimes: 1,
    addition: '',
    additionSeparator: '|',
    additionRepeatTimes: 1
  }
  options = { ...defaultOptions, ...options};
  let addition = String(options.addition);
  if (addition) {
    if (options.additionRepeatTimes > 1) {
      addition += options.additionSeparator;
      addition = `${addition.repeat(options.additionRepeatTimes)}`;
      addition = addition.slice(0, -options.additionSeparator.length);
    }
  }
  base = `${base}${addition}${options.separator}`;
  let result = `${base.repeat(options.repeatTimes)}`;
  result = result.slice(0, -options.separator.length);
  return result;
}

module.exports = {
  repeater
};
