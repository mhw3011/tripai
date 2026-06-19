import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    uploadedFiles: [
      {
        name: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],

    originalText: {
      type: String,
      required: true,
    },

    itinerary: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },

    shareId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

export default Itinerary;
