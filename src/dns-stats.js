const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  if (domains.length === 0) return result;
  const parsedDomains = domains.map((str) => str.split('.').reverse().map((item) => `.${item}`));
  const counts = Object.values(parsedDomains.flat(1).reduce((acc, cur) => (
    { ...acc, [cur]: (acc[cur] || 0) + 1}
  ), {}));
  result[parsedDomains[0][0]] = counts[0];
  parsedDomains.forEach((item, index) => {
    result[item.join('')] = counts[index + 1];
  })
  return result;
}

module.exports = {
  getDNSStats
};
