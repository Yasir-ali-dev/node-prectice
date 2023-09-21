const mongoose = require("mongoose");

const connect = (URI) => {
  mongoose
    .connect(URI)
    .then()
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connect;
