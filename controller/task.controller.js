const { Tasks } = require('../models');

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
