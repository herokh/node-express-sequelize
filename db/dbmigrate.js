const Author = require("../models/author.model");
const Book = require("../models/book.model");
const Role = require("../models/role.model");
const UserRole = require("../models/user-role.model");
const User = require("../models/user.model");

function run() {
  // 1:m
  Author.hasMany(Book);
  Book.belongsTo(Author);

  // m:m
  User.belongsToMany(Role, { through: UserRole });
  Role.belongsToMany(User, { through: UserRole });

  [Author, Book, User, Role, UserRole].forEach((m) => {
    m.sync()
      .then(() => {
        console.log("migrate table ok");
      })
      .catch((err) => {
        console.log("unable to migrate table", err);
      });
  });
}

module.exports = { run };
