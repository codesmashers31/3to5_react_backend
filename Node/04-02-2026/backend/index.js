
import express from "express";
import cors from "cors";
import formRoutes from "./routes/middleAuth.js";
import userRoute from "./routes/userRoute.js"

import connectDB from "./config/db.js";

const app = express();
connectDB()
app.use(cors());
app.use(express.json());

app.use("/api/middle", formRoutes);
app.use("/api/user",userRoute)

app.listen(5000, () => console.log("Server running on 5000"));


// http://localhost:5000/api/middle