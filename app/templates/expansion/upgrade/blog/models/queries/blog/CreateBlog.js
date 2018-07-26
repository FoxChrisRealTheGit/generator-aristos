const Blog = require("../../blog");
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger").addError;
/**
 * Creates a single Blog in the Blog collection.
 * @param {object} blogProps - Object containing title, slug, content, parent, 100, description, keywords, author
 * @return {promise} A promise that resolves with the Page that was created
 */
module.exports = blogProps => {
  const blog = new Blog(blogProps);
  blog.save().catch(err => errorAddEvent(err, "blog query error"));
};
