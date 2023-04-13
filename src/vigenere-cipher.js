const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  chars = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ]

  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let result = '';
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (this.chars.includes(message[i])) {
        let x = (message[i].charCodeAt(0) + key[keyIndex].charCodeAt(0)) % 26;
        x += 'a'.charCodeAt(0);
        result += String.fromCharCode(x);
        if (keyIndex === key.length - 1) {
          keyIndex = 0;
        } else {
          keyIndex++;
        }
      } else {
        result += message[i];
      }
    }
    if (this.direct) {
      return result.toUpperCase();
    } else {
      return result.toUpperCase().split('').reverse().join('');
    }
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let result = '';
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (this.chars.includes(message[i])) {
        let x = (message[i].charCodeAt(0) - key[keyIndex].charCodeAt(0) + 26) % 26;
        x += 'a'.charCodeAt(0);
        result += String.fromCharCode(x);
        if (keyIndex === key.length - 1) {
          keyIndex = 0;
        } else {
          keyIndex++;
        }
      } else {
        result += message[i];
      }
    }
    if (this.direct) {
      return result.toUpperCase();
    } else {
      return result.toUpperCase().split('').reverse().join('');
    }
  }

}

module.exports = {
  VigenereCipheringMachine
};
