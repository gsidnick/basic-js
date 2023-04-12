const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'object' || typeof sampleActivity !== 'string') return false;
  const currentActivity = parseInt(sampleActivity);
  if (isNaN(currentActivity)) return false;
  if (currentActivity < 0) return false;
  const time = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / time);
  if (age === Infinity || age < 0) return false;
  return age;
}

module.exports = {
  dateSample
};
