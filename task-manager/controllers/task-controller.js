const Task = require("../model/task-model");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors/not-found");

const getAllTasks = async (req, res) => {
  const allTasks = await Task.find({});
  res.status(StatusCodes.OK).json({ tasks: allTasks });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(StatusCodes.CREATED).json({ success: true, task });
};

const getTask = async (req, res, next) => {
  const id = req.params.taskId.slice(1);
  const task = await Task.findOne({ _id: id });
  if (!task) {
    return next(NotFoundError("rousrfdf"));
  }
  res.status(StatusCodes.OK).json({ status: true, task });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
};
