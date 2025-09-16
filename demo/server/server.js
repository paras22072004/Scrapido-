
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import aiRoutes from "./routes/aiRoutes.js";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroutes.js";
connectDB();


const app = express();
app.use(cors());
app.use(express.json());
console.log("Loaded API Key:", process.env.OPENAI_API_KEY ? "✅ Found" : "❌ Missing");

app.use("/api/auth", authRoutes);
// Routes
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
