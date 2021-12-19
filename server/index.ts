import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRouter from "./routes/user";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRouter);

const password = "branislav123";

mongoose.connect(`mongodb+srv://mache4:${password}@cluster0.fodof.mongodb.net/shirts-project?`)
    .then(() => console.log("MongoDB connected."))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}.`))