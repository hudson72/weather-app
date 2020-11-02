import React from "react";
import "./Result.css";

const Result = (props) => {
  const {
    date,
    city,
    temp,
    sunrise,
    sunset,
    pressure,
    wind,
    err,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <>
        <h3>
          Results for <strong>{city}: </strong>
        </h3>
        <h4>
          Date and time: <strong>{date}</strong>
        </h4>
        <h4>
          Current temperature: <strong>{temp}&#176;C</strong>
        </h4>
        <h4>
          Sunrise: <strong>{sunriseTime}</strong>
        </h4>
        <h4>
          Sunet: <strong>{sunsetTime}</strong>
        </h4>
        <h4>
          Wind: <strong>{wind} m/s</strong>
        </h4>
        <h4>
          Pressure: <strong>{pressure} hPa</strong>
        </h4>
      </>
    );
  }

  return (
    <>
      <div className="result">
        {err ? `We don't have ${city} in our database` : content}
      </div>
    </>
  );
};

export default Result;
