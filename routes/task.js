const { Router } = require('express');
const TaskController = require('../controller/task.controller.js');
const { checkUser } = require('../middlewares/user.mw');

const taskRouter = Router();

taskRouter.post('/:id', checkUser, TaskController.createTask);
taskRouter.get('/:id', checkUser, TaskController.getUserTasks);

module.exports = taskRouter;
