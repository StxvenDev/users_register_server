import {Router} from 'express'
import { createUser, getUserByUsername } from "../controllers/user.controller.js";
import { validateAge, validateFullname, validatePassword, validateUserName } from '../middlewares/user.validateForm.js';

const userRouter = Router();
userRouter.get('/',[validateUserName],getUserByUsername);
userRouter.post('/', [validateUserName, validateAge, validateFullname, validatePassword], createUser);
export default userRouter;