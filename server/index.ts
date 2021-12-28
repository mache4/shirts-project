import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/user";
import ordersRouter from "./routes/orders";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/orders", ordersRouter);

app.get("/", (req, res) => {
    res.send("Shirts Project");
})

mongoose.connect(`${process.env.MONGODB_URI}`)
    .then(() => console.log("MongoDB connected."))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}.`))