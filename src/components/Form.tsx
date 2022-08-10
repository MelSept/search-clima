import { ReactElement, FormEvent } from "react";
import { useState } from "react";
import useWeather from "../hooks/useWeather";

const Form = (): ReactElement => {
  const [alert, setAlert] = useState("");
  const { search, dataSearch, checkWeather } = useWeather();

  const { city, country } = search;

  //utilizamos preventDefault para que no nos recarge la pagina entera y nos resetee los estados
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //

    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    checkWeather(search);
  };

  return (
    <div className="contenedor">
      {alert && <p>{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={dataSearch}
            value={city}
          />
        </div>
        <div className="campo">
          <label htmlFor="country">País</label>
          <select
            id="country"
            name="country"
            onChange={dataSearch}
            value={country}
          >
            <option value="">Seleccione un País</option>
            <option value="AR">Argentina</option>
            <option value="CL">Chile</option>
            <option value="BR">Brasil</option>
            <option value="UR">Uruguay</option>
            <option value="CO">Colombia</option>
            <option value="MX">Mexico</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Form;
