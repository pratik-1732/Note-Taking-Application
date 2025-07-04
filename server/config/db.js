import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is connected successfully...");
  } catch (error) {
    console.error("DB connection error: ", error.message);
  }
};

export default connectDB;
