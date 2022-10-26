const { DataTypes } = require("sequelize");
const db = require("../db/sequelize");

const User = db.define("users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
