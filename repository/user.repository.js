
import User from "../models/user.schema.js"

const createUserRepository = async (userPayload) => {
  const user = await User.create(userPayload);
  return user;
}

export {
  createUserRepository,
}