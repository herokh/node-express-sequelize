const Role = require("../models/role.model");

async function create(req, res, next) {
  try {
    const role = await Role.create(req.body);
    res.json(role);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
};
