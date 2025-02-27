import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Store error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/login", formData);
      localStorage.setItem("token", response.data.token); // Store token
      navigate("/dashboard"); // Redirect on success
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.error || "Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('/img2.jpg')" }}>
      {/* Header */}
      <div className="w-full bg-red-500 p-5 text-white text-center">
        <h1 className="text-xl font-bold">Young Generation Kapan</h1>
      </div>

      {/* Login Form */}
      <div className="flex justify-center items-center w-full mt-10">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Login</h1>

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm bg-red-100 p-2 rounded mb-3">{error}</p>}

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded transition-transform transform hover:scale-105 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-700 hover:text-white hover:bg-black px-2 py-1 rounded transition-transform transform hover:scale-105">
              Register Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
