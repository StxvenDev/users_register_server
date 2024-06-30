import jwt from "jsonwebtoken";
import User from "../models/user.schema.js";

const validateJwt = async (req, res, next) => {
  try {
    const {token} = req.cookies;
    if(!token){
      return res.status(401).json({error:'unautorized'});
    }
    const {id} = jwt.verify(token, process.env.MYKEY);
    const user = await User.findById(id);
    req.user = user;
  } catch (error) {
    return res.status(401).json({error:'invalid token'});
  }
  next();
}

export {
  validateJwt
}