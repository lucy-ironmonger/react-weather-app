import React from "react";
import PropTypes from "prop-types";
import "../styles/styles.css";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import { StyledForecastSummary, Button } from "../styles/styles";

const ForecastSummary = (props) => {
  const { date, description, icon, temperature, onForecastSelect } = props;
  return (
    <StyledForecastSummary className="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__description">{`${description}`}</div>
      <div className="forecast-summary__icon">
        <WeatherIcon className="iconSummary" name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary_temperature">
        {`Max Temp:
        ${temperature.max}\u00b0c`}
      </div>
      <div className="forecast-summaries__button">
        <Button
          className="mainBtn"
          type="button"
          onClick={() => onForecastSelect(date)}
        >
          More info
        </Button>
      </div>
    </StyledForecastSummary>
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
  onForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
