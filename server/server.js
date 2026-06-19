import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import itineraryRoutes from "./routes/itineraryRoutes.js";

import uploadRoutes from "./routes/uploadRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/upload", uploadRoutes);
app.use("/api/itineraries", itineraryRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TripAI Backend Running ",
  });
});

const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
