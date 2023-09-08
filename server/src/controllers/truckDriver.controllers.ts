import { Request, Response } from "express";
import TruckDriverModal, {
  TruckDriverType,
} from "../models/truckDriver.models";

export const getAllTruckDrivers = async (req: Request, res: Response) => {
  try {
    const allTruckDrivers = await TruckDriverModal.find();
    return res.status(200).json({ data: allTruckDrivers });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const getTruckDriver = async (req: Request, res: Response) => {
  try {
    const driverId = req.params.id;
    const truckDriver = await TruckDriverModal.findById(driverId);
    if (truckDriver) {
      return res.status(200).json({ data: truckDriver });
    } else {
      return res
        .status(404)
        .json({ message: "Truck Driver Not found with specified id" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const createTruckDriver = async (req: Request, res: Response) => {
  try {
    const {
      address,
      drivingLicenceDetails,
      mobileNumber,
      name,
    }: TruckDriverType = req.body;

    await TruckDriverModal.create({
      address,
      drivingLicenceDetails,
      mobileNumber,
      name,
    });

    res.status(201).json({ message: "Truck Driver Created" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const updateTruckDriver = async (req: Request, res: Response) => {
  try {
    const driverId = req.params.id;
    const { data } = req.body;
    const isDriverExisting = await TruckDriverModal.findById(driverId);
    if (isDriverExisting !== null) {
      await TruckDriverModal.findOneAndUpdate({ _id: driverId }, data);
      return res.status(200).json({ message: "Truck Driver Details updated" });
    } else {
      return res.status(404).json({ message: "Truck Driver doesn't exist" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const deleteTruckDriver = async (req: Request, res: Response) => {
  try {
    const driverId = req.params.id;
    const isDriverExisting = await TruckDriverModal.findById(driverId);
    if (isDriverExisting !== null) {
      await TruckDriverModal.findByIdAndDelete(driverId);
      return res.status(200).json({ message: "Truck Driver details deleted" });
    } else {
      return res.status(404).json({ message: "Truck Driver doesn't exist" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};
