const { Router } = require('express');
const UserController = require('../controller/user.controller.js');

const userRouter = Router();

userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getUser);
userRouter.patch('/:id', UserController.updateUser);
userRouter.delete('/:id', UserController.deleteUser);

module.exports = userRouter;
