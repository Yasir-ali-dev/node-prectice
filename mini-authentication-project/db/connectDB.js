const mongoose = require("mongoose");

const connectDB = (URI) => {
  mongoose
    .connect(URI)
    .then()
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDB;
