import { useContext } from "react";
import ClimaContext, { DatesContext } from "../context/ClimaProvider";

// es necesario importarle la interface

const useClima = () => {
  return useContext(ClimaContext) as DatesContext;
};

export default useClima;
