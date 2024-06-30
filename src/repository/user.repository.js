
import User from "../models/user.schema.js"

const createUserRepository = async (userPayload) => {
  const user = await User.create(userPayload);
  return user;
}

const getUserByUsernameRepository = async (username) => {
  const user = await User.findOne({username : username});
  return user;
}

const deleteUserRepository = async (userId) => {
   const user = await User.findByIdAndUpdate(userId, {state : false}, {new : true});
   return user;
}

const getUserByIdRepository = async (userId) => {
  const user = await User.findById(userId);
  return user;
}

export {
  createUserRepository,
  getUserByUsernameRepository,
  deleteUserRepository,
  getUserByIdRepository
}