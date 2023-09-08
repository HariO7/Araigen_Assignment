import { Request, Response } from "express";
import VendorModel, { VendorType } from "../models/vendor.model";

export const getAllVendors = async (req: Request, res: Response) => {
  try {
    const allVendors = await VendorModel.find();
    return res.status(200).json({ data: allVendors });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const getVendor = async (req: Request, res: Response) => {
  const driverId = req.params.id;
  const Vendor = await VendorModel.findById(driverId);
  if (Vendor) {
    return res.status(200).json({ data: Vendor });
  } else {
    return res
      .status(404)
      .json({ message: "Vendor Not found with specified id" });
  }
};

export const createVendor = async (req: Request, res: Response) => {
  try {
    const { contactInformation, email, location, name }: VendorType = req.body;

    await VendorModel.create({
      contactInformation,
      email,
      location,
      name,
    });

    res.status(201).json({ message: "Vendor Created" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const updateVendor = async (req: Request, res: Response) => {
  try {
    const vendorId = req.params.id;
    const { data } = req.body;
    const isVendorExisting = await VendorModel.findById(vendorId);
    if (isVendorExisting !== null) {
      await VendorModel.findOneAndUpdate({ _id: vendorId }, data);
      return res.status(200).json({ message: "Vendor Details updated" });
    } else {
      return res.status(404).json({ message: "Vendor doesn't exist" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const deleteVendor = async (req: Request, res: Response) => {
  try {
    const vendorId = req.params.id;
    const isVendorExisting = await VendorModel.findById(vendorId);
    if (isVendorExisting !== null) {
      await VendorModel.findByIdAndDelete(vendorId);
      return res.status(200).json({ message: "Vendor details deleted" });
    } else {
      return res.status(404).json({ message: "Vendor doesn't exist" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};
