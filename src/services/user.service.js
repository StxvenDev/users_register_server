import bcryptjs from 'bcryptjs'
import { createUserRepository, deleteUserRepository, getUserByIdRepository, getUserByUsernameRepository } from "../repository/user.repository.js";
import generateJwt from '../utils/generate-jwt.js';

const createUserService = async (userPayload) => {
  userPayload.password = bcryptjs.hashSync(userPayload.password,8);
  return await createUserRepository(userPayload);
}

const getUserByUsernameService = async (username) => {
  return await getUserByUsernameRepository(username);
}

const deleteUserService = async (userId) => {
  const user = getUserByIdRepository(userId);
  if(!user){
    throw new Error('The User not exist');
  }
  return await deleteUserRepository(userId);
}

const loginUserService = async (username, password, res) => {
  const user = await getUserByUsernameRepository(username);
  if(!user){
    throw new Error('The User not exist');
  }
  if(!user.state){
    throw new Error('The user is not activate');
  }
  const validatePass = bcryptjs.compareSync(password, user.password);
  if(!validatePass){
    throw new Error('Incorrect password');
  }
  const token = await generateJwt(user._id);
  res.cookie('token', token);
  return user;
}


export {
  createUserService,
  getUserByUsernameService,
  loginUserService,
  deleteUserService
}

