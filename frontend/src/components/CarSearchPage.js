import React, { useState } from "react";
import axios from "axios";
import "./../CarSearchPage.css"; // Import CSS file for styling

const CarSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3001/api/cars/${searchTerm}`
      );
      setSearchResult(response?.data?.data?.car);
      setError(null);
    } catch (error) {
      setSearchResult(null);
      setError("Car not found");
      console.error("Error searching for car:", error);
    }
  };

  return (
    <div className="search-container">
      <h2 className="search-heading">Search Cars by MongoDB ID</h2>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Enter MongoDB ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {searchResult && (
        <div className="search-result">
          <p>
            <span className="result-label">Car Model:</span>{" "}
            {searchResult.carModel}
          </p>
          <p>
            <span className="result-label">User Email:</span>{" "}
            {searchResult.userEmail}
          </p>
          <p>
            <span className="result-label">Price:</span> {searchResult.price}
          </p>
          <p>
            <span className="result-label">Max Speed:</span>{" "}
            {searchResult.maxSpeed}
          </p>
          {/* Display other car details as needed */}
        </div>
      )}
    </div>
  );
};

export default CarSearchPage;
