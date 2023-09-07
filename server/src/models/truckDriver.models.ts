import mongoose from "mongoose";

export interface TruckDriverType {
  _id: mongoose.Types.ObjectId;
  name: string;
  mobileNumber: string;
  address: string;
  drivingLicenceDetails: {
    number: string;
    expiryDate: Date;
  };
}

const truckDriversSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  drivingLicenceDetails: {
    number: {
      type: String,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    issueDate: {
      type: Date,
      required: true,
    },
  },
});

const TruckDriverModal = mongoose.model("TruckDriver", truckDriversSchema);

export default TruckDriverModal;
