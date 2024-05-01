import React, { useState } from "react";
import axios from "axios";
import "./../CarForm.css"; // Import CSS file for styling

const CarForm = () => {
  const [carData, setCarData] = useState({
    userEmail: "",
    price: "",
    carModel: "",
    maxSpeed: "",
    carType: "",
    duration: "",
    carColor: "",
    rentEndDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:3001/api/cars", carData);
      // Optionally, you can handle success here, like showing a success message or redirecting to another page.
      console.log("Car added successfully");
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <div className="car-form-container">
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit} className="car-form">
        <input
          type="text"
          name="userEmail"
          placeholder="Owner's Email"
          value={carData.userEmail}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={carData.price}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="carModel"
          placeholder="Car Model"
          value={carData.carModel}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="maxSpeed"
          placeholder="Max Speed"
          value={carData.maxSpeed}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="carType"
          placeholder="Car Type"
          value={carData.carType}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={carData.duration}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="carColor"
          placeholder="Car Color"
          value={carData.carColor}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="date"
          name="rentStartDate"
          value={carData.rentStartDate}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="date"
          name="rentEndDate"
          placeholder="Rent End Date"
          value={carData.rentEndDate}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CarForm;
