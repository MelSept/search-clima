import { useState, createContext, ChangeEvent, ReactNode } from "react";
import axios from "axios";

type TSearch = { city: string; country: string };
type TWeather = { name: string };
type Props = {
  children?: ReactNode;
};

// Todo lo que yo quiero utilizar en el contexto debe ir  en su interface y
// en el value del Context.provider

//a search y cheackWeather le pasamos los datos que solicita para la consulta, en este caso
//seria ciudad y pais

export interface DatesContext {
  search: TSearch;
  result: TWeather;
  dataSearch: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  checkWeather: (data: TSearch) => void;
}

const WeatherContext = createContext<DatesContext | null>(null);

const WeatherProvider = ({ children }: Props) => {
  const [search, setSearch] = useState<TSearch>({ city: "", country: "" });
  const [result, setResult] = useState<TWeather>({ name: "" }); //Respuesta = lista de objetos

  const dataSearch = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  //Typescript pide que le volvamos a decir de que tipo es data

  const checkWeather = async (searchData: TSearch) => {
    try {
      // destructuring
      const { city, country } = searchData;

      const appId = process.env.REACT_APP_API_KEY;

      // el axios entre {} lleva data por defecto ya que viene con la libreria

      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;
      const { data } = await axios(url);
      const { lat, lon } = data[0];

      const urlWeather = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${appId}`;
      const { data: weather } = await axios(urlWeather);
      setResult(weather[0]); // le pasamos posicion 0 para que traiga el primer elemento
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        search,
        result,
        dataSearch,
        checkWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;
