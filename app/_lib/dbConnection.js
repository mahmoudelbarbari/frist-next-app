import mongoose from "mongoose";

export function dbConnection() {
  try {
    mongoose.connect(process.env.DB_URL).then(() => {
      console.log("connected to db successfuly");
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}
