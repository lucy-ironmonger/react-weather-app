import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = (props) => {
  const { date, description, icon, temperature, onSelect } = props;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__description">{`${description}`}</div>
      <div className="forecast-summary__icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary_temperature">
        {`Max Temp:
        ${temperature.max}\u00b0c`}
      </div>
      <div className="forecast-summaries__button">
        <button type="button" onClick={() => onSelect(date)}>
          More info
        </button>
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
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
