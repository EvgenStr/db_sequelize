const { Tasks } = require('../models');
const createError = require('http-errors');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body, userInstance } = req;
    //const createdTask = await Task.create({...body, userId: userInstance.userId});
    const createdTask = await userInstance.createTask(body);
    console.log(createdTask);
    res.status(201).send({
      data: createdTask,
    });
  } catch (err) {
    res.status(400).send({
      err,
    });
    //next(err);
  }
};

module.exports.getUserTasks = async (req, res, next) => {
  try {
    const { userInstance } = req;

    const tasks = await userInstance.getTasks();
    console.log(userInstance);
    res.send(tasks);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const [rowsCount, tasks] = await Task.findAndCountAll();
    if (rowsCount === 0) {
      const err = createError(404, 'Users not found');
      return next(err);
    }
    res.status(200).send({
      data: tasks,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const task = await User.findByPk(id);
    if (!task) {
      const err = createError(404, 'Task not found');
      return next(err);
    }
    res.send(task);
  } catch (err) {
    next(err);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const [rowsCount, updatedTask] = await Task.update(body, {
      where: { id },
      returning: true,
    });
    if (rowsCount !== 1) {
      return next(createError(400, "Task can't be updated"));
    }

    res.send({
      data: updatedTask,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const rowsCount = await Task.destroy({
      where: { id },
    });

    if (rowsCount !== 1) {
      return next(createError(404, 'Task not found'));
    }

    res.send({ data: rowsCount });
  } catch (err) {
    next(err);
  }
};
