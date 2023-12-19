import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import userRouter from "./routes/auth/auth.route.js";
import forumRouter from "./routes/forum/forum.route.js";
dotenv.config()


const app = express();
app.use(cors());

app.use(express.json());
mongoose
  .connect(
    process.env.DB_URL
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed ");
  });

app.use("/api/user", userRouter);
app.use("/api/forum", forumRouter);

export default app;
