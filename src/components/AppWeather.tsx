import { ReactElement } from "react";
import Form from "./Form";
import Result from "./Result";

const AppWeather = (): ReactElement => {
  return (
    <>
      <main className="dos-columnas">
        <Form />
        <Result />
      </main>
    </>
  );
};

export default AppWeather;
