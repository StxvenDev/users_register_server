import jwt from 'jsonwebtoken';


const generateJwt = ( id = '' ) => {
  return new Promise((resolve, reject) => {
    const payload = {id};
    jwt.sign(
      payload, 
      process.env.MYKEY, 
      {expiresIn:'1h'}, 
      (err, token)=> {
        if(err){
          reject('Something is not working');
        }else{
          resolve(token);
        }
    });
  })
}

export default generateJwt;