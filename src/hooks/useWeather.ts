import { useContext } from "react";
import WeatherContext, { DatesContext } from "../context/WeatherProvider";

// es necesario importarle la interface

const useWeather = () => {
  return useContext(WeatherContext) as DatesContext;
};

export default useWeather;
