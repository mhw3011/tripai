import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/axios";
import AuthLayout from "../components/AuthLayout";

function RegisterPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await api.post("/auth/register", formData);

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Create account</h1>

          <p className="mt-2 text-gray-500">
            Start planning smarter with TripAI
          </p>
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-red-500">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-medium text-gray-700">Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Email</label>

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Password</label>

            <div className="mt-2 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 text-white font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-blue-600">
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default RegisterPage;
