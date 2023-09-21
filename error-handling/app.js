const express = require("express");
require("dotenv").config();
const app = express();
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const mongoose = require("mongoose");
require("express-async-errors");

// middlewares
app.use(errorHandlerMiddleware);

//
const schema = new mongoose.Schema({ name: String });
console.log(schema.path("name") instanceof mongoose.SchemaType);

//

// connection
const port = process.env.PORT;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening to the port ${port} ...`);
    });
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.on("error", (error) => {
    console.log(
      `unable to connect the database ${process.env.MONGO_URI}\n ${error}`
    );
  });
};
start();
