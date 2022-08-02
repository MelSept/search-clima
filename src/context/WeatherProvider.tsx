import { useState, createContext, ChangeEvent, ReactNode } from "react";

type TSearch = { city: string; country: string };

// Todo lo que yo quiero utilizar en el contexto debe ir  en su interface y
// en el value del Context.provider

//a search y cheackWeather le pasamos los datos que solicita para la consulta, en este caso
//seria ciudad y pais

export interface DatesContext {
  search: TSearch;
  dataSearch: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  checkWeather: (data: TSearch) => void;
}

type Props = {
  children?: ReactNode;
};

const WeatherContext = createContext<DatesContext | null>(null);

const WeatherProvider = ({ children }: Props) => {
  const [search, setSearch] = useState<TSearch>({ city: "", country: "" });

  const dataSearch = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  //Typescript pide que le volvamos a decir de que tipo es data

  const checkWeather = (data: TSearch) => {
    console.log(data);
  };

  return (
    <WeatherContext.Provider
      value={{
        search,
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
