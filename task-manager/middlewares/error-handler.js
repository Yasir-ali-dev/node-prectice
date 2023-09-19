const { StatusCodes } = require("http-status-codes");
const ErrorHandler = (err, req, res, next) => {
  let CustomError = {
    message: err.message || "Something went Wrong",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };
  res.status(CustomError.statusCode).json({ message: CustomError.message });
};

module.exports = ErrorHandler;
