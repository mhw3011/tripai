import { extractTextFromImage } from "../services/ocrService.js";
import { extractTextFromPDF } from "../services/pdfService.js";
import { generateItinerary } from "../services/openaiService.js";
import Itinerary from "../models/Itinerary.js";
import crypto from "crypto";

export const uploadFile = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No files uploaded",
      });
    }

    let extractedText = "";
    let uploadedFiles = [];

    for (const file of req.files) {
      uploadedFiles.push({
        name: file.originalname,
        url: file.path, // Cloudinary URL
      });

      let text = "";

      if (file.mimetype === "application/pdf") {
        text = await extractTextFromPDF(file.path);
      } else {
        text = await extractTextFromImage(file.path);
      }

      extractedText += "\n\n" + text;
    }

    const itinerary = await generateItinerary(extractedText);

    const shareId = crypto.randomUUID();

    const savedItinerary = await Itinerary.create({
      user: req.user._id,
      uploadedFiles,
      originalText: extractedText,
      itinerary,
      shareId,
    });

    res.status(201).json({
      success: true,
      message: "Itinerary generated successfully",
      savedItinerary,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
