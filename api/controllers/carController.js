const Car = require("../models/carModel");

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({
      status: "success",
      data: {
        cars,
      },
    });
  } catch (err) {
    console.log("Error", err);
  }
};

exports.createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newCar,
      },
    });
    // console.log(req.body);
  } catch (err) {
    console.log("Error", err);
  }
};

exports.getCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id); // Use req.params.id to get the ID from the request parameters
    if (!car) {
      // If car is not found, return 404
      return res.status(404).json({
        status: "error",
        message: "Car not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        car,
      },
    });
  } catch (err) {
    res.status(500).json({
      // Change status code to 500 for server error
      status: "error",
      message: "Error getting Car",
    });
  }
};
