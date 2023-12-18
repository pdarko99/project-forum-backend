import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import userRouter from "./routes/auth/auth.route.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/images/", express.static(path.join("backend/images")));


app.use("/api/user", userRouter);
// app.use("/api/user", userRoutes);

export default app;
