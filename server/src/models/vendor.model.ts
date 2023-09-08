import mongoose from "mongoose";

export interface VendorType {
  _id: mongoose.Types.ObjectId;
  name: string;
  location: string;
  contactInformation: {
    phoneNumber: string;
    website: string;
  };
  email: string;
}

const VendorSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactInformation: {
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const VendorModel = mongoose.model("Vendor", VendorSchema);

export default VendorModel;
