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
  /* constructor(reverse) {
     reverse = true;
   }*/
  encrypt(message, key) {
    if (message && key) {
      let chiper = ''
      let letterMsg, indexKey, upperLatin, lowerLatin;

      function isUpperLatin(letter) {
        var l = letter.charCodeAt();
        if (l >= 65 && l <= 90) {
          return true;
        } else {
          return false;
        }
      }

      function isLowerLatin(letter) {
        var l = letter.charCodeAt();
        if (l >= 97 && l <= 122) {
          return true;
        } else {
          return false;
        }
      }
      for (let i = 0, j = 0; i < message.length; i++) {
        letterMsg = message[i];
        indexKey = j % key.length;
        if (isUpperLatin(letterMsg)) {
          upperLatin = ((letterMsg.charCodeAt() - 65) + (key[indexKey].toUpperCase().charCodeAt() - 65) + 26) % 26;
          chiper += String.fromCharCode(upperLatin + 65);
          j++;
        } else if (isLowerLatin(letterMsg)) {
          lowerLatin = ((letterMsg.charCodeAt() - 97) + (key[indexKey].toLowerCase().charCodeAt() - 97) + 26) % 26;
          chiper += String.fromCharCode(lowerLatin + 97);
          j++;
        } else {
          chiper += letterMsg;
        }
      }
      return chiper.toUpperCase()
    } else throw Error('Incorrect arguments!')
  }
  decrypt(message, key) {
    if (message && key) {
      let chiper = ''
      let letterMsg, indexKey, upperLatin, lowerLatin;
      function isUpperLatin(letter) {
        var l = letter.charCodeAt();
        if (l >= 65 && l <= 90) {
          return true;
        } else {
          return false;
        }
      }
      function isLowerLatin(letter) {
        var l = letter.charCodeAt();
        if (l >= 97 && l <= 122) {
          return true;
        } else {
          return false;
        }
      }
      for (let i = 0, j = 0; i < message.length; i++) {
        letterMsg = message[i];
        indexKey = j % key.length;
        if (isUpperLatin(letterMsg)) {
          upperLatin = ((letterMsg.charCodeAt() - 65) - (key[indexKey].toUpperCase().charCodeAt() - 65) + 26) % 26;
          chiper += String.fromCharCode(upperLatin + 65);
          j++;
        } else if (isLowerLatin(letterMsg)) {
          lowerLatin = ((letterMsg.charCodeAt() - 97) - (key[indexKey].toLowerCase().charCodeAt() - 97) + 26) % 26;
          lowerLatin('lowerLatin', lowerLatin, String.fromCharCode(lowerLatin + 97));
          chiper += String.fromCharCode(lowerLatin + 97);
          j++;
        } else {
          chiper += letterMsg;
        }
      }
      return chiper.toUpperCase()
    } else throw Error('Incorrect arguments!')
  }
};

/*const test = new VigenereCipheringMachine();
console.log(test);
console.log(test.encrypt('attack at dawn!', 'alphonse'));
console.log(test.decrypt('AEIHQX SX DLLU!', 'alphonse'));*/

module.exports = {
  VigenereCipheringMachine
};
//node ./src/vigenere-cipher.js