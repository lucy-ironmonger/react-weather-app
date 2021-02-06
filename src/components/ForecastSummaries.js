import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ date, temperature, description, icon }) => {
  return (
    <div>
      <div className="Forecast Summaries">
        <p>Hello I am Forecast Summaries</p>
      </div>
      <div className="Forecast Summary">
        <ForecastSummary
          date={date}
          temperature={temperature}
          description={description}
          icon={icon}
        />
      </div>
    </div>
  );
};

ForecastSummaries.propTypes = {
  date: PropTypes.number,
  temperature: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
  description: PropTypes.string,
  icon: PropTypes.number,
}.isRequired;

export default ForecastSummaries;
