import express from "express";
import {
  appendForumId,
  createForum,
  getAllForums,
  getForum,
} from "../../controller/forum/forum.controller.js";
import isAuthorized from "../../util/authorization.js";
const router = express.Router();

router.get("/", isAuthorized, getAllForums);
router.get("/userForum", isAuthorized, getForum);
router.post("/", isAuthorized, createForum);
router.post("/addForumId", isAuthorized, appendForumId);

export default router;
