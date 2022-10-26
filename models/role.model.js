const { DataTypes } = require("sequelize");
const db = require("../db/sequelize");

const Role = db.define("roles", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Role;
