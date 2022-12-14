const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.post("/", controller.create);
router.get("/:id", controller.findOne);

module.exports = router;
