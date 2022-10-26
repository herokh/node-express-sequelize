const { DataTypes } = require("sequelize");
const db = require("../db/sequelize");

const Book = db.define("books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATEONLY,
  },
});

module.exports = Book;
