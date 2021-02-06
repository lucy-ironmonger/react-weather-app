import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

const App = ({ location, forecasts }) => {
  const { city, country } = location;
  const { date, temperature, description, icon } = forecasts[0];
  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries
        date={date}
        temperature={temperature}
        description={description}
        icon={icon}
      />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    description: PropTypes.string,
    icon: PropTypes.number,
  }).isRequired,
};

export default App;
