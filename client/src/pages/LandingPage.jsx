import { useNavigate } from "react-router-dom";
import heroImg from "../images/landhero.jpg";
import img1 from "../images/paris.jpg";
import img2 from "../images/newyork.jpg";
import { Zap, Brain, Globe, Link2 } from "lucide-react";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F6F7FB] text-gray-700">
      <div className="fixed top-0 left-0 w-full z-50 bg-orange-400 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white">TripAI</h1>

          <div className="flex items-center gap-3 md:gap-6 text-base md:text-xl">
            <button
              onClick={() => navigate("/login")}
              className="text-white hover:text-gray-200"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="bg-white text-orange-400 px-4 md:px-5 py-2 rounded-xl hover:bg-gray-100"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-6 pt-24 pb-24"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative text-center text-white max-w-3xl -translate-y-6">
          <h1 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">
            Plan Trips Instantly
            <span className="block text-orange-400">with AI</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-200">
            Upload travel bookings and get a complete day-by-day itinerary in
            seconds.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-10 bg-orange-400 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-300"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* WHY TRIPAI */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-12">Why TripAI?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center">
              <Zap className="text-orange-400 w-10 h-10" />
            </div>

            <h3 className="mt-4 font-semibold text-xl">Fast Planning</h3>

            <p className="text-gray-500 mt-2">
              Generate complete itineraries instantly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center">
              <Brain className="text-orange-400 w-10 h-10" />
            </div>

            <h3 className="mt-4 font-semibold text-xl">AI Powered</h3>

            <p className="text-gray-500 mt-2">
              Extracts flights, hotels and activities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center">
              <Globe className="text-orange-400 w-10 h-10" />
            </div>

            <h3 className="mt-4 font-semibold text-xl">Travel Ready</h3>

            <p className="text-gray-500 mt-2">
              Real world itineraries, not templates.
            </p>
          </div>
        </div>
      </div>

      {/* SHOWCASE */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative h-[320px] md:h-[500px]">
            <img
              src={img2}
              className="absolute w-[65%] left-0 top-0 rotate-[-8deg] border-[14px] border-white shadow-2xl"
            />

            <img
              src={img1}
              className="absolute w-[65%] right-0 bottom-0 rotate-[5deg] border-[14px] border-white shadow-2xl"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your trip, fully planned in seconds
            </h2>

            <p className="mt-6 text-gray-600">
              AI turns your bookings into a structured travel itinerary
              instantly.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="mt-8 bg-orange-400 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-[#F6F7FB] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">How it works</h2>

          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="relative bg-white p-10 rounded-2xl shadow">
              <div className="w-12 h-12 mx-auto bg-orange-400 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>

              <h3 className="mt-6 font-semibold text-xl">Upload Documents</h3>

              <p className="text-gray-500 mt-3">
                Add flight tickets, hotel bookings or PDFs/images of your travel
                plans.
              </p>
            </div>

            <div className="relative bg-white p-10 rounded-2xl shadow">
              <div className="w-12 h-12 mx-auto bg-orange-400 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>

              <h3 className="mt-6 font-semibold text-xl">AI Processing</h3>

              <p className="text-gray-500 mt-3">
                Our AI extracts travel details and understands your entire trip
                structure.
              </p>
            </div>

            <div className="relative bg-white p-10 rounded-2xl shadow">
              <div className="w-12 h-12 mx-auto bg-orange-400 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>

              <h3 className="mt-6 font-semibold text-xl">Get Itinerary</h3>

              <p className="text-gray-500 mt-3">
                Receive a complete day-by-day travel plan with flights and
                activities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-orange-400 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-lg">TripAI</h2>

            <p className="text-sm text-orange-100 mt-1">
              A project by Munauvar Warsi
            </p>
          </div>

          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/munauvar-warsi-71439b28a/",
                "_blank",
              )
            }
            className="bg-white text-orange-500 px-6 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-100"
          >
            <Link2 size={18} />
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
