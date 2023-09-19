const NotFoundError = require("./not-found");
const UnAuthorisedError = require("./un-authorise");
const BadRequestError = require("./bad-request");
const CustomAPIError = require("./custom-error");

module.exports = {
  NotFoundError,
  UnAuthorisedError,
  BadRequestError,
  CustomAPIError,
};
