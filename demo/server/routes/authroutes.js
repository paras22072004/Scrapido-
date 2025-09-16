import express from "express";
import { signup, login } from "../controllers/authcontrollers.js";

const router = express.Router();

// /api/auth/signup
router.post("/signup", signup);

// /api/auth/login
router.post("/login", login);

export default router;
