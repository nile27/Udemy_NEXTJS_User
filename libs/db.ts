import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    const connect = await mongoose.connect(
      process.env.NEXT_PUBLIC_MONGO_URI as string
    );
    console.log(`MongoDB Connected ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error :${error}`);
    process.exit(1);
  }
};
export default connectDB;
