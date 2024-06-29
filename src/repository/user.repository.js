
import User from "../models/user.schema.js"

const createUserRepository = async (userPayload) => {
  const user = await User.create(userPayload);
  return user;
}

const getUserByUsernameRepository = async (username) => {
  const user = await User.findOne({username : username});
  return user || [];
}

export {
  createUserRepository,
  getUserByUsernameRepository
}