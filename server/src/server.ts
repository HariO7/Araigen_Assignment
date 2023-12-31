import Express, { Application, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import truckDriverRouter from "./routes/truckDrivers.route";
import VendorRouter from "./routes/Vendor.route";
import ProductRouter from "./routes/Poducts.route";

const app: Application = Express();
const bodyParser = Express.json;

//middleware
app.use(cors());
app.use(bodyParser());
dotenv.config();

//mongodb connection
const db_connection = process.env.MONGO_db as string;
mongoose.connect(db_connection).then(() => {
  console.log(`[Database]:Connected`);
});

//Routes
app.use(truckDriverRouter);
app.use(VendorRouter);
app.use(ProductRouter);

// server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[Server]: server started on port ${port}`);
});
