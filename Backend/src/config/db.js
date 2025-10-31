import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected Database");
  } catch (error) {
    console.log("error occurred", error);
  }
};

export default connectDb;