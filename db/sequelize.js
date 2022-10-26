const dbConfig = require("../configs/db.config");
const sequelize = require("sequelize");
const Sequelize = new sequelize.Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "mysql",
  }
);

module.exports = Sequelize;
