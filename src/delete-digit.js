const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrNumber = [...n.toString()].map(e => Number.parseInt(e));
  if (arrNumber.length == 3 && arrNumber[0] < arrNumber[1]) {
    arrNumber.splice(0, 1);
  } else {
    for (i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] === Math.min(...arrNumber)) {
        arrNumber.splice(i, 1);
        break;
      }
    }
  }
  return Number.parseInt(arrNumber.join(""));
}

module.exports = {
  deleteDigit,
};
