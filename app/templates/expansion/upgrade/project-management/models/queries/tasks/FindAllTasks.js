const Task = require("../../tasks");
/* Aristos Logger Path */
// const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger").addError;

/**
 * Finds a single page in the Page collection.
 * @param {string} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the page that matches the id
 */
module.exports = () => {
  return Task.find({});
};
