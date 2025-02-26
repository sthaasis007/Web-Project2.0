import React from 'react';

function About() {
  return (
    <div>
      <div className="h-auto bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/79/a3/ee/79a3ee7a2116d50a16d84eef280a5399.jpg')" }}>
        <h1 className="text-5xl font-bold text-black mb-4">Know More About Us</h1>
        <p className="text-lg text-black max-w-2xl text-center">
          Welcome to website of Young Generation Kapan. We are dedicated to providing the best service possible. Our team is passionate about what we do to exceed your expectations. Learn more about our journey and values below.
        </p>
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-black mb-2">Our Mission</h2>
          <p className="text-md text-black max-w-xl text-center">
            Our mission is to deliver high-quality products that bring joy and satisfaction to our customers. We believe in innovation, integrity, and excellence in everything we do.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-black mb-2">Our Team</h2>
          <p className="text-md text-black max-w-xl text-center">
            Our team is composed of talented and dedicated professionals who are committed to achieving our goals. We work collaboratively to ensure the best outcomes for our clients.
          </p>
        </div>
        </div>
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2025 Young Generation Kapan. All rights reserved.</p>
        <p>Contact us: <a href="https://www.instagram.com/aashish.stha007/" className="text-blue-400">Instagram</a></p>
      </div>
    </footer>
    </div>
  );
}

export default About;
