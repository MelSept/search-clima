import useWeather from "../hooks/useWeather";

const Result = () => {
  const { result } = useWeather();
  const { name } = result;

  return (
    <div className="contenedor">
      <h2>El Clima de {name} es:</h2>
    </div>
  );
};

export default Result;
