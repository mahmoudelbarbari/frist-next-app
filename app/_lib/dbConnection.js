import mongoose from "mongoose";

export function dbConnection() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/nextfirst")
    .then(() => {
      console.log("connected to db successfuly");
    })
    .catch((err) => {
      console.log(err);
    });
}
