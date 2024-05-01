const express = require("express");
const carContoller = require("../controllers/carController");

const router = express.Router();

router.route("/").get(carContoller.getAllCars).post(carContoller.createCar);

router.route("/:id").get(carContoller.getCar);

module.exports = router;
