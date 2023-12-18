import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import userRouter from "./routes/auth/auth.route.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/images/", express.static(path.join("backend/images")));
mongoose
  .connect(
    "mongodb+srv://prince_darko:gospel333@cluster0.4imowdz.mongodb.net/project-forum?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed ");
  });

app.use("/api/user", userRouter);
// app.use("/api/user", userRoutes);

export default app;
