import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/axios";
import useAuthStore from "../store/authStore";

import Layout from "../components/Layout";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ItineraryPDF from "../pdf/ItineraryPDF";

function ItineraryPage() {
  const { id } = useParams();
  const token = useAuthStore((state) => state.token);

  const [copied, setCopied] = useState(false);
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        setLoading(true);

        const res = await api.get(`/itineraries/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data?.itinerary;

        if (!data) {
          console.error("No itinerary found in response:", res.data);
          return;
        }

        setTrip(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [id, token]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F6F7FB] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen bg-[#F6F7FB] flex items-center justify-center">
        Itinerary not found
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/share/${trip.shareId}`;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#F6F7FB]">
        {/* ACTION BAR */}
        <div className="max-w-7xl mx-auto px-8 pt-6 flex justify-end gap-4">
          <PDFDownloadLink
            document={<ItineraryPDF trip={trip} />}
            fileName="trip-itinerary.pdf"
          >
            {({ loading }) =>
              loading ? (
                <button className="bg-gray-400 text-white px-5 py-2 rounded-xl">
                  Generating PDF...
                </button>
              ) : (
                <button className="bg-orange-400 text-white px-5 py-2 rounded-xl">
                  Download PDF
                </button>
              )
            }
          </PDFDownloadLink>
        </div>

        {/* MAIN */}
        <div className="max-w-7xl mx-auto px-8 py-10">
          {/* HERO */}
          <div className="bg-white rounded-[40px] overflow-hidden">
            <div className="p-10">
              <h1 className="text-5xl font-bold">
                {trip.itinerary?.arrivalCity}
              </h1>

              <p className="text-gray-500 mt-4">
                {trip.itinerary?.travelDates?.join(" • ")}
              </p>

              <p className="mt-3 text-lg text-orange-400">
                {trip.itinerary?.airline}
              </p>
            </div>
          </div>

          {/* FLIGHTS */}
          <div className="bg-white rounded-[40px] p-10 mt-8">
            <h2 className="text-3xl font-bold mb-8">Flights</h2>

            {(trip.itinerary?.flights || []).map((flight, index) => (
              <div key={index} className="border-b py-6">
                <h3 className="text-xl font-semibold">
                  {flight.from} → {flight.to}
                </h3>
                <p className="text-gray-500 mt-2">{flight.departureTime}</p>
              </div>
            ))}
          </div>

          {/* ACTIVITIES */}
          <div className="bg-white rounded-[40px] p-10 mt-8">
            <h2 className="text-3xl font-bold mb-8">Activities</h2>

            <div className="space-y-6">
              {(trip.itinerary?.dailyItinerary || []).map((day, index) => (
                <div key={index} className="border rounded-3xl p-6 mb-6">
                  <h3 className="text-2xl font-bold">
                    Day {day.day} - {day.title}
                  </h3>

                  <div className="mt-4 space-y-3">
                    {(day.activities || []).map((activity, i) => (
                      <div
                        key={i}
                        className="relative pl-6 border-l-2 border-gray-200"
                      >
                        <div className="absolute left-[-7px] top-2 w-3 h-3 bg-orange-400 rounded-full"></div>

                        <p className="text-sm text-orange-400 font-semibold">
                          {activity.time}
                        </p>

                        <p className="font-semibold mt-1">{activity.title}</p>

                        <p className="text-gray-500 text-sm mt-1">
                          {activity.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SHARE */}
          <div className="bg-orange-400 rounded-[40px] p-10 mt-8 text-white">
            <h2 className="text-3xl font-bold">Share your itinerary</h2>

            <p className="mt-4 text-orange-100">
              Send your trip to friends and family.
            </p>

            <div className="mt-6 bg-white rounded-2xl p-4 text-black break-all">
              {shareUrl}
            </div>

            <button
              onClick={copyLink}
              className="mt-6 bg-black text-white px-6 py-3 rounded-xl"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ItineraryPage;
