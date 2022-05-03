const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(value = true) {
    this.direct = value;
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }
    let arr = [];
    let strUC = str.toUpperCase().split("");
    let keyUC = key.toUpperCase();
    let re = /[A-Z]/;
    let i = 0;
    let indexCurrent, indexKey, index;
    for (let elem of strUC) {
      if (re.test(elem)) {
        indexCurrent = elem.charCodeAt(0);
        indexKey = (keyUC[i % key.length].charCodeAt(0) - 65) % 32;
        index = indexCurrent - 65 + indexKey;
        arr.push(String.fromCharCode((index % 26) + 65));
        i++;
      } else {
        arr.push(elem);
      }
    }
    return this.direct ? arr.join("") : arr.reverse().join("");
  }
  decrypt(encryptStr, key) {
    if (!encryptStr || !key) {
      throw new Error("Incorrect arguments!");
    }
    let arr = [];
    let strUC = encryptStr.toUpperCase().split("");
    let keyUC = key.toUpperCase();
    let re = /[A-Z]/;
    let i = 0;
    let indexCurrent, indexKey, index;
    for (let elem of strUC) {
      if (re.test(elem)) {
        indexCurrent = elem.charCodeAt(0);
        indexKey = (keyUC[i % key.length].charCodeAt(0) - 65) % 32;
        index = indexCurrent + 65 - indexKey;
        arr.push(String.fromCharCode((index % 26) + 65));
        i++;
      } else {
        arr.push(elem);
      }
    }
    return this.direct ? arr.join("") : arr.reverse().join("");
  }
}

// alternative variant
// class VigenereCipheringMachine {
//   constructor(value = true) {
//     this.direct = value;
//   }
//   ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//   encrypt(str, key) {
//     if (!str || !key) {
//       throw new Error("Incorrect arguments!");
//     }
//     let arr = [];
//     let strUC = str.toUpperCase().split("");
//     let keyUC = key.toUpperCase();
//     let re = /[A-Z]/;
//     let indexCurrent, indexKey, index;
//     for (let i = 0, j = 0; i < str.length; i++) {
//       if (re.test(strUC[i])) {
//         if (j > keyUC.length - 1) {
//           j = 0;
//         }
//         indexCurrent = this.ALPHABET.indexOf(strUC[i]);
//         indexKey = this.ALPHABET.indexOf(keyUC[j]);
//         index =
//           indexCurrent + indexKey > 25
//             ? indexCurrent + indexKey - 26
//             : indexCurrent + indexKey;
//         arr.push(this.ALPHABET[index]);
//         j++;
//       } else {
//         arr.push(strUC[i]);
//       }
//     }
//     return this.direct ? arr.join("") : arr.reverse().join("");
//   }
//   decrypt(encryptStr, key) {
//     if (!encryptStr || !key) {
//       throw new Error("Incorrect arguments!");
//     }
//     let arr = [];
//     let strUC = encryptStr.toUpperCase().split("");
//     let keyUC = key.toUpperCase();
//     let re = /[A-Z]/;
//     let indexCurrent, indexKey, index;
//     for (let i = 0, j = 0; i < strUC.length; i++) {
//       if (re.test(strUC[i])) {
//         if (j > keyUC.length - 1) {
//           j = 0;
//         }
//         indexCurrent = this.ALPHABET.indexOf(strUC[i]);
//         indexKey = this.ALPHABET.indexOf(keyUC[j]);
//         index =
//           indexCurrent - indexKey < 0
//             ? indexCurrent - indexKey + 26
//             : indexCurrent - indexKey;
//         arr.push(this.ALPHABET[index]);
//         j++;
//       } else {
//         arr.push(encryptStr[i]);
//       }
//     }
//     return this.direct ? arr.join("") : arr.reverse().join("");
//   }
// }
module.exports = {
  VigenereCipheringMachine,
};
