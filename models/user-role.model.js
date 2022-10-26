const { DataTypes } = require("sequelize");
const db = require("../db/sequelize");
const Role = require("./role.model");
const User = require("./user.model");

const UserRole = db.define("user_roles", {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
    },
  },
  roleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
    },
  },
});

module.exports = UserRole;
