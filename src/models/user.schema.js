import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
  name : {
    type : String,
    require : true
  },
  lastName : {
    type : String,
    require : true
  },
  username : {
    type : String,
    require : true,
    unique : true
  },
  password : {
    type : String,
    require : true
  },
  address : {
    type : String,
    require : false,
  },
  img : {
    type : String,
    require : false
  },
  age : {
    type : Number,
    require : true
  },
  state : {
    type : Boolean,
    default : true
  }
})

const User = mongoose.model('User', userSchema);

export default User;