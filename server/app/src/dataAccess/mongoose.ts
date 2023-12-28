import mongoose from "mongoose";
import "dotenv/config";

export const connectToMongoose = async () => {
  try {
    if (process.env.MONGODB_URI)
      await mongoose.connect(process.env.MONGODB_URI);

    return "Connected to MongoDB";
  } catch (error) {
    return Promise.reject(error);
  }
};
