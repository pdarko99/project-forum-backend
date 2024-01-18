import express from "express";
import {
  createForum,
  getAllForums,
} from "../../controller/forum/forum.controller.js";
import isAuthorized from "../../util/authorization.js";
const router = express.Router();

router.get("/", isAuthorized, getAllForums);
router.post("/", isAuthorized, createForum);

export default router;
