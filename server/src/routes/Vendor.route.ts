import { Router } from "express";
import {
  createVendor,
  deleteVendor,
  getAllVendors,
  getVendor,
  updateVendor,
} from "../controllers/vendor.controllers";

const VendorRouter = Router();

VendorRouter.get("/getAllvendors", getAllVendors);

VendorRouter.get("/getVendor/:id", getVendor);

VendorRouter.post("/createVendor", createVendor);

VendorRouter.put("/updateVendor/:id", updateVendor);

VendorRouter.delete("/deleteVendor/:id", deleteVendor);

export default VendorRouter