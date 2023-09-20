require("express-async-errors");
require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connectDB");
const errorHandleMiddleware = require("./middlewares/error-handle-middleware");
const router = require("./routes/user-route");

// external middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.status(200).send("<h2>Authentication with json web tokens <h2>");
});
// middlewares
app.use("/api/auth/", router);
app.use(errorHandleMiddleware);

const port = process.env.PORT;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listening to the port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
