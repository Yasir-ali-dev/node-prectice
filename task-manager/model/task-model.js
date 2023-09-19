const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: [true, "Please provide the task"],
    maxLength: [20, "please the should be within 20 words"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
