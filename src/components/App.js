/* eslint react/prop-types: 0 */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails"; // First component
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = () => {
  // SET STATE
  const [selectedDate, setSelectedDate] = useState(0);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [forecasts, setForecasts] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");

  // The below is setting the selectedForecast to be the object in forecasts that equals the selectedDate
  const selectedForecast = forecasts.find(
    (forecast) => selectedDate === forecast.date
  );

  // THIS FUNCTION PASSES THE DATE INTO THE STATE, TO CHANGE THE STATE
  // THE WIFE
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  // SUBMIT BUTTON HANDLING THE AXIOS REQUEST
  const handleLocationSearch = () => {
    getForecast(setSelectedDate, setForecasts, setLocation, searchLocation);
  };

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      handleLocationSearch();
    }
  };

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation, searchLocation);
  }, []);

  // conditional logic added with selectedForecast&& so it only makes component if there is one
  return (
    <div className="weather-app">
      <h1>Weather you like it or not</h1>
      <SearchForm
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
        onSubmit={handleLocationSearch}
        onKeyPress={handleKeyPress}
      />
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
