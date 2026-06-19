import express from "express";

import { uploadFile } from "../controllers/uploadController.js";
import upload from "../middleware/uploadMiddleware,js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, upload.array("files", 10), uploadFile);

export default router;
