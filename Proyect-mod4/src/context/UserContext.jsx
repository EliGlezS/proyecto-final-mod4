/*Este Contexto se crea para el login del usuario */

//Importaciones
import { createContext, useEffect, useState } from "react";

//Creación del contexto

export const UserContext = createContext();

//Creación del proveedor de contexto

export const UserProvider = ({children}) => {

    /*Se usan dos useState uno para guardar si el usuario está logeado 
    y otro para guardar el nombre del usuario que se usará posteriormente (se usa
    otro para el password aunque recomiendan NO guardar la contraseña?)*/
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    //Función para logear al usuario 
    const login = (name , pass) =>{ //Hacer localStorage.getItem()
        setIsLoggedIn(true); //El usuario ahora está logeado
        setUserName(name);
        setPassword(pass);

        //Se guarda en localStorage
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username", name);
        localStorage.setItem("password", pass);
    };

    //Función para hacer logout
    const logout = () =>{
        setIsLoggedIn(false); //El usuario pasa a no estar logeado
        setUserName(""); //al no estar logeado el usuario no tiene nombre guardado
        setPassword("");

        //Se limpia el localStorage
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("password");

    };

    //Se comprueba si el usuario está logeado en el localStorage al cargar la pág (para eso se usa un useEffect), se ejecuta el useEffect cada vez que isLoggedIn cambie de valor
    useEffect(() => {
        //Se leen los valores almacenados en el localStorage y devuelve los valores 
        const savedIsLoggedIn = localStorage.getItem("isLoggedIn");
        const savedUserName = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        //Se comprueba si está logeado el usuario
        if (savedIsLoggedIn === true) {
            setIsLoggedIn(true);
            setUserName(savedUserName);
            setPassword(savedPassword);
        };

    }, []);

    //Se hace logout después de pasar cierto tiempo en este caso después de que haya pasado 5 min (300000 ms), se 
    useEffect(() => {
        //Si el usuario está logeado (true), es cuando se realiza el logout después de cierto tiempo
        if (isLoggedIn) {
            const timeOut = setTimeout(() => {
                //Se llama al logout depués de 5min 
                logout();
            }, 300000); //Se puede probar con 1 min (60000 ms) y se ve como sale el form de login de nuevo

            //Se limpia el timeOut cuando el componente se desmonte o se cierre sesión
            return () => {
                clearTimeout(timeOut);
            }
        }

    }, [isLoggedIn]);


    return(
        <UserContext.Provider value={{ isLoggedIn, username, password, setUserName, setPassword, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}