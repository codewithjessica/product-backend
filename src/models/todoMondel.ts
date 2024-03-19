import { Schema, model } from "mongoose";

//Schema for the datanbase
const todoSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title text required!"],
    maxlength: 50,
  },
});

export default model("Todo", todoSchema);