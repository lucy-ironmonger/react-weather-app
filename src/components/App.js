/* eslint react/prop-types: 0 */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import "../styles/App.css";
// import PropTypes from "prop-types";
import axios from "axios";
import LocationDetails from "./LocationDetails"; // First component
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(0);

  // based on the data, location is {} and forecast is []
  // we are setting the initial values.
  const [location, setLocation] = useState({ city: "", country: "" });
  const [forecasts, setForecasts] = useState([]);

  const getForecast = () => {
    const endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

    axios.get(endpoint).then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setLocation(response.data.location);
      setForecasts(response.data.forecasts);
    });
  };

  useEffect(() => {
    getForecast();
  }, []);

  // The below is setting the selectedForecast to be the object in forecasts that equals the selectedDate
  const selectedForecast = forecasts.find(
    (forecast) => selectedDate === forecast.date
  );

  // THIS FUNCTION PASSES THE DATE INTO THE STATE, TO CHANGE THE STATE
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
