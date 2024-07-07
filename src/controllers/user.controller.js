import { createUserService, deleteUserService, getUserByUsernameService, loginUserService } from "../services/user.service.js";

const createUser = async (req, res) => {
  try {
    const payload = req.body;
    const user = await createUserService(payload);
    return res.status(201).json({user})
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

const deleteUser = async (req, res) => {
  try {
    const {userId} = req.query;
    const user = await deleteUserService(userId);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({error:error.message});
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
  deleteUser,
  getUserByUsername,
  loginUser,
}