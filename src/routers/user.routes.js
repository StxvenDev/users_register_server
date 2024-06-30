import {Router} from 'express'
import { createUser, deleteUser, getUserByUsername, loginUser } from "../controllers/user.controller.js";
import { validateAge, validateFullname, validatePassword, validateUserName } from '../middlewares/user.validateForm.js';
import { validateAuth } from '../middlewares/auth.validate.js';
import { validateJwt } from '../middlewares/validate-jwt.js';

const userRouter = Router();
userRouter.get('/',[validateUserName],getUserByUsername);
userRouter.post('/', [validateUserName, validateAge, validateFullname, validatePassword,validateJwt], createUser);
userRouter.delete('/', [validateJwt], deleteUser);
userRouter.post('/login', [validateUserName, validatePassword, validateAuth], loginUser);
export default userRouter;