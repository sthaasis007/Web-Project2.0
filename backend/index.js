const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("./db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Add this in .env file

// Middleware
app.use(cors());
app.use(express.json());

// **Test Route**
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// **1. Get All Users**
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// **2. Get a Single User by ID**
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// **3. Create a New User (Signup)**
app.post("/signup", async (req, res) => {
  try {
    const { first_name, last_name, email, phone, username, password } = req.body;

    // Check if user already exists
    const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user
    const newUser = await pool.query(
      "INSERT INTO users (first_name, last_name, email, phone, username, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [first_name, last_name, email, phone, username, hashedPassword]
    );

    res.status(201).json({ message: "User registered successfully", user: newUser.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// **4. Login Route**
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [username]);

    if (user.rows.length === 0) {
      return res.status(400).json({ error: "User not found" });
    }

    // Compare passwords
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.rows[0].id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token, user: user.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// **5. Update a User**
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, phone, username } = req.body;

    await pool.query(
      "UPDATE users SET first_name = $1, last_name = $2, email = $3, phone = $4, username = $5 WHERE id = $6",
      [first_name, last_name, email, phone, username, id]
    );

    res.json({ message: "User updated successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// **6. Delete a User**
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);

    if (user.rowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// **Start Server**
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
