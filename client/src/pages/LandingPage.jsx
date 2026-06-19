import { useNavigate } from "react-router-dom";
import heroImg from "../images/landhero.jpg";
import img1 from "../images/paris.jpg";
import img2 from "../images/newyork.jpg";
import { Zap, Brain, Globe, Link2 } from "lucide-react";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F6F7FB] text-gray-700">
      <div className="fixed top-0 left-0 w-full z-50 bg-orange-400  border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">TripAI</h1>

          <div className="flex gap-6  text-xl">
            <button
              onClick={() => navigate("/login")}
              className="hover:text-gray-200 text-white"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="bg-white text-orange-400 px-5 py-2 rounded-xl hover:bg-gray-100"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center pt-24 pb-24"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-6 -translate-y-10">
          <h1 className="text-6xl font-bold">Plan Trips Instantly with AI</h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
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

      <div className="max-w-6xl mx-auto px-6 py-20 text-center ">
        <h2 className="text-4xl font-bold mb-12">Why TripAI?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center">
              <Zap className="text-orange-400 w-10 h-10" />
            </div>
            <h3 className="mt-4 font-semibold text-xl">Fast Planning</h3>
            <p className="text-gray-500 mt-2">
              Generate complete itineraries instantly
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center">
              <Brain className="text-orange-400 w-10 h-10" />
            </div>
            <h3 className="mt-4 font-semibold text-xl">AI Powered</h3>
            <p className="text-gray-500 mt-2">
              Extracts flights, hotels & activities
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center">
              <Globe className="text-orange-400 w-10 h-10" />
            </div>
            <h3 className="mt-4 font-semibold text-xl">Travel Ready</h3>
            <p className="text-gray-500 mt-2">
              Real world itineraries, not templates
            </p>
          </div>
        </div>
      </div>

      <div className="+ max-w-full mx-auto  py-40 grid md:grid-cols-2 gap-20 items-center bg-white">
        <div className="relative flex justify-center items-center">
          <img
            src={img2}
            className="w-[70%] rotate-[-10deg] border-15 border-white shadow-2xl h-120"
          />

          <img
            src={img1}
            className="absolute left-80 top-50 w-[80%%] rotate-[4deg] border-15 border-white shadow-2xl h-60"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold">
            Your trip, fully planned in seconds
          </h2>

          <p className="mt-6 text-gray-600">
            AI turns your bookings into a structured travel itinerary instantly.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-8 bg-orange-400 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-300"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-[#F6F7FB] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">How it works</h2>

          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-200"></div>

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

      <div className="bg-orange-400 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
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
            className="mt-4 md:mt-0 bg-white text-orange-500 px-6 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-100"
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
