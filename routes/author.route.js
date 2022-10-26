const express = require("express");
const router = express.Router();
const controller = require("../controllers/author.controller");

router.post("/", controller.create);

module.exports = router;
