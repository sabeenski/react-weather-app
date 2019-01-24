import React, { Component } from 'react';

const Weather = (props) => {
  console.log(props.description)
  return (
    <div className="weather__info">
      {
        props.city && props.country && <p className="weather__key"> <b>Location:</b> 
          <span className="weather__value"> {props.city}, {props.country}</span></p>
      }
      {
        props.temperature && <p className="weather__key"><b>Temperature:</b> 
          <span className="weather__value"> {props.temperature}°C</span></p>
      }
      {
        props.humidity && <p className="weather__key"><b>Humidity:</b> 
        <span className="weather__value"> {props.humidity}</span></p>
      }
      {
        props.description && <p className="weather__key"><b>Conditions:</b> 
        <span className="weather__value"> {props.description}</span></p>
      }
      {
        props.error && 
        <p className="weather__error">{props.error}</p>
      }
    </div>
  )
}
 
export default Weather;