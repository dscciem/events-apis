const express = require("express");
const router = express.Router();
const eventsdb = require("../models/events");

// Creating a New event
router.post("/", async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Fields cannot be empty!" });
    return;
  }

  //Checking if the event is already in the database
  const eventExist = await eventsdb.findOne({ eventName: req.body.eventName });
  if (eventExist) return res.status(404).send("Event already Exist");

  const event = new eventsdb({
    eventName: req.body.eventName,
    eventDescription: req.body.eventDescription,
    eventDate: req.body.eventDate,
    eventTime: req.body.eventTime,
    eventLocation: req.body.eventLocation,
    eventDuration: req.body.eventDuration,
  });

  try {
    event.save(event).then(() => {
      res.status(201).json(event);
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Getting all events
router.get("/", async (req, res) => {
  try {
    const events = await eventsdb.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Gettiing one event
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Requesting one
router.post("/", (req, res) => {});

module.exports = router;
