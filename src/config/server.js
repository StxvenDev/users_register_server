import express from 'express';
import cors from 'cors'
import initDatabase from "./database.js";
import userRouter from '../routers/user.routes.js';
class Server {
  
  constructor () {
    this.port = 3040
    this.app = express();
    this.database();
    this.path = {
      user : '/api/user'
    }
    this.middlewares();
    this.routes();
  }

  async database (){
    await initDatabase();
  }

  middlewares (){
    this.app.use(express.json());
    this.app.use(express.urlencoded());
    this.app.use(cors());
  }

  routes (){
    this.app.use(this.path.user, userRouter);
  }

  listen (){
    this.app.listen( this.port , ()=>{
      console.log('Server is Running in port', this.port);
    })
  }
}

export default Server;