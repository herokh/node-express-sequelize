require("../models/book.model");

function toDTO(book) {
  const dto = {
    title: book.title,
    release_date: book.releaseDate,
    author: book.author?.name || null,
  };
  return dto;
}

module.exports = {
  toDTO,
};
