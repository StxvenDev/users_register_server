const regex = /^[0-9]*$/;

const validateUserName = (req, res, next) => {
  const {username} = req.body;
  if(!username){
    return res.status(400).json({error:'The username is require'});
  }
  if(regex.test(username)){
    return res.status(400).json({error:'The username must contain only letters'});
  }
  if(username.length > 15){
    return res.status(400).json({error:'The username must contain less than 15 characters'})
  }
  next();
}

const validateFullname = (req, res, next) => {
  const {name, lastName} = req.body;
  if(!name || !lastName){
    return res.status(400).json({error:'The fullname is incomplete'});
  }
  if(regex.test(name) || regex.test(lastName)){
    return res.status(400).json({error:'The fullname must contain only letters'});
  }
  next();
}

const validateAge = (req, res, next) => {
  const {age} = req.body;
  if(!age){
    return res.status(400).json({error:'The user age is require'});
  }
  next();
}

const validatePassword = (req, res, next) => {
  const {password} = req.body;
  if(!password){
    return res.status(400).json({error:'The password is require'});
  }
  if(password.length < 5){
    return res.status(400).json({error:'The password must contain more than 5 characters'})
  } 
  next();
}

  export {
    validateUserName,
    validateFullname,
    validateAge,
    validatePassword
  }