import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import WeatherIcon from "react-icons-weather";
import {
  StyledForecastDetails,
  Title,
  Container1,
  Container2,
} from "../styles/styles";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind, icon } = forecast;
  return (
    <StyledForecastDetails className="forecast-details">
      <Title>
        <h1>Forecast Detail</h1>
      </Title>
      <Container1 className="forecast-details__container_1">
        <div className="forecast-details__date">
          {moment(date).format("ddd Do MMM")}
        </div>
        <div className="forecast-details__temperature-min">
          {`Min Temp: ${temperature.min}\u00b0c`}
        </div>
        <div className="forecast-details__temperature-max">
          {`Max Temp: ${temperature.max}\u00b0c`}
        </div>
        <div className="forecast-details__humidity">{`Humidity: ${humidity}%`}</div>
        <div className="forecast-details__wind">{`Wind Speed: ${wind.speed}mph`}</div>
      </Container1>
      <Container2 className="forecast-details__container_2">
        <div className="forecast-summary__icon">
          <WeatherIcon name="owm" iconId={icon} />
        </div>
      </Container2>
    </StyledForecastDetails>
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
    icon: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
