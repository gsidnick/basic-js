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
  const result = [];
  let index = 0;
  let origin= '';

  const renameFile = (filename) => {
      if (result.includes(filename)) {
        index++;
        renameFile(`${origin}(${index})`);
      } else {
        result.push(filename);
        index = 0;
      }
  }

  names.forEach((file) => {
    origin = file;
    renameFile(file);
  });

  return result;
}

module.exports = {
  renameFiles
};
