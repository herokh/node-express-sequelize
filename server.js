const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const dbmigrate = require("./db/dbmigrate");
const authorRouter = require("./routes/author.route");
const bookRouter = require("./routes/book.routes");
const roleRouter = require("./routes/role.routes");
const userRouter = require("./routes/user.routes");

dbmigrate.run();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/roles", roleRouter);
app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
