const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  };
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (Object.keys(date).length != 0 || isNaN(date)) {
    throw new Error("Invalid date!");
  }
  if (date instanceof Date) {
    if (Object.prototype.toString.call(date) !== "[object Date]") {
      throw new Error("Invalid date!");
    }
    for (prop in seasons) {
      if (seasons[prop].includes(date.getMonth())) {
        return prop;
      }
    }
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
