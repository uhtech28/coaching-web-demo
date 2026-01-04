const mongoose = require("mongoose");

// This schema defines what an enquiry looks like
const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  message: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export model so server.js can use it
module.exports = mongoose.model("Enquiry", enquirySchema);
