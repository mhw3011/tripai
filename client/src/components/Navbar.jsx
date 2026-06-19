import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

function Navbar() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="bg-orange-400 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1
          onClick={() => navigate("/dashboard")}
          className="text-3xl font-bold text-white cursor-pointer tracking-tight"
        >
          TripAI
        </h1>

        <div className="flex items-center gap-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-white text-lg font-medium hover:text-orange-100 transition"
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/upload")}
            className="text-white text-lg font-medium hover:text-orange-100 transition"
          >
            Upload
          </button>

          <button
            onClick={logout}
            className="ml-4 bg-white text-orange-600 px-4 py-2 rounded-xl font-semibold hover:bg-orange-100 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
