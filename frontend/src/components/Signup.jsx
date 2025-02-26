import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        username: formData.username,
      });
  
      alert(response.data.message);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", username: "" });
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error signing up. Please try again.");
    }
  };
  
  

  return (
    <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('/img2.jpg')" }}>
      <div className="w-full bg-red-500 p-5 text-white text-center">
        <h1 className="text-xl font-bold">Young Generation Kapan</h1>
      </div>

      <div className="flex justify-center items-center w-full mt-10">
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="p-2 border rounded w-full" required />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded transition-transform transform hover:scale-105">Sign Up</button>
          </form>
          <p className="mt-4 text-sm">
            Already have an account? <a href="/login" className="text-blue-700 hover:text-white hover:bg-black px-2 py-1 rounded transition-transform transform hover:scale-105">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
