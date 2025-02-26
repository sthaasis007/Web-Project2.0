import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", formData);
      alert(response.data.message);
      setFormData({ username: "", email: "" });
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.error || "Error logging in. Please try again.");
    }
  };

  return (
    <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('/img2.jpg')" }}>
      <div className="w-full bg-red-500 p-5 text-white text-center">
        <h1 className="text-xl font-bold">Young Generation Kapan</h1>
      </div>

      <div className="flex justify-center items-center w-full mt-10">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border rounded w-full" required />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded transition-transform transform hover:scale-105">Log in</button>
          </form>
          <p className="mt-4 text-sm">
            Don't have an account?{' '}
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
