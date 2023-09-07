import { Router } from "express";
import {
  createTruckDriver,
  deleteTruckDriver,
  getAllTruckDrivers,
  getTruckDriver,
  updateTruckDriver,
} from "../controllers/truckDriver.controllers";

const truckDriverRouter = Router();

truckDriverRouter.get("/getAllTruckDrivers", getAllTruckDrivers);

truckDriverRouter.get("/getTruckDriver/:id", getTruckDriver);

truckDriverRouter.post("/createTruckDriver", createTruckDriver);

truckDriverRouter.put("/updateTruckDriver/:id", updateTruckDriver);

truckDriverRouter.delete("/deleteTruckDriver/:id", deleteTruckDriver);

export default truckDriverRouter;
