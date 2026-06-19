import Itinerary from "../models/Itinerary.js";

export const getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      itineraries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSharedItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findOne({
      shareId: req.params.shareId,
    });

    if (!itinerary) {
      return res.status(404).json({
        success: false,
        message: "Itinerary not found",
      });
    }

    res.status(200).json({
      success: true,
      itinerary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getItineraryById = async (req, res) => {
  try {
    const itinerary = await Itinerary.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!itinerary) {
      return res.status(404).json({
        success: false,
        message: "Itinerary not found",
      });
    }

    res.status(200).json({
      success: true,
      itinerary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
