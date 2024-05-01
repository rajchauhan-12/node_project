import React from "react";
import CarForm from "./components/CarForm";
import CarSearchPage from "./components/CarSearchPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Car Rental System</h1>
      </header>
      <CarSearchPage />
      <CarForm />
    </div>
  );
}

export default App;
