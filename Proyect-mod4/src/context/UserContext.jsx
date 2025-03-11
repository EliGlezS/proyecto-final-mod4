/*Este Contexto se crea para el login del usuario */

//Importaciones
import { createContext, useContext, useState } from "react";

//Creación del contexto

export const UserContext = createContext();

//Creación del proveedor de contexto

export const UserProvider = ({children}) => {

    /*Se usan dos useState uno para guardar si el usuario está logeado 
    y otro para guardar el nombre del usuario que se usará posteriormente*/
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUserName] = useState("");

    //Función para logear al usuario 
    const login = (name) =>{
        setIsLoggedIn(true); //El usuario ahora está logeado
        setUserName(name);
    }

    //Función para hacer logout
    const logout = () =>{
        setIsLoggedIn(false); //El usuario pasa a no estar logeado
        setUserName(""); //al no estar logeado el usuario no tiene nombre guardado
    }

    return(
        <UserContext.Provider value={{ isLoggedIn, username, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}