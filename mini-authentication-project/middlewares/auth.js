const auth = (req, res, next) => {
  req.body.auth = " i am in auth ";
  next();
};
module.exports = auth;
