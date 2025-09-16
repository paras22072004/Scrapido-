import express from "express";
import multer from "multer";
import { analyzeScrap } from "../controllers/aiController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/analyze-comprehensive", upload.single("scrapImage"), analyzeScrap);

export default router;
