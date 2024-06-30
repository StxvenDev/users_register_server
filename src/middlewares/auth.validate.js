import { getUserByUsernameRepository } from "../repository/user.repository.js";

const validateAuth = async (req, res, next) => {
  const {username} = req.body;
  const user = await getUserByUsernameRepository(username);
    if(!user){
      return res.status(400).json({error: 'The User not exist'});
    }
    if(!user.state){
      return res.status(400).json({error: 'The user is not activate'});
    }
    next();
}



export {
  validateAuth
}
