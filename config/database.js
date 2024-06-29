import mongoose from 'mongoose';

const initDatabase = async () => {
  try {
    const pass = process.env.MONGO_PASS
    await mongoose.connect(pass);
    console.log('Connection to database was succesfull !!');
  } catch (error) {
    console.log(error);
    throw new Error('Something is not work well');
  }
}

export default initDatabase;