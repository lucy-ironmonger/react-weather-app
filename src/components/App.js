/* eslint react/prop-types: 0 */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
// import PropTypes from "prop-types";
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
  const [searchLocation, setSearchLocation] = useState({});

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

  const handleOnChange = (event) => {
    setSearchLocation({
      city: event.target.value,
    });
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append(searchLocation);
    console.log(formData);
    axios
      .post(
        `https://mcr-codes-weather.herokuapp.com/forecast?city=${searchLocation.city}`,
        {}
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // conditional logic added with selectedForecast&& so it only makes component if there is one
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
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
