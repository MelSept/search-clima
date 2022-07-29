import { ReactElement } from "react";
import { WeatherProvider } from "./context/WeatherProvider";
import AppWeather from "./components/AppWeather";
import "./index.css";

function App(): ReactElement {
  return (
    <>
      <WeatherProvider>
        <header>
          <h1>Buscador de Clima</h1>
        </header>
        <AppWeather />;
      </WeatherProvider>
    </>
  );
}

export default App;
