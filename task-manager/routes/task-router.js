const express = require("express");
const {
  getAllTasks,
  createTask,
  getTask,
} = require("../controllers/task-controller");
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:taskId").get(getTask);

module.exports = router;
