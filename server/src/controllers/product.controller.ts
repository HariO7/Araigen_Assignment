import { Request, Response } from "express";
import ProductModal, { ProductType } from "../models/products.models";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allVendors = await ProductModal.find();
    return res.status(200).json({ data: allVendors });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await ProductModal.findById(productId);
  if (product) {
    return res.status(200).json({ data: product });
  } else {
    return res
      .status(404)
      .json({ message: "Product Not found with specified id" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { category, image, price, productName }: ProductType = req.body;

    await ProductModal.create({
      category,
      image,
      price,
      productName,
    });

    res.status(201).json({ message: "Product Created" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const { data } = req.body;
    const isVendorExisting = await ProductModal.findById(productId);
    if (isVendorExisting !== null) {
      await ProductModal.findOneAndUpdate({ _id: productId }, data);
      return res.status(200).json({ message: "Product Details updated" });
    } else {
      return res.status(404).json({ message: "Product doesn't exist" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const isVendorExisting = await ProductModal.findById(productId);
    if (isVendorExisting !== null) {
      await ProductModal.findByIdAndDelete(productId);
      return res.status(200).json({ message: "product details deleted" });
    } else {
      return res.status(404).json({ message: "product doesn't exist" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};
