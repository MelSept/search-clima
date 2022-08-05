import { ReactElement } from "react";
import Form from "./Form";
import Result from "./Result";
import useWeather from "../hooks/useWeather";

const AppWeather = (): ReactElement => {
  const { result } = useWeather();

  return (
    <>
      <main className="dos-columnas">
        <Form />
        {result.name && <Result />}
      </main>
    </>
  );
};

export default AppWeather;
