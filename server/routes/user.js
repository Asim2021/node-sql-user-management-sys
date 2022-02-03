const express = require('express')
const userController = require('../controllers/userController')

const userRouter = express.Router();

userRouter.get('/',userController.view)
userRouter.post('/',userController.find)
userRouter.get('/:id',userController.deleteUser)

userRouter.get('/adduser',userController.userForm)
userRouter.post('/adduser',userController.addUser)

userRouter.get('/edituser/:id',userController.editUser)
userRouter.post('/edituser/:id',userController.updateUser)

userRouter.get('/viewuser/:id',userController.viewUser)

module.exports = userRouter;
