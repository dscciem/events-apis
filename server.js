require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./server/database/connection");
connectDB();

app.use(express.json());

const eventsRouter = require("./routes/events");
app.use("/events", eventsRouter);

// set view engine
app.set("view engine", "ejs");
app.set("views", [__dirname + "/views"]);

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.listen(process.env.PORT, () =>
  console.log("Server Started at", process.env.PORT)
);
