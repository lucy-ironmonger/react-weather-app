import React from "react";
import "../styles/App.css";

const ForecastSummary = () => {
  return (
    <div>
      <div className="Forecast Summary">
        <p>Hello I am a forecast summary</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ForecastSummary;
