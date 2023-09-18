const BadRequestError = require("./bad-request");
const NotFoundError = require("./not-found");
const UnauthenticatedError = require("./un-authenticated");
const CustomAPIError = require("./custom-api");

module.exports = {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  CustomAPIError,
};
