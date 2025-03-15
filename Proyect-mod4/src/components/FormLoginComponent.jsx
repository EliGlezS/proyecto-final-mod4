//Este componente se usa para hacer el formulario de login del usuario que luego se mostrará en la pág login

//Importaciones 
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const FormLoginComponent = () => {

    //Se traen los datos necesarios de userContext
    const { isLoggedIn, username, password, setUserName, setPassword, login, logout } = useContext(UserContext);

    //Se crea un useState para almacenar los posibles errores en las verificaciones 
    const [errorUserName, setErrorUserName] = useState(""); 
    const [errorPassword, setErrorPassword] = useState("");

    //Se usa useNavigate para que al realizar el formul
    const navigate = useNavigate();

    //Expresiones regex para validar username y el password
    const usernameRegex = /^[a-zA-Z0-9]{6,9}$/;//Debe tener más de 5 y no más de 9 caracteres que pueden incluir letras (mayúsculas y minúsculas) y números
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9,12}$/;//Debe tener más de 8 caracteres y no mas de 12, debe incluir letras mayúsculas, minúsculas, números y caracteres especiales.

    //Función validacion del Login y dentro se validan el usuario y la password
    const validationLogin = () =>{

      //Validación del nombre de usuario
      if(!usernameRegex.test(username)){
        //si no cumple con la validación sale un error 
        setErrorUserName("Username must be between 6-9 characters, and can only contain letters (uppercase and lowercase) and numbers.");
        return false;
      }else{
        setErrorUserName("");
      }

      //Validación de la password
      if (!passwordRegex.test(password)) {
        setErrorPassword("Password must be between 9-12 characters, including one uppercase letter, one lowercase letter, one number, and one special character.");
        return false;
      }

      //Limpieza de errores
      setErrorUserName("");
      setErrorPassword("");
      return true;
      
    }

    //Manejador del envío de formulario login
    const handleLoginSubmit = (event) =>{
      //Se previene el comportamiento por defecto del navegador con el formulario
      event.preventDefault();

      //Si se valida el formulario, se hace el login y se guarda el username --> da un token y redirige a login 
      //Al ser un envio de formulario se usa el Navigate 
      if (validationLogin()) {
        login(username);
        navigate("/");
      }
    }

    //Manejador para el logout
    const handleLogout = () =>{
      logout();
      navigate("/");//Se redirige a home para mostrar después de hacer logout
    }

  return (
    <div className="general-container-login-logout">
      {!isLoggedIn ? (
        <div className="container-login">
        <h1>Login</h1>
          <form  className="form-login" onSubmit={handleLoginSubmit} noValidate>
            <div>
              <label>UserName:</label>
              <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Username..." maxLength="9" required/>
              {/* Muestra el mensaje de error de username */}
              {errorUserName && <p style={{color:"red"}}>{errorUserName}</p>}
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password..." maxLength="12" required/>
              {errorPassword && <p style={{color:"red"}}>{errorPassword}</p>}
            </div>
            <button className="login-button" type="submit">Login</button>
          </form>
        </div>
      ):(
        <div className="container-logout">
          <h1>Welcome, {username}!</h1>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <Link to="/"><p className="home-link">Home</p></Link>
        </div>
      )
    }
    </div>
  )
}

export default FormLoginComponent