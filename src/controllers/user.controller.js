import { createUserService, getUserByUsernameService, loginUserService } from "../services/user.service.js";

const createUser = async (req, res) => {
  try {
    const user = req.body;
    await createUserService(user);
    return res.status(201).json({msg : 'user create successfull'})
  } catch (error) {
    console.log(error);
    return res.status(500).json({msg : 'server error'})
  }
}

const getUserByUsername = async (req, res) => {
  try {
    const {username} = req.body;
    const user = await getUserByUsernameService(username);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error:'server error'});
  }
}

const loginUser = async (req, res) => {
  try {
    const {username,password} = req.body;
    const user = await loginUserService(username, password, res);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.json({
      error:error.message,
      ok:false
    });
  }
}

export {
  createUser,
  getUserByUsername,
  loginUser
}