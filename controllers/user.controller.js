import { createUserService } from "../services/user.service.js";
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

export {
  createUser
}