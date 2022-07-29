import { useState, createContext, ChangeEvent, ReactNode } from "react";

type TSearch = { city: string; country: string };

// Todo lo que yo quiero utilizar en el contexto debe ir  en su interface y
// en el value del Context.provider

export interface DatesContext {
  search: TSearch;
  dataSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

type Props = {
  children?: ReactNode;
};

const WeatherContext = createContext<DatesContext | null>(null);

const WeatherProvider = ({ children }: Props) => {
  const [search, setSearch] = useState<TSearch>({ city: "", country: "" });

  const dataSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        search,
        dataSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;
