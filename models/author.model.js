const { DataTypes } = require("sequelize");
const db = require("../db/sequelize");

const Author = db.define("authors", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Author;
