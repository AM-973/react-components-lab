const WeatherForecastsItem = ({ weatherIcon, weatherData }) => {
  return (
    <div className="weather-forecast-item">
      {weatherIcon}
      {weatherData}
    </div>
  )
}

export default WeatherForecastsItem