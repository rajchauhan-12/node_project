const express = require("express");
const app = express();
const carRoutes = require("./routes/carRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/cars", carRoutes);

module.exports = app;

