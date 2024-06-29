import bcryptjs from 'bcryptjs'
import { createUserRepository } from "../repository/user.repository.js";

const createUserService = async (userPayload) => {
  userPayload.password = bcryptjs.hashSync(userPayload.password,8);
  return await createUserRepository(userPayload);
}
export {
  createUserService
}