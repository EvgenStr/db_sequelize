const { Router } = require('express');
const TaskController = require('../controller/task.controller.js');
const { checkUser } = require('../middlewares/user.mw');

const taskRouter = Router();

taskRouter.post('/:id', checkUser, TaskController.createTask);
taskRouter.get('/:id/user', checkUser, TaskController.getUserTasks);
taskRouter.get('/:id', TaskController.getTask);
taskRouter.patch('/:id', TaskController.updateTask);
taskRouter.delete('/:id', TaskController.deleteTask);

module.exports = taskRouter;
