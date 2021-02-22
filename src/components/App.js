/* eslint react/prop-types: 0 */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import "../styles/App.css";
// import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails"; // First component
import getForecast from "../requests/getForecast";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = () => {
  // SET STATE
  const [selectedDate, setSelectedDate] = useState(0);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [forecasts, setForecasts] = useState([]);

  // The below is setting the selectedForecast to be the object in forecasts that equals the selectedDate
  const selectedForecast = forecasts.find(
    (forecast) => selectedDate === forecast.date
  );

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  // THIS FUNCTION PASSES THE DATE INTO THE STATE, TO CHANGE THE STATE
  // THE WIFE
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  // conditional logic added with selectedForecast&& so it only makes component if there is one
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

// App.propTypes = {
//   forecasts: PropTypes.arrayOf(
//     PropTypes.shape({
//       date: PropTypes.number,
//       description: PropTypes.string,
//       icon: PropTypes.number,
//       temperature: PropTypes.shape({
//         max: PropTypes.number,
//         min: PropTypes.number,
//       }),
//     })
//   ).isRequired,
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,
// };

export default App;
