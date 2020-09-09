import React from 'react'

const Weather = ({ data }) => {
  const { name, main, weather } = data

  if (!name) return null

  const kelvin = 273.15

  return (
    <div className='card-panel whithe s12'>
      <div className='black-text'>
        <h2>The weather of {name} is: </h2>
        <p className='temperatura'>{parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span> </p>
        <p>Feels like: {parseFloat(main.feels_like - kelvin, 10).toFixed(2)}</p>
        <p>Weather: {weather[0].main}</p>
        <p>Max Temp: {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span> </p>
        <p>Min Temp: {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span> </p>
      </div>
    </div>
  )
}

export default Weather
