import React from "react";
import "../styles/ForecastSummaries.css";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts, onForecastSelect }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => {
        const { date, temperature, description, icon } = forecast;
        return (
          <ForecastSummary
            date={date}
            temperature={temperature}
            description={description}
            icon={icon.toString()}
            key={date}
            onForecastSelect={onForecastSelect}
          />
        );
      })}
    </div>
  );
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.number,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  onForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummaries;
