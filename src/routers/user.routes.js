import {Router} from 'express'
import { createUser, getUserByUsername, loginUser } from "../controllers/user.controller.js";
import { validateAge, validateFullname, validatePassword, validateUserName } from '../middlewares/user.validateForm.js';
import { validateAuth } from '../middlewares/auth.validate.js';
import { validateJwt } from '../middlewares/validate-jwt.js';

const userRouter = Router();
userRouter.get('/',[validateUserName,validateJwt],getUserByUsername);
userRouter.post('/', [validateUserName, validateAge, validateFullname, validatePassword], createUser);
userRouter.post('/login', [validateUserName, validatePassword, validateAuth], loginUser);
export default userRouter;