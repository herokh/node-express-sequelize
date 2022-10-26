const bookDTO = require("../dtos/book.dto");
const Author = require("../models/author.model");
const Book = require("../models/book.model");

async function create(req, res, next) {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    next(error);
  }
}

async function findAll(req, res, next) {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    next(error);
  }
}

async function findOne(req, res, next) {
  try {
    const book = await Book.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Author,
        },
      ],
    });
    if (!book) res.sendStatus(404);
    res.json(bookDTO.toDTO(book));
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    await Book.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}

async function destroy(req, res, next) {
  try {
    await Book.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
};
