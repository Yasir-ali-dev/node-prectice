const { NotFoundError, BadRequestError } = require("../errors");
const Task = require("../model/task-model");
const { StatusCodes } = require("http-status-codes");

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
    // requires the package express-async-errors
    throw new NotFoundError(`task not found with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ status: true, task });
};

const deleteTask = async (req, res) => {
  const id = req.params.taskId.slice(1);
  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) {
    throw new NotFoundError(`task not found with id ${id}`);
  }
  return res.json(StatusCodes.OK).json({ status: true, task });
};

const updateTask = async (req, res) => {
  const id = req.params.taskId.slice(1);
  if (!req.body.task.trim()) {
    throw new BadRequestError("Please provide the updated task");
  }
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  if (!task) {
    throw new NotFoundError(`task not found with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ status: true, task });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
};
