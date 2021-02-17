import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "weather-react-icons/lib/css/weather-icons.css";
import { WeatherIcon } from "weather-react-icons";
import moment from "moment";

const ForecastSummary = (props) => {
  const { date, description, icon, temperature } = props;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__description">{`Weather: ${description}`}</div>
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
