import axios from "axios";

const getForecast = (setSelectedDate, setForecasts, setLocation) => {
  const endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  axios.get(endpoint).then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setLocation(response.data.location);
    setForecasts(response.data.forecasts);
  });
};

export default getForecast;
