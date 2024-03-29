import { Schema, model } from "mongoose";

//Schema for the datanbase
const productsSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name required!"],
  },
  description: {
    type: String,
    required: [true, "Product description required!"],
    minlength: 5,
    maxlength: 500,
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

export default model("Product", productsSchema);