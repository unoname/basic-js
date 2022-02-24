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
  let minNumber = Math.min(...arrNumber);
  for (i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < arrNumber[i + 1]) {
      arrNumber[i] = "";
      break;
    } else if (
      (arrNumber[i] == arrNumber[i + 1] && arrNumber[i] == minNumber) ||
      i == arrNumber.length - 1
    ) {
      arrNumber[i] = "";
      break;
    }
  }
  return Number.parseInt(arrNumber.join(""));
}

module.exports = {
  deleteDigit,
};
