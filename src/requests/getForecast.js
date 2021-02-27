import axios from "axios";

const getForecast = (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchLocation
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchLocation) {
    endpoint += `?city=${searchLocation}`;
  }

  return axios.get(endpoint).then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setLocation(response.data.location);
    setForecasts(response.data.forecasts);
  });
};

export default getForecast;
