import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    default: "example@gmail.com",
  },
  phoneNum: {
    type: String,
  },
  company: {
    type: String,
  },
});

const usersModel = mongoose.models.user || mongoose.model("user", usersSchema);

export default usersModel;
