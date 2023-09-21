const jwt = require("jsonwebtoken");
require("dotenv").config();
const { BadRequestError } = require("../errors");

const createUser = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("PLease provide credentials");
  }
  const id = new Date().getUTCMilliseconds() * Math.floor(Math.random() * 3232);
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "2 days",
  });

  res.status(200).json({ msg: `user created ${username}`, token });
};

const dashboard = (req, res) => {
  const user = req.body.user;
  const luckyNumber = Math.floor(Math.random() * 77);
  res.status(200).json({
    msg: `Hey there, ${user.username}`,
    secret: `here is your luckey number ${luckyNumber}`,
  });
};

module.exports = {
  createUser,
  dashboard,
};
