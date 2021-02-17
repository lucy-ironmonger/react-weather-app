import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd do MMM")}
      </div>
      <div className="forecast-details__temperature-min">
        {`Min Temp: ${temperature.min}\u00b0c`}
      </div>
      <div className="forecast-details__temperature-max">
        {`Max Temp: ${temperature.max}\u00b0c`}
      </div>
      <div className="forecast-details__humidity">{`Humidity: ${humidity}%`}</div>
      <div className="forecast-details__wind">{`Wind Speed: ${wind.speed}mph`}</div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
