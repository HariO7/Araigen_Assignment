import mongoose from "mongoose";

export interface ProductType {
  _id: mongoose.Types.ObjectId;
  productName: string;
  price: number;
  category: string;
  image: string;
}

const ProductSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const ProductModal = mongoose.model("Product", ProductSchema);

export default ProductModal;
