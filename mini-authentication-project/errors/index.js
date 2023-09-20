const CustomAPIError = require("./custom-api");
const BadRequestError = require("./bad-request");
const UnAuthenticatedError = require("./un-authenticated");
const NotFoundError = require("./not-found");
module.exports = {
  NotFoundError,
  CustomAPIError,
  BadRequestError,
  UnAuthenticatedError,
};
