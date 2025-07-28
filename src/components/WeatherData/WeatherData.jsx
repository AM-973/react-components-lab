const WeatherData = ({ day, conditions, time }) => {
  return (
    <div>
      <h3>{day}</h3>
      <p><span>Conditions: </span>{conditions}</p>
      <p><span>Time: </span>{time}</p>
    </div>
  )
}

export default WeatherData