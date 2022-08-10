import useWeather from "../hooks/useWeather";

const Result = () => {
  const { result } = useWeather();
  const { name, main } = result;

  const kelvin = 273.15;

  return (
    <div className="contenedor">
      <h2>El Clima de {name} es:</h2>

      <p>
        Temperatura Actual: {main.temp - kelvin}
        <span>&#x2103;</span>
      </p>
      <p>
        Min: {main.temp_min - kelvin}
        <span>&#x2103;</span>
      </p>
      <p>
        Max:{main.temp_max - kelvin}
        <span>&#x2103;</span>
      </p>
    </div>
  );
};

export default Result;
