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
            icon={icon}
            key={date}
            onForecastSelect={onForecastSelect}
          />
        );
      })}
    </div>
  );
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
  }),
  onForecastSelect: PropTypes.func.isRequired,
};

ForecastSummaries.defaultProps = {
  forecasts: [],
};

export default ForecastSummaries;
