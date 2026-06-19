import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/axios";
import upload from "../images/upload.jpg";

import { PDFDownloadLink } from "@react-pdf/renderer";
import ItineraryPDF from "../pdf/ItineraryPDF";

function SharedPage() {
  const { shareId } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSharedTrip = async () => {
      try {
        const res = await api.get(`/itineraries/share/${shareId}`);
        setTrip(res.data.itinerary);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSharedTrip();
  }, [shareId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading shared itinerary...
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Itinerary not found
      </div>
    );
  }

  const shareUrl = window.location.href;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      {/* NAVBAR */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <h1 className="text-2xl font-bold text-orange-400">TripAI</h1>

          {/* ACTIONS */}
          <div className="flex gap-4 items-center">
            {/* PDF DOWNLOAD */}
            <PDFDownloadLink
              document={<ItineraryPDF trip={trip} />}
              fileName="trip-itinerary.pdf"
            >
              {({ loading }) => (
                <button className="bg-orange-400 text-white px-4 py-2 rounded-xl text-sm">
                  {loading ? "Generating..." : "Download PDF"}
                </button>
              )}
            </PDFDownloadLink>

            {/* COPY LINK */}
            <button
              onClick={copyLink}
              className="bg-black text-white px-4 py-2 rounded-xl text-sm"
            >
              Copy Link
            </button>
          </div>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="p-10">
        {/* HEADER CARD */}
        <div className="bg-white rounded-3xl overflow-hidden max-w-5xl mx-auto">
          <img src={upload} className="h-72 w-full object-cover" />

          <div className="p-8">
            <h1 className="text-4xl font-bold">
              {trip.itinerary?.arrivalCity}
            </h1>

            <p className="text-gray-500 mt-2">Shared Travel Itinerary</p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="max-w-5xl mx-auto mt-8 bg-white p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">Trip Summary</h2>
          <p className="text-gray-600">{trip.itinerary?.tripSummary}</p>
        </div>

        {/* FLIGHTS */}
        <div className="max-w-5xl mx-auto mt-8 bg-white p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6">Flights</h2>

          {trip.itinerary?.flights?.map((f, i) => (
            <div key={i} className="border-b py-4">
              <p className="font-semibold">
                {f.from} → {f.to}
              </p>
              <p className="text-gray-500">{f.departureTime}</p>
            </div>
          ))}
        </div>

        {/* ITINERARY */}
        <div className="max-w-5xl mx-auto mt-8 bg-white p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6">Itinerary</h2>

          {trip.itinerary?.dailyItinerary?.map((day, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-xl font-bold mb-3">
                Day {day.day} - {day.title}
              </h3>

              <div className="space-y-3">
                {day.activities?.map((a, j) => (
                  <div key={j} className="border-l-2 pl-4">
                    <p className="text-orange-400 text-sm font-semibold">
                      {a.time}
                    </p>

                    <p className="font-medium">{a.title}</p>

                    <p className="text-gray-500 text-sm">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SharedPage;
