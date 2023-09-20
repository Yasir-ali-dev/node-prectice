const mongoose = require("mongoose");

const userSchema = () => {
  return mongoose.Schema({
    username: {
      type: String,
      required: [true, "username is required"],
      maxLength: 20,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      unique: true,
      minLength: 5,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please provide an valid email",
      ],
    },
  });
};
module.exports = mongoose.model("user", userSchema);
