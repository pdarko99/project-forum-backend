import express from "express";
import createUser from "../../controller/auth/signUp.controller.js";
import userLogin from "../../controller/auth/signIn.controller.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", userLogin);

export default router;
