const User = require("../models/User");

const getAllUser = async (req, res) => {
  const user = await User.find();
  res.status(200).json({ user });
};
const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ user });
};

module.exports = {
  getAllUser,
  createUser,
};
