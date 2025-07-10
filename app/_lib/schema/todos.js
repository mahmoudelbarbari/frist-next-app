import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  status: {
    type: String,
    default: "todo",
  },
});

const todosModel = mongoose.models.todo || mongoose.model("todo", todosSchema);

export default todosModel;
