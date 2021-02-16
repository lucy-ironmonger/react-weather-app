import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import { WeatherIcon } from "weather-react-icons";

const ForecastSummary = (props) => {
  const { date, description, icon, temperature } = props;

  // DATE CONVERSION
  const milliseconds = date * 1000;
  const dateObject = new Date(milliseconds);
  const correctDate = dateObject.toLocaleString("en-US");

  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">{`Date: ${correctDate}`}</div>
      <div className="forecast-summary_description">{`Weather: ${description}`}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary_temperature">
        {`Max Temp:
        ${temperature.max}\u00b0c`}
      </div>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
