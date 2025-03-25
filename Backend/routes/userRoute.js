import express from "express"
import { listUser, loginUser, registerUser } from "../controller/userController.js"


const userRouter = express.Router();

userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser)
userRouter.get('/listuser', listUser)

export default userRouter;