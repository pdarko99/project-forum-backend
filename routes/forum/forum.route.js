import express from "express";
import getAllForums from "../../controller/forum/forum.controller.js";
import isAuthorized from "../../util/authorization.js";
const router = express.Router();

router.get("/", isAuthorized,getAllForums);

export default router;
