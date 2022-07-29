import { ReactElement } from "react";
import { ClimaProvider } from "./context/ClimaProvider";
import AppClima from "./components/AppClima";
import "./index.css";

function App(): ReactElement {
  return (
    <>
      <ClimaProvider>
        <header>
          <h1>Buscador de Clima</h1>
        </header>
        <AppClima />;
      </ClimaProvider>
    </>
  );
}

export default App;
