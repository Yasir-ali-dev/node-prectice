const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connectDB");
const taskRouter = require("./routes/task-router");
const ErrorHandler = require("./middlewares/error-handler");

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task-Manager");
});

app.use("/api/tasks", taskRouter);

app.use(ErrorHandler);

const port = process.env.PORT || 4000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listening to the port ${port}...`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
