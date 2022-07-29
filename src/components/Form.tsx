import { ReactElement } from "react";
import useClima from "../hooks/useClima";

const Form = (): ReactElement => {
  const { search, dataSearch } = useClima();

  return (
    <div className="contenedor">
      <form>
        <div className="campo">
          <label htmlFor="city">Ciudad</label>
          <input type="text" id="city" name="city" />
        </div>
        <div className="campo">
          <label htmlFor="country">País</label>
          <select id="country" name="country">
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
