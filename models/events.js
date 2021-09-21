const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  eventDuration: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Events", eventsSchema);
