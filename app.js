import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/auth/auth.route.js";
import forumRouter from "./routes/forum/forum.route.js";
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
mongoose.connect(process.env.DB_URL).catch((err) => {
  console.error("Connection failed", err);
});

app.use("/api/user", userRouter);
app.use("/api/forum", forumRouter);

export default app;
