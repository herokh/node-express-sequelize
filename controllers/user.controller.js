const Role = require("../models/role.model");
const User = require("../models/user.model");

async function create(req, res, next) {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function findOne(req, res, next) {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Role,
        },
      ],
    });
    if (!user) res.sendStatus(404);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  findOne,
};
