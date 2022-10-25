// Extrae los datos
import { useContext } from "react";
// indentifica a cual debe extraer
import PacientesContext from "../context/PacientesProvider";

const usePacientes = ( ) => {
    return useContext(PacientesContext)
}

export default usePacientes;