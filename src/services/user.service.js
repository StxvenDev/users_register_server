import bcryptjs from 'bcryptjs'
import { createUserRepository, getUserByUsernameRepository } from "../repository/user.repository.js";

const createUserService = async (userPayload) => {
  userPayload.password = bcryptjs.hashSync(userPayload.password,8);
  return await createUserRepository(userPayload);
}

const getUserByUsernameService = async (username) => {
  return await getUserByUsernameRepository(username);
}

const loginUserService = async (userName, password) => {

}


export {
  createUserService,
  getUserByUsernameService
}

