import express from 'express';
import cors from 'cors'
import initDatabase from "./database.js";
import userRouter from '../routers/user.routes.js';
import cookieParser from 'cookie-parser';
import { corsOptions } from './corsOptions.js';
class Server {
  
  constructor () {
    this.port = process.env.PORT;
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
    this.app.use(cors(corsOptions));
    this.app.use(cookieParser());
    this.app.use(express.json());
    this.app.use(express.urlencoded());
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