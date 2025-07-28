import WeatherForecastsItem from "./WeatherForecastItem/WeatherForecastItem.jsx"
import WeatherIcon from "./WeatherIcon/WeatherIcon.jsx"
import WeatherData from "./WeatherData/WeatherData.jsx"

const Weather = (props) => {
  return (
    <>
      {props.weather.map((weather) =>
        <WeatherForecastsItem
          key={weather.day}
          weatherIcon={<WeatherIcon icon={weather.img} alt={weather.imgalt} />}
          weatherData={<WeatherData day={weather.day} conditions={weather.conditions} time={weather.time} />}
        />
      )}
    </>
  )
}

export default Weather
