const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  for (i = 0, count = 1; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
      continue;
    }
    result += count > 1 ? count + str[i] : str[i];
    count = 1;
  }
  return result;
}

module.exports = {
  encodeLine,
};
