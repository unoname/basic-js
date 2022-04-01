const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.additionRepeatTimes) {
    if (options.addition || options.addition !== undefined) {
      if (options.additionSeparator) {
        str +=
          "" +
          options.addition +
          (options.additionSeparator + options.addition).repeat(
            options.additionRepeatTimes - 1
          );
      } else {
        str +=
          options.addition +
          ("|" + options.addition).repeat(options.additionRepeatTimes - 1);
      }
    } else {
      if (options.additionSeparator) {
        str += options.additionSeparator.repeat(options.additionRepeatTimes);
      } else {
        str += "|".repeat(options.additionRepeatTimes);
      }
    }
  }
  if (options.repeatTimes) {
    if (options.separator) {
      str += (options.separator + str).repeat(options.repeatTimes - 1);
    } else if (options.addition && !options.additionRepeatTimes) {
      str += options.addition;
      str += ("+" + str).repeat(options.repeatTimes - 1);
    } else {
      str += ("+" + str).repeat(options.repeatTimes - 1);
    }
  } else {
    str += options.addition;
  }
  return str;
}

module.exports = {
  repeater,
};
