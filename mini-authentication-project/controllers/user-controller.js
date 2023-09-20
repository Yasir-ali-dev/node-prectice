const createUser = (req, res) => {
  res.send("create user");
};

const dashboard = (req, res) => {
  res.send(`${req.body.auth} -> In dashboard`);
};

module.exports = {
  createUser,
  dashboard,
};
