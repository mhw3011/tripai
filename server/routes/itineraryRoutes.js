import express from "express";
import {
  getItineraries,
  getSharedItinerary,
  getItineraryById,
} from "../controllers/itineraryController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all itineraries
router.get("/", protect, getItineraries);

router.get("/:id", protect, getItineraryById);

// Public share route
router.get("/share/:shareId", getSharedItinerary);

export default router;
