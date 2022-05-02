const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    const [doubleN, doubleP, discardN, discardP] = [
      "--double-next",
      "--double-prev",
      "--discard-next",
      "--discard-prev",
    ];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i] != discardN &&
        arr[i] != discardP &&
        arr[i] != doubleN &&
        arr[i] != doubleP
      ) {
        if (arr[i - 1] != discardN) {
          result.push(arr[i]);
        }
      }
      if (arr[i] === doubleN) {
        if (arr[i + 1]) {
          result.push(arr[i + 1]);
        }
      } else if (arr[i] === doubleP && arr[i - 2] != discardN) {
        if (arr[i - 1]) {
          result.push(arr[i - 1]);
        }
      } else if (arr[i] === discardP && arr[i - 2] != discardN) {
        result.pop();
      }
    }
    return result;
  }
  throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform,
};
