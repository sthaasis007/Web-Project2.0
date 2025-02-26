const express = require("express");
const cors = require("cors");
const pool = require("./db"); // Import the database connection
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5174" })); // Allow requests from your frontend

app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    try {
      const result = await pool.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
        [username, email, password]
      );
  
      res.status(201).json({ message: "User registered successfully", user: result.rows[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });
  
// Login Route
app.post("/login", async (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ error: "Username and email are required" });
  }

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND email = $2",
      [username, email]
    );

    if (result.rows.length > 0) {
      res.status(200).json({ message: "Login successful", user: result.rows[0] });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
