// Extrae los datos
import { useContext } from "react";
// indentifica a cual debe extraer
import AuthContext from "../context/AuthProvider";

const useAuth = ( ) => {
    return useContext(AuthContext)
}

export default useAuth