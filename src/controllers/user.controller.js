import { createUserService, getUserByUsernameService } from "../services/user.service.js";
import {response, request} from 'express'

const createUser = async (req, res = response) => {
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
    return res.status(200).json({user});
  } catch (error) {
    return res.status(500).json({error:'server error'});
  }
}

export {
  createUser,
  getUserByUsername
}