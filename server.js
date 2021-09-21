require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./server/database/connection");
connectDB();

app.use(express.json());

const eventsRouter = require("./routes/events");
app.use("/events", eventsRouter);

app.listen(process.env.PORT, () =>
  console.log("Server Started at", process.env.PORT)
);
