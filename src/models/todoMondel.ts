import { Schema, model } from "mongoose";

//Schema for the datanbase
const todoSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name required!"],
  },
  descriptoin: {
    type: String,
    required: [true, "Product description required!"],
    minlength: 5,
    maxlength: 100,
  },
  price: {
    type: Number,
    required: [true, "Price cannot be negative number!"],
    min: 0,
  },
  rating: {
    type: Number,
    required: [true, "Rating must between 0 to 5!"],
    min: 0,
    max: 5,
  },
});

export default model("Todo", todoSchema);