const Author = require("../models/author.model");

async function create(req, res, next) {
  try {
    const author = await Author.create(req.body);
    res.json(author);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
};
