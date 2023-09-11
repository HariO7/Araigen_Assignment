import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.controller";

const ProductRouter = Router();

ProductRouter.get("/getAllProducts", getAllProducts);

ProductRouter.get("/getProduct/:id", getProduct);

ProductRouter.post("/createProduct", createProduct);

ProductRouter.put("/updateProduct/:id", updateProduct);

ProductRouter.delete("/deleteProduct/:id", deleteProduct);

export default ProductRouter;
