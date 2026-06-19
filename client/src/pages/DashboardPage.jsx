import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/axios";
import useAuthStore from "../store/authStore";
import hero from "../images/hero.jpg";
import TripCard from "../components/TripCard";
import Layout from "../components/Layout";

function DashboardPage() {
  const navigate = useNavigate();

  const token = useAuthStore((state) => state.token);

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrips = async () => {
      try {
        const res = await api.get("/itineraries", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTrips(res.data.itineraries || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (token) loadTrips();
  }, [token]);

  return (
    <Layout>
      <div className="min-h-screen bg-[#F6F7FB]">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <div className="grid lg:grid-cols-2 gap-10 bg-orange-400 rounded-[40px] p-10 text-white items-center mb-12">
            <div>
              <h1 className="text-5xl font-bold leading-tight">
                Plan smarter journeys with AI
              </h1>

              <p className="mt-5 text-orange-100 text-lg">
                Upload flights, hotel bookings and travel documents and let
                TripAI generate structured itineraries instantly.
              </p>

              <button
                onClick={() => navigate("/upload")}
                className="mt-8 bg-white text-orange-400 px-7 py-4 rounded-2xl font-semibold"
              >
                Create Trip
              </button>
            </div>

            <img src={hero} className="rounded-3xl h-75 object-cover w-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-8">
              <p className="text-gray-500">Trips</p>

              <h1 className="text-5xl font-bold mt-3">{trips.length}</h1>
            </div>

            <div className="bg-white rounded-3xl p-8">
              <p className="text-gray-500">Documents</p>

              <h1 className="text-5xl font-bold mt-3">
                {trips.reduce(
                  (acc, trip) => acc + (trip.uploadedFiles?.length || 0),
                  0,
                )}
              </h1>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Recent Trips</h2>

          {loading ? (
            <div>Loading...</div>
          ) : trips.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold">
                Start planning your next trip
              </h2>

              <p className="text-gray-500 mt-4">
                Upload your bookings and generate AI-powered itineraries.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {trips.map((trip, index) => (
                <TripCard
                  key={trip._id}
                  trip={trip}
                  index={index}
                  navigate={navigate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default DashboardPage;
