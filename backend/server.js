const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Enquiry = require("./models/Enquiry");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });

// Enquiry API
app.post("/api/enquiry", async (req, res) => {
  try {
    console.log("📩 Incoming data:", req.body);

    const enquiry = new Enquiry({
      name: req.body.name,
      phone: req.body.phone,
      course: req.body.course,
      message: req.body.message
    });
// ADMIN: get all enquiries
app.get("/api/admin/enquiries", async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch enquiries" });
  }
});

    await enquiry.save();
    res.status(201).json({ message: "Enquiry saved successfully" });
  } catch (error) {
    console.error("❌ Save error:", error);
    res.status(500).json({ message: error.message });
  }
  
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
const mongoose = require("mongoose");

