const mongoose = require("mongoose");
const User = require("./User");

const adminSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Admin", adminSchema);
