const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: [true, "Car should have an owner"],
  },
  price: {
    type: String,
  },
  carModel: {
    type: String,
  },
  maxSpeed: {
    type: String,
  },
  carType: {
    type: String,
  },
  duration: {
    type: String,
  },
  carColor: {
    type: String,
  },
  rentStartDate: {
    type: Date,
    default: Date.now,
  },
  rentEndDate: {
    type: Date,
  },
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
