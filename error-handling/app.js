const express = require("express");
const notFound = require("./middleware/not-found");
require("dotenv").config();
const app = express();
const errorHandlerMiddleware = require("./middleware/error-handler");
const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  CustomAPIError,
} = require("./errors/index");
app.use(express.json());

app.get("/notfound", (req, res) => {
  throw new NotFoundError("Not resource with id 4332");
});

app.get("/badrequest", (req, res) => {
  throw new BadRequestError(
    "bad request, please provide valid password or email"
  );
});

app.get("/unauthenticate", (req, res) => {
  throw new UnauthenticatedError(
    "unauthorised access please provide valid credentials"
  );
});

app.get("/custom", (req, res) => {
  throw new CustomAPIError();
});

app.use(errorHandlerMiddleware);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is listening to the port ${port} ...`);
});
