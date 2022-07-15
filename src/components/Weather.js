import React from "react";

const Weather = props => (
  <div className="infoWeath">
      {props.city && (
        <>
          <p>
            Location: {props.city}, {props.country}
          </p>
          <p>Temperature: {props.temp}</p>
          <p>Pressure: {props.pressure}</p>
          <p>Sunset: {props.sunset}</p>
        </>
      )}
      <p className="error">{props.error}</p>
    </div>
);

export default Weather;
