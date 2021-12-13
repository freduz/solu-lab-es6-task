import mongoose from 'mongoose';
import { DATABASE, DATABASE_PASSWORD } from './index';

const DB = DATABASE.replace('<password>', DATABASE_PASSWORD);

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected on ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
